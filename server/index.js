'use strict';
const http=require('node:http');
const crypto=require('node:crypto');
const fs=require('node:fs');
const path=require('node:path');

const PORT=Number(process.env.PORT)||8787;
const HOST=process.env.HOST||'127.0.0.1';
const DATA_FILE=process.env.DATA_FILE||path.join(__dirname,'data','store.json');
const TOKEN_TTL=30*24*60*60*1000;
const clients=new Map();
const emptyStore=()=>({users:{},tokens:{},friendships:{},pointEvents:{},queues:{},matches:{}});
function loadStore(){try{return{...emptyStore(),...JSON.parse(fs.readFileSync(DATA_FILE,'utf8'))}}catch{return emptyStore()}}
let store=loadStore();
function persist(){fs.mkdirSync(path.dirname(DATA_FILE),{recursive:true});const temp=`${DATA_FILE}.tmp`;fs.writeFileSync(temp,JSON.stringify(store,null,2));fs.renameSync(temp,DATA_FILE)}
const json=(res,status,body)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Authorization, Content-Type','Access-Control-Allow-Methods':'GET, POST, OPTIONS','Cache-Control':'no-store'});res.end(JSON.stringify(body))};
const fail=(res,status,error)=>json(res,status,{error});
const readBody=req=>new Promise((resolve,reject)=>{let raw='';req.on('data',chunk=>{raw+=chunk;if(raw.length>1e6)reject(new Error('BODY_TOO_LARGE'))});req.on('end',()=>{try{resolve(raw?JSON.parse(raw):{})}catch{reject(new Error('INVALID_JSON'))}});req.on('error',reject)});
const id=()=>crypto.randomUUID();
const tokenHash=token=>crypto.createHash('sha256').update(token).digest('hex');
const normalizeUsername=value=>String(value||'').trim().normalize('NFKC');
const usernameValid=value=>/^[\p{L}\p{N}_]{3,24}$/u.test(value);
const passwordHash=(password,salt)=>crypto.scryptSync(password,salt,64).toString('hex');
const safeData=input=>{
  const data=input&&typeof input==='object'?input:{};
  const int=(key,max=999999999)=>Math.min(max,Math.max(0,Math.floor(Number(data[key])||0)));
  const list=(key,max)=>Array.isArray(data[key])?data[key].slice(-max):[];
  return{totalSolved:int('totalSolved'),totalCorrect:int('totalCorrect'),todaySolved:int('todaySolved'),lastDate:String(data.lastDate||'').slice(0,64),streak:int('streak',99999),mastery:{math:intMastery(data,'math'),english:intMastery(data,'english'),science:intMastery(data,'science')},wrongBook:list('wrongBook',1000),quizCount:int('quizCount'),perfectQuizzes:int('perfectQuizzes'),unlockedAchievements:list('unlockedAchievements',100),equippedTitle:String(data.equippedTitle||'').slice(0,80),points:int('points'),lifetimePointsEarned:int('lifetimePointsEarned'),pointHistory:list('pointHistory',3000).filter(event=>event&&typeof event.id==='string'&&Number(event.amount)>0&&Number.isFinite(Date.parse(event.at))).map(event=>({id:event.id.slice(0,80),amount:Math.min(100,Math.floor(Number(event.amount))),at:new Date(event.at).toISOString()}))};
};
function intMastery(data,key){return Math.min(999999999,Math.max(0,Math.floor(Number(data.mastery?.[key])||0)))}
function issueToken(username){const raw=crypto.randomBytes(32).toString('base64url');store.tokens[tokenHash(raw)]={username,expiresAt:Date.now()+TOKEN_TTL};return raw}
function authenticate(req,url){
  let raw=(req.headers.authorization||'').replace(/^Bearer\s+/i,'');
  if(!raw&&url)raw=url.searchParams.get('token')||'';
  const record=store.tokens[tokenHash(raw)];
  if(!record||record.expiresAt<Date.now()){if(record)delete store.tokens[tokenHash(raw)];return null}
  return store.users[record.username]||null
}
function publicUser(user,withData=false){return{username:user.username,revision:user.revision||0,lifetimePointsEarned:user.data?.lifetimePointsEarned||0,...(withData?{data:user.data}:{})}}
function syncEvents(username,events){
  const bucket=store.pointEvents[username]||(store.pointEvents[username]={});
  for(const event of events||[])if(!bucket[event.id])bucket[event.id]={amount:event.amount,at:event.at};
}
function mergeConflict(serverData,clientData){
  const merged={...serverData};
  for(const key of ['totalSolved','totalCorrect','todaySolved','streak','quizCount','perfectQuizzes','lifetimePointsEarned'])merged[key]=Math.max(Number(serverData[key])||0,Number(clientData[key])||0);
  merged.mastery={math:Math.max(serverData.mastery?.math||0,clientData.mastery?.math||0),english:Math.max(serverData.mastery?.english||0,clientData.mastery?.english||0),science:Math.max(serverData.mastery?.science||0,clientData.mastery?.science||0)};
  merged.unlockedAchievements=[...new Set([...(serverData.unlockedAchievements||[]),...(clientData.unlockedAchievements||[])])].slice(-100);
  const events=new Map([...(serverData.pointHistory||[]),...(clientData.pointHistory||[])].map(event=>[event.id,event]));merged.pointHistory=[...events.values()].sort((a,b)=>Date.parse(a.at)-Date.parse(b.at)).slice(-3000);
  const wrong=new Map([...(serverData.wrongBook||[]),...(clientData.wrongBook||[])].map(item=>[JSON.stringify(item),item]));merged.wrongBook=[...wrong.values()].slice(-1000);
  merged.points=serverData.points;
  return merged
}
function send(username,event){for(const res of clients.get(username)||[]){res.write(`data: ${JSON.stringify(event)}\n\n`)}}
function friendsOf(username){return Object.keys(store.friendships[username]||{}).filter(name=>store.users[name])}
function cleanupMatch(match){if(!match)return;for(const player of match.players)send(player,{type:'match.closed',matchId:match.id});delete store.matches[match.id]}
async function route(req,res){
  if(req.method==='OPTIONS'){res.writeHead(204,{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Authorization, Content-Type','Access-Control-Allow-Methods':'GET, POST, OPTIONS'});return res.end()}
  const url=new URL(req.url,'http://localhost');
  if(req.method==='GET'&&url.pathname==='/api/health')return json(res,200,{ok:true});
  if(req.method==='POST'&&(/^\/api\/auth\/(register|login)$/.test(url.pathname))){
    const kind=url.pathname.endsWith('register')?'register':'login',body=await readBody(req),username=normalizeUsername(body.username),password=String(body.password||'');
    if(!usernameValid(username))return fail(res,400,'INVALID_USERNAME');
    if(kind==='register'){
      if(password.length<8)return fail(res,400,'WEAK_PASSWORD');
      if(store.users[username])return fail(res,409,'USERNAME_TAKEN');
      const salt=crypto.randomBytes(16).toString('hex'),data=safeData(body.data);
      store.users[username]={username,salt,passwordHash:passwordHash(password,salt),data,revision:1,updatedAt:new Date().toISOString()};
      syncEvents(username,data.pointHistory);const token=issueToken(username);persist();return json(res,201,{token,user:publicUser(store.users[username],true)})
    }
    const user=store.users[username];
    if(!user||user.passwordHash!==passwordHash(password,user.salt))return fail(res,401,'INVALID_CREDENTIALS');
    const token=issueToken(username);persist();return json(res,200,{token,user:publicUser(user,true)})
  }
  const user=authenticate(req,url);if(!user)return fail(res,401,'AUTH_REQUIRED');
  if(req.method==='GET'&&url.pathname==='/api/events'){
    res.writeHead(200,{'Content-Type':'text/event-stream','Access-Control-Allow-Origin':'*','Cache-Control':'no-store','Connection':'keep-alive'});res.write(`data: ${JSON.stringify({type:'ready'})}\n\n`);
    const set=clients.get(user.username)||new Set();set.add(res);clients.set(user.username,set);const heartbeat=setInterval(()=>res.write(': heartbeat\n\n'),20000);req.on('close',()=>{clearInterval(heartbeat);set.delete(res)});return
  }
  if(req.method==='POST'&&url.pathname==='/api/sync'){
    const body=await readBody(req),data=safeData(body.data);syncEvents(user.username,data.pointHistory);
    if(Number(body.baseRevision)!==Number(user.revision||0)){user.data=mergeConflict(user.data,data);user.revision=(user.revision||0)+1;user.updatedAt=new Date().toISOString();persist();return json(res,200,{conflict:true,user:publicUser(user,true)})}
    user.data=data;user.revision=(user.revision||0)+1;user.updatedAt=new Date().toISOString();persist();return json(res,200,{conflict:false,user:publicUser(user,true)})
  }
  if(url.pathname==='/api/friends'&&req.method==='GET')return json(res,200,{friends:friendsOf(user.username).map(name=>publicUser(store.users[name]))});
  if(url.pathname==='/api/friends'&&req.method==='POST'){
    const body=await readBody(req),target=normalizeUsername(body.username);
    if(target===user.username)return fail(res,400,'CANNOT_FRIEND_SELF');if(!store.users[target])return fail(res,404,'FRIEND_NOT_FOUND');
    (store.friendships[user.username]||(store.friendships[user.username]={}))[target]=Date.now();(store.friendships[target]||(store.friendships[target]={}))[user.username]=Date.now();persist();return json(res,201,{friend:publicUser(store.users[target])})
  }
  if(req.method==='GET'&&url.pathname==='/api/leaderboard'){
    const period=['day','week','month'].includes(url.searchParams.get('period'))?url.searchParams.get('period'):'day',now=new Date(),start=new Date(now);
    if(period==='day')start.setHours(0,0,0,0);else if(period==='week'){start.setHours(0,0,0,0);start.setDate(start.getDate()-((start.getDay()+6)%7))}else{start.setDate(1);start.setHours(0,0,0,0)}
    const names=[user.username,...friendsOf(user.username)],entries=names.map(username=>({username,points:Object.values(store.pointEvents[username]||{}).filter(event=>Date.parse(event.at)>=start.getTime()).reduce((sum,event)=>sum+event.amount,0)})).sort((a,b)=>b.points-a.points||a.username.localeCompare(b.username));
    return json(res,200,{period,start:start.toISOString(),entries})
  }
  if(req.method==='POST'&&url.pathname==='/api/matches/queue'){
    const body=await readBody(req),game=String(body.game||'');if(!['gomoku','chess','battleship','stick'].includes(game))return fail(res,400,'UNSUPPORTED_GAME');
    for(const match of Object.values(store.matches))if(match.players.includes(user.username))return json(res,200,{status:'matched',match});
    const waiting=store.queues[game];
    if(waiting&&waiting!==user.username&&store.users[waiting]){
      const match={id:id(),game,players:[waiting,user.username],createdAt:Date.now(),events:[],status:'active'};store.matches[match.id]=match;delete store.queues[game];persist();for(const player of match.players)send(player,{type:'match.found',match});return json(res,200,{status:'matched',match})
    }
    store.queues[game]=user.username;persist();return json(res,202,{status:'waiting',game})
  }
  if(req.method==='POST'&&url.pathname==='/api/matches/queue/leave'){for(const [game,name] of Object.entries(store.queues))if(name===user.username)delete store.queues[game];persist();return json(res,200,{ok:true})}
  const matchGet=url.pathname.match(/^\/api\/matches\/([^/]+)$/);
  if(req.method==='GET'&&matchGet){const match=store.matches[matchGet[1]];if(!match||!match.players.includes(user.username))return fail(res,404,'MATCH_NOT_FOUND');return json(res,200,{match})}
  const matchEvent=url.pathname.match(/^\/api\/matches\/([^/]+)\/events$/);
  if(req.method==='POST'&&matchEvent){
    const match=store.matches[matchEvent[1]];if(!match||!match.players.includes(user.username))return fail(res,404,'MATCH_NOT_FOUND');
    const body=await readBody(req),event={id:id(),seq:match.events.length+1,from:user.username,type:String(body.type||'event').slice(0,50),payload:body.payload,at:Date.now()};match.events.push(event);if(match.events.length>500)match.events.shift();persist();for(const player of match.players)if(player!==user.username)send(player,{type:'match.event',matchId:match.id,event});return json(res,201,{event})
  }
  const leave=url.pathname.match(/^\/api\/matches\/([^/]+)\/leave$/);
  if(req.method==='POST'&&leave){const match=store.matches[leave[1]];if(match?.players.includes(user.username))cleanupMatch(match);for(const [game,name] of Object.entries(store.queues))if(name===user.username)delete store.queues[game];persist();return json(res,200,{ok:true})}
  return fail(res,404,'NOT_FOUND')
}
const server=http.createServer((req,res)=>route(req,res).catch(error=>{console.error(error);if(!res.headersSent)fail(res,500,'SERVER_ERROR');else res.end()}));
server.listen(PORT,HOST,()=>console.log(`Wuming account server listening on http://${HOST}:${PORT}`));
