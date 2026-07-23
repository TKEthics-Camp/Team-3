import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source=fs.readFileSync(new URL('../src/app/account.js',import.meta.url),'utf8');
const styles=fs.readFileSync(new URL('../styles/index.css',import.meta.url),'utf8');
const pending=new Map();
const classList=()=>{const values=new Set();return{toggle:(name,on)=>on?values.add(name):values.delete(name),add:name=>values.add(name),remove:name=>values.delete(name),contains:name=>values.has(name)}};
const buttons=['day','week','month'].map(period=>({dataset:{leaderboardPeriod:period},classList:classList(),setAttribute(){}}));
const leaderboardTabs={querySelectorAll:()=>buttons};
const leaderboardList={
  _html:'',
  attributes:new Map(),
  classList:classList(),
  get innerHTML(){return this._html},
  set innerHTML(value){this._html=value},
  get firstElementChild(){return this._html?{}:null},
  setAttribute(name,value){this.attributes.set(name,value)},
  removeAttribute(name){this.attributes.delete(name)}
};
const context={
  console,
  structuredClone,
  setTimeout,
  clearTimeout,
  crypto,
  user:{totalSolved:0,totalCorrect:0,todaySolved:0,lastDate:'',streak:0,mastery:{math:0,english:0,science:0},wrongBook:[],quizCount:0,perfectQuizzes:0,unlockedAchievements:[],equippedTitle:'',points:0,lifetimePointsEarned:0,pointHistory:[]},
  clone:structuredClone,
  localStorage:{getItem:()=>null,setItem(){},removeItem(){}},
  WumingRemote:{
    loadAuth:()=>({username:'tester'}),
    configured:()=>true,
    leaderboard:period=>new Promise(resolve=>pending.set(period,resolve))
  },
  leaderboardTabs,
  leaderboardList,
  leaderboardModal:{hidden:false},
  document:{body:{style:{}}},
  esc:value=>String(value)
};
vm.createContext(context);
vm.runInContext(source,context);
const frames=[];
const capture=label=>frames.push({label,html:leaderboardList.innerHTML,active:buttons.find(button=>button.classList.contains('active'))?.dataset.leaderboardPeriod||null,busy:leaderboardList.attributes.has('aria-busy')});

vm.runInContext('renderLeaderboardTabs()',context);
const dayRequest=vm.runInContext('loadLeaderboard()',context);
pending.get('day')({entries:[{username:'DayUser',points:9}]});
await dayRequest;
capture('day-rendered');
vm.runInContext("setLeaderboardPeriod('week')",context);
capture('week-selected-day-list-preserved');
vm.runInContext("setLeaderboardPeriod('month')",context);
capture('month-selected-day-list-preserved');
pending.get('week')({entries:[{username:'WeekUser',points:14}]});
await new Promise(resolve=>setImmediate(resolve));
capture('stale-week-response-ignored');
assert.doesNotMatch(leaderboardList.innerHTML,/WeekUser/);
pending.get('month')({entries:[{username:'MonthUser',points:27}]});
await new Promise(resolve=>setImmediate(resolve));
capture('month-rendered');

assert.match(leaderboardList.innerHTML,/MonthUser/);
assert.equal(buttons.find(button=>button.classList.contains('active'))?.dataset.leaderboardPeriod,'month');
assert.equal(leaderboardList.attributes.has('aria-busy'),false);
assert.doesNotMatch(source,/leaderboardContent\.innerHTML\s*=/);
assert.match(styles,/\.leaderboard-list\{[^}]*min-height:/);
console.log(JSON.stringify(frames,null,2));
console.log('Leaderboard switch regression test passed.');
