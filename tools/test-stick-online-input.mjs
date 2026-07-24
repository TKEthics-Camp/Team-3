import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const onlineSource=fs.readFileSync(new URL('../src/games/online.js',import.meta.url),'utf8');
const stickSource=fs.readFileSync(new URL('../src/games/stick.js',import.meta.url),'utf8');
const match={id:'match-1',game:'stick',players:['bob','alice']};
const context={
  console,
  setInterval,
  clearInterval,
  L:(zh)=>zh,
  WumingRemote:{
    configured:()=>true,
    loadAuth:()=>({username:'alice'}),
    events:()=>({close(){}}),
    queue:async()=>({status:'matched',match}),
    cancelQueue:async()=>({ok:true}),
    leaveMatch:async()=>({ok:true}),
    sendMatchEvent:async()=>({ok:true})
  }
};

vm.createContext(context);
vm.runInContext(onlineSource,context);
await vm.runInContext("beginOnlineMatch('stick',{})",context);

assert.equal(vm.runInContext('onlinePlayerNumber()',context),2);
assert.equal(vm.runInContext("onlineEventPlayer({from:'bob'})",context),1);
assert.equal(vm.runInContext("onlineEventPlayer({from:'alice'})",context),2);
assert.equal(vm.runInContext("onlineEventPlayer({from:'unknown'})",context),0);
assert.match(stickSource,/remotePlayer===g\.onlinePlayer/);
assert.match(stickSource,/actions\.includes\(action\)/);
assert.match(stickSource,/\[1,2\]\.includes\(matchedPlayer\)\?matchedPlayer/);
assert.match(stickSource,/g\.aiMode\|\|g\.onlineMode\?\[1\]:\[1,2\]/);
assert.match(stickSource,/联网双方都使用 P1 键位/);

await vm.runInContext('endOnlineMatch(false)',context);
console.log('Stick Fighter online input ownership regression test passed.');
