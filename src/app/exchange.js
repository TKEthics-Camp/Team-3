const GAME_SESSION_KEY='gongxing_arcade_session_v1',GAME_POINT_COST=5;let redemptionInProgress=false;
function importArcadeReturn(){
  if(location.protocol!=='file:')return false;
  let payload=null;
  try{
    const encoded=new URLSearchParams(location.hash.slice(1)).get('arcadeReturn');
    if(encoded)payload=JSON.parse(encoded);
    else if(window.name){
      const named=JSON.parse(window.name);
      if(named?.channel==='wuming-arcade-return')payload=named
    }
  }catch{}
  if(payload?.channel!=='wuming-arcade-return'||payload.version!==1)return false;
  if(payload.expired===true){
    localStorage.removeItem(GAME_SESSION_KEY);
    window.name='';
    if(location.hash)try{history.replaceState({},'',location.pathname+location.search)}catch{}
    return true
  }
  if(!payload.session)return false;
  const session=payload.session,total=Number(session.minutes)*60000,validCost=session.free===true?session.cost===0:session.cost===session.minutes*GAME_POINT_COST;
  if(session.version!==2||!Number.isInteger(session.minutes)||session.minutes<1||session.minutes>MAX_GAME_MINUTES||!Number.isFinite(session.remainingMs)||session.remainingMs<=0||session.remainingMs>total+1500||!validCost)return false;
  localStorage.setItem(GAME_SESSION_KEY,JSON.stringify({...session,activeSince:null,expiresAt:null}));
  window.name='';
  if(location.hash)try{history.replaceState({},'',location.pathname+location.search)}catch{}
  return true
}
function freeGameMode(){return adminSettings.freeGames===true}
function gameMinuteCap(){return Math.max(1,Math.min(MAX_GAME_MINUTES,Number(adminSettings.gameMinutesCap)||DEFAULT_GAME_MINUTES))}
function readGameSession(){try{const s=JSON.parse(localStorage.getItem(GAME_SESSION_KEY)||'null'),now=Date.now(),validCost=s?.free===true?freeGameMode()&&s.cost===0:s?.cost===s?.minutes*GAME_POINT_COST;if(!s||!Number.isInteger(s.minutes)||s.minutes<1||s.minutes>MAX_GAME_MINUTES||!validCost){localStorage.removeItem(GAME_SESSION_KEY);return null}const total=s.minutes*60000,remaining=s.version===1&&Number.isFinite(s.expiresAt)?s.expiresAt-now:s.version===2&&Number.isFinite(s.remainingMs)?s.remainingMs-(Number.isFinite(s.activeSince)?Math.max(0,now-s.activeSince):0):0;if(remaining<=0||remaining>total+1500){localStorage.removeItem(GAME_SESSION_KEY);return null}const paused={...s,version:2,remainingMs:Math.min(total,remaining),activeSince:null,expiresAt:null};localStorage.setItem(GAME_SESSION_KEY,JSON.stringify(paused));return paused}catch{localStorage.removeItem(GAME_SESSION_KEY);return null}}
function gameTimeCapacity(session){return Math.max(0,Math.floor((MAX_GAME_MINUTES*60000-(session?.remainingMs||0))/60000))}
function paidGameSession(session,addedMinutes,now=Date.now()){const remainingMs=(session?.remainingMs||0)+addedMinutes*60000,minutes=Math.ceil(remainingMs/60000);return{version:2,issuedAt:session?.issuedAt||now,remainingMs,activeSince:null,expiresAt:null,minutes,cost:minutes*GAME_POINT_COST,free:false,nonce:crypto.randomUUID?.()||String(now)+Math.random()}}
function formatGameTime(ms){const seconds=Math.max(0,Math.ceil(ms/1000)),m=Math.floor(seconds/60),s=seconds%60;return `${m}:${String(s).padStart(2,'0')}`}
function arcadeHref(session){
  if(location.protocol!=='file:'||!session)return'games.html';
  const handoff={
    version:1,
    session,
    remoteAuth:typeof WumingRemote!=='undefined'?WumingRemote.loadAuth():null,
    settings:{
      freeGames:freeGameMode(),
      gameMinutesCap:gameMinuteCap()
    }
  };
  return`games.html#handoff=${encodeURIComponent(JSON.stringify(handoff))}`
}
function enterArcade(session=readGameSession()){
  if(!session){redemptionInProgress=false;renderExchange();return}
  location.href=arcadeHref(session)
}
function refreshPointBalance(){try{const latest=JSON.parse(localStorage.getItem('gongxing_academy_data')||'{}');if(Number.isFinite(Number(latest.points)))user.points=Math.min(adminSettings.pointCap,Math.max(0,Math.floor(Number(latest.points))))}catch{}if(typeof gamePointBalance!=='undefined')gamePointBalance.textContent=user.points}
function openExchange(){refreshPointBalance();renderExchange();exchangeModal.hidden=false;document.body.style.overflow='hidden'}
function closeExchange(){exchangeModal.hidden=true;document.body.style.overflow=''}
function renderExchange(){
  refreshPointBalance();const zhMode=lang==='zh',session=readGameSession(),free=freeGameMode(),cap=gameMinuteCap();
  exchangeTitle.textContent=free?(zhMode?'免积分进入游戏':'Free Game Access'):session?(zhMode?'继续或增加游戏时间':'Continue or Add Game Time'):(zhMode?'兑换游戏时间':'Redeem Game Time');exchangeCopy.textContent=free?(zhMode?`管理员已开启游戏免积分模式，无需消耗学习积分。每次进入可游玩 ${cap} 分钟。`:`The administrator enabled free game access. Each entry grants ${cap} minutes without points.`):session?(zhMode?`当前剩余 ${formatGameTime(session.remainingMs)}。你可以直接继续，也可以用积分增加时间；单次最多兑换 ${cap} 分钟。`:`You have ${formatGameTime(session.remainingMs)} left. Continue now or add time with points, up to ${cap} minutes per redemption.`):(zhMode?`每 5 积分可兑换 1 分钟，本次最多兑换 ${cap} 分钟。`:`Redeem 1 minute for every 5 points, up to ${cap} minutes per session.`);exchangeBalanceLabel.textContent=zhMode?'当前积分':'Point balance';exchangePointUnit.textContent=zhMode?'积分':'points';exchangeMinutesLabel.textContent=zhMode?'兑换时长':'Play time';exchangeCostUnit.textContent=zhMode?'积分':'points';exchangeAction.textContent=free?(zhMode?'免费进入游戏':'Enter Arcade Free'):session?(zhMode?'兑换并增加时间':'Redeem & Add Time'):(zhMode?'兑换并进入游戏':'Redeem & Enter Arcade');exchangeNote.textContent=free?(zhMode?'免积分选项会持续生效，只有管理员手动关闭后才恢复积分兑换。':'Free play stays active until an administrator manually disables it.'):(zhMode?'新增时间会累加到当前剩余时间；累计未使用时间最多为 60 分钟。':'New time is added to the current remainder; unused time is capped at 60 minutes.');exchangePoints.textContent=user.points;
  exchangeActive.hidden=!session;if(session)exchangeActive.innerHTML=`${zhMode?'当前剩余游戏时间：':'Current play time: '}<strong>${formatGameTime(session.remainingMs)}</strong><br><button class="exchange-action" style="margin-top:12px" onclick="enterArcade()">${zhMode?'继续游戏':'Continue Playing'}</button>`;
  exchangePurchase.hidden=free&&!!session;exchangePicker.hidden=free;if(free){exchangeAction.disabled=false;return}const max=Math.min(cap,Math.floor(user.points/GAME_POINT_COST),gameTimeCapacity(session));exchangeMinutes.innerHTML=max?Array.from({length:max},(_,i)=>`<option value="${i+1}">${i+1} ${zhMode?'分钟':i===0?'minute':'minutes'}</option>`).join(''):`<option value="0">${zhMode?'积分不足或时间已达上限':'Not enough points or time is full'}</option>`;exchangeAction.disabled=max===0;updateExchangeCost()
}
function updateExchangeCost(){exchangeCost.textContent=(Number(exchangeMinutes.value)||0)*GAME_POINT_COST}
async function redeemGameTime(){
  if(redemptionInProgress)return;redemptionInProgress=true;exchangeAction.disabled=true;
  const perform=()=>{const existing=readGameSession(),now=Date.now(),cap=gameMinuteCap();if(freeGameMode()){if(existing){enterArcade(existing);return}const minutes=cap,session={version:2,issuedAt:now,remainingMs:minutes*60000,activeSince:null,expiresAt:null,minutes,cost:0,free:true,nonce:crypto.randomUUID?.()||String(now)+Math.random()};localStorage.setItem(GAME_SESSION_KEY,JSON.stringify(session));enterArcade(session);return}const minutes=Number(exchangeMinutes.value);if(!Number.isInteger(minutes)||minutes<1||minutes>cap||minutes>gameTimeCapacity(existing)){redemptionInProgress=false;renderExchange();return}const cost=minutes*GAME_POINT_COST;let latest;try{latest=JSON.parse(localStorage.getItem('gongxing_academy_data')||'{}')}catch{redemptionInProgress=false;renderExchange();return}const balance=Math.max(0,Math.floor(Number(latest.points)||0));if(balance<cost){user.points=balance;redemptionInProgress=false;renderExchange();return}latest.points=balance-cost;localStorage.setItem('gongxing_academy_data',JSON.stringify(latest));user.points=latest.points;const session=paidGameSession(existing,minutes,now);localStorage.setItem(GAME_SESSION_KEY,JSON.stringify(session));enterArcade(session)};
  if(navigator.locks)await navigator.locks.request('gongxing-points',perform);else perform()
}
