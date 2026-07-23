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
async function init(){importArcadeReturn();loadAdminSettings();applyAdminMode();let bankFailed=false;try{const loaded=await Promise.all(QUESTION_BANK_SOURCES.map(loadQuestionBank));loaded.forEach(([source,bank])=>(source.mode==='hard'?hardBanks:banks)[source.subject]=bank)}catch(e){console.error(e);bankFailed=true;const detail=e instanceof Error?e.message:String(e);error(`题库加载或格式验证失败：${detail}。请确认仓库文件完整，并重新打开本页。`);document.querySelector('#start').disabled=true}loadUser();setLang(localStorage.getItem('gongxing_lang')==='en'?'en':'zh');renderAccountButton();const params=new URLSearchParams(location.search);if(!bankFailed&&params.has('gameExpired'))error('游戏时间已结束。继续答题赚取积分，即可再次兑换游戏时间。');else if(!bankFailed&&params.has('gameAccess'))error('请先使用积分兑换游戏时间。');if(params.has('gameExpired')||params.has('gameAccess'))history.replaceState({},'',location.pathname)}
