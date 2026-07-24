function error(message=''){const e=document.querySelector('#error');e.textContent=message;e.style.display=message?'block':'none'}
const QUESTION_BANK_SCHEMA_VERSION=1;
const QUESTION_BANK_SOURCES=['math','english','science'].flatMap(subjectId=>[
  {subject:subjectId,mode:'normal',url:`./data/${subjectId}.json?schema=${QUESTION_BANK_SCHEMA_VERSION}`},
  {subject:subjectId,mode:'hard',url:`./data/hard-${subjectId}.json?schema=${QUESTION_BANK_SCHEMA_VERSION}`}
]);
function validateQuestionBank(bank,source){
  if(!bank||bank.schemaVersion!==QUESTION_BANK_SCHEMA_VERSION||bank.subject!==source.subject||bank.mode!==source.mode||!Array.isArray(bank.levels)||!bank.levels.length)throw Error(`${source.url}: invalid question-bank envelope`);
  const ids=new Set();
  for(const level of bank.levels){
    if(typeof level?.id!=='string'||!level.id||!Array.isArray(level.questions)||!level.questions.length)throw Error(`${source.url}: invalid level`);
    for(const question of level.questions){
      if(typeof question?.id!=='string'||!question.id||ids.has(question.id))throw Error(`${source.url}: duplicate or missing question id`);
      ids.add(question.id);
      if(question.type!=='number'&&(!Array.isArray(question.options)||!Number.isInteger(question.answer)||question.answer<0||question.answer>=question.options.length))throw Error(`${source.url}: invalid answer for ${question.id}`);
    }
  }
  return bank
}
function loadStandaloneQuestionBank(source){
  const key=`${source.subject}:${source.mode}`;
  const bank=globalThis.__NAMELESS_QUESTION_BANKS__?.[key];
  if(!bank)throw Error(`standalone bundle is missing ${key}`);
  return[source,validateQuestionBank(bank,source)]
}
async function loadQuestionBank(source){
  if(location.protocol==='file:')return loadStandaloneQuestionBank(source);
  const response=await fetch(source.url,{cache:'no-store'});
  if(!response.ok)throw Error(`${source.url}: ${response.status}`);
  return[source,validateQuestionBank(await response.json(),source)]
}
async function refreshQuestionBanks(){
  const loaded=await Promise.all(QUESTION_BANK_SOURCES.map(loadQuestionBank));
  loaded.forEach(([source,bank])=>(source.mode==='hard'?hardBanks:banks)[source.subject]=bank);
  document.querySelector('#start').disabled=false;
  if(typeof renderAdminLevels==='function'&&typeof adminActive!=='undefined'&&adminActive)renderAdminLevels();
  return loaded.length
}
function applyArcadeGameCount(count){
  if(!Number.isInteger(count)||count<1)return arcadeGameCount;
  arcadeGameCount=count;
  if(typeof syncFreeGameCopy==='function')syncFreeGameCopy();
  return arcadeGameCount
}
async function refreshArcadeContent(refreshAssets=false){
  if(location.protocol==='file:')return applyArcadeGameCount(DEFAULT_ARCADE_GAME_COUNT);
  const pageUrl=new URL('./games.html',location.href);
  pageUrl.searchParams.set('contentRefresh',String(Date.now()));
  const response=await fetch(pageUrl,{cache:'reload'});
  if(!response.ok)throw Error(`games.html: ${response.status}`);
  const documentCopy=new DOMParser().parseFromString(await response.text(),'text/html');
  const count=documentCopy.querySelectorAll('.game-card[data-game]').length;
  applyArcadeGameCount(count);
  if(refreshAssets){
    const assetUrls=[...documentCopy.querySelectorAll('script[src],link[rel="stylesheet"][href]')].map(element=>element.getAttribute('src')||element.getAttribute('href')).filter(Boolean);
    await Promise.all(assetUrls.map(async asset=>{
      const assetResponse=await fetch(new URL(asset,pageUrl),{cache:'reload'});
      if(!assetResponse.ok)throw Error(`${asset}: ${assetResponse.status}`)
    }))
  }
  return count
}
async function refreshLearningContent({refreshGameAssets=false}={}){
  const [bankCount,gameCount]=await Promise.all([refreshQuestionBanks(),refreshArcadeContent(refreshGameAssets)]);
  return{bankCount,gameCount}
}
async function init(){importArcadeReturn();loadAdminSettings();applyAdminMode();let bankFailed=false;try{await refreshQuestionBanks()}catch(e){console.error(e);bankFailed=true;const detail=e instanceof Error?e.message:String(e);error(`题库加载或格式验证失败：${detail}。请确认仓库文件完整，并重新打开本页。`);document.querySelector('#start').disabled=true}try{await refreshArcadeContent()}catch(e){console.warn('游戏目录刷新失败，继续使用内置数量。',e);applyArcadeGameCount(DEFAULT_ARCADE_GAME_COUNT)}loadUser();setLang(localStorage.getItem('gongxing_lang')==='en'?'en':'zh');renderAccountButton();const params=new URLSearchParams(location.search);if(!bankFailed&&params.has('gameExpired'))error('游戏时间已结束。继续答题赚取积分，即可再次兑换游戏时间。');else if(!bankFailed&&params.has('gameAccess'))error('请先使用积分兑换游戏时间。');if(params.has('gameExpired')||params.has('gameAccess'))history.replaceState({},'',location.pathname)}
