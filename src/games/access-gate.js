(()=>{
  const deny=()=>{
    const payload={channel:'wuming-arcade-return',version:1,expired:true};
    document.documentElement.classList.add('access-denied');
    if(location.protocol==='file:'){window.name=JSON.stringify(payload);location.replace(`index.html?gameAccess=required#arcadeReturn=${encodeURIComponent(JSON.stringify(payload))}`)}
    else{window.name='';location.replace('index.html?gameAccess=required')}
  };
  try{
    const key='gongxing_arcade_session_v1',settingsKey='wuming_admin_settings_v1',now=Date.now(),allowedMinutes=[5,10,15,20,30,45,60];
    let settings=JSON.parse(localStorage.getItem(settingsKey)||'{}');
    let session=null;
    if(location.protocol==='file:'){
      const encoded=new URLSearchParams(location.hash.slice(1)).get('handoff');
      if(encoded){
        const handoff=JSON.parse(encoded),minutes=Number(handoff?.settings?.gameMinutesCap);
        if(handoff?.version===1&&handoff.session&&allowedMinutes.includes(minutes)){
          settings={...settings,freeGames:handoff.settings.freeGames===true,gameMinutesCap:minutes};
          localStorage.setItem(settingsKey,JSON.stringify(settings));
          if(handoff.remoteAuth?.token&&handoff.remoteAuth?.username)localStorage.setItem('wuming_remote_auth_v1',JSON.stringify(handoff.remoteAuth));
          session=handoff.session
        }
        try{history.replaceState({},'',location.pathname+location.search)}catch{}
      }
    }
    const freeGames=settings.freeGames===true,gameMinutesCap=allowedMinutes.includes(Number(settings.gameMinutesCap))?Number(settings.gameMinutesCap):15;
    let s=session||JSON.parse(localStorage.getItem(key)||'null');
    if(!s&&freeGames)s={version:2,issuedAt:now,remainingMs:gameMinutesCap*60000,activeSince:null,expiresAt:null,minutes:gameMinutesCap,cost:0,free:true,nonce:crypto.randomUUID?.()||String(now)+Math.random()};
    const validCost=s?.free===true?freeGames&&s.cost===0:s?.cost===s?.minutes*5,baseValid=s&&Number.isInteger(s.minutes)&&s.minutes>=1&&s.minutes<=60&&validCost,total=baseValid?s.minutes*60000:0,remaining=s?.version===1&&Number.isFinite(s.expiresAt)?s.expiresAt-now:s?.version===2&&Number.isFinite(s.remainingMs)?s.remainingMs-(Number.isFinite(s.activeSince)?Math.max(0,now-s.activeSince):0):0,valid=baseValid&&remaining>0&&remaining<=total+1500;
    if(valid){const active={...s,version:2,remainingMs:Math.min(total,remaining),activeSince:now,expiresAt:now+Math.min(total,remaining)};localStorage.setItem(key,JSON.stringify(active));window.__gongxingGameSession=active}
    else{localStorage.removeItem(key);deny()}
  }catch{deny()}
})();
