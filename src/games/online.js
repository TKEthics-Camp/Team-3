let onlineSession=null;
function onlineReady(){return WumingRemote.configured()&&!!WumingRemote.loadAuth()}
function onlineOption(label='在线匹配'){return `<option value="online" ${onlineReady()?'':'disabled'}>${label}${onlineReady()?'':'（需配置服务器并登录）'}</option>`}
function onlineIdentity(){return WumingRemote.loadAuth()?.username||''}
function onlinePlayerNumber(){return onlineSession?.player||0}
function onlineEventPlayer(event){
  const index=onlineSession?.match?.players.indexOf(event?.from);
  return Number.isInteger(index)&&index>=0?index+1:0
}
function onlineMatchId(){return onlineSession?.match?.id||''}
function onlineStatusCopy(){return onlineReady()?L('在线匹配','Online matchmaking'):L('在线对战需要先在学苑登录云端账号','Sign in to an academy cloud account first')}
async function beginOnlineMatch(gameId,{found,event,closed}){
  await endOnlineMatch(false);
  if(!onlineReady())throw new Error('ONLINE_NOT_READY');
  onlineSession={gameId,match:null,player:0,source:null,poll:0,found,event,closed};
  const accept=match=>{
    if(!onlineSession||onlineSession.gameId!==gameId||onlineSession.match)return;
    onlineSession.match=match;onlineSession.player=match.players.indexOf(onlineIdentity())+1;
    clearInterval(onlineSession.poll);found?.(match,onlineSession.player)
  };
  onlineSession.source=WumingRemote.events(message=>{
    if(!onlineSession)return;
    if(message.type==='match.found'&&message.match.game===gameId)accept(message.match);
    else if(message.type==='match.event'&&message.matchId===onlineSession.match?.id)event?.(message.event);
    else if(message.type==='match.closed'&&message.matchId===onlineSession.match?.id)closed?.()
  });
  const queue=async initial=>{try{const result=await WumingRemote.queue(gameId);if(result.status==='matched')accept(result.match)}catch(error){clearInterval(onlineSession?.poll);if(initial)throw error;closed?.(error)}};
  await queue(true);if(!onlineSession?.match)onlineSession.poll=setInterval(()=>queue(false),1800)
}
function sendOnlineEvent(type,payload){if(!onlineSession?.match)return Promise.reject(new Error('MATCH_NOT_READY'));return WumingRemote.sendMatchEvent(onlineSession.match.id,type,payload)}
async function endOnlineMatch(notify=true){
  const previous=onlineSession;onlineSession=null;
  if(!previous)return;
  clearInterval(previous.poll);previous.source?.close();
  if(notify)try{if(previous.match)await WumingRemote.leaveMatch(previous.match.id);else await WumingRemote.cancelQueue()}catch{}
}
