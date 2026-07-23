'use strict';
const assert=require('node:assert/strict');
const base=process.env.SERVER_URL||'http://127.0.0.1:8787';
const suffix=Date.now().toString(36);
async function call(path,{token,method='GET',body}={}){
  const response=await fetch(base+path,{method,headers:{...(token?{Authorization:`Bearer ${token}`}:{ }),'Content-Type':'application/json'},...(body?{body:JSON.stringify(body)}:{})});
  const result=await response.json();if(!response.ok)throw new Error(`${path}: ${response.status} ${JSON.stringify(result)}`);return result
}
(async()=>{
  assert.equal((await call('/api/health')).ok,true);
  const data={points:6,lifetimePointsEarned:6,totalSolved:5,totalCorrect:5,mastery:{math:5},pointHistory:[{id:`earned-${suffix}`,amount:6,at:new Date().toISOString()}]};
  const a=await call('/api/auth/register',{method:'POST',body:{username:`alice_${suffix}`,password:'test-password-a',data}});
  const b=await call('/api/auth/register',{method:'POST',body:{username:`bob_${suffix}`,password:'test-password-b',data:{...data,points:3,lifetimePointsEarned:3,pointHistory:[{id:`earned-b-${suffix}`,amount:3,at:new Date().toISOString()}]}}});
  const login=await call('/api/auth/login',{method:'POST',body:{username:`alice_${suffix}`,password:'test-password-a'}});assert.equal(login.user.data.points,6);
  await call('/api/friends',{token:a.token,method:'POST',body:{username:`bob_${suffix}`}});
  assert.equal((await call('/api/friends',{token:a.token})).friends.length,1);
  const board=await call('/api/leaderboard?period=day',{token:a.token});assert.deepEqual(board.entries.map(x=>x.points),[6,3]);
  const synced=await call('/api/sync',{token:a.token,method:'POST',body:{baseRevision:1,data:{...data,points:5}}});assert.equal(synced.user.revision,2);
  const conflict=await call('/api/sync',{token:a.token,method:'POST',body:{baseRevision:1,data:{...data,points:99}}});assert.equal(conflict.conflict,true);assert.equal(conflict.user.data.points,5);
  assert.equal((await call('/api/matches/queue',{token:a.token,method:'POST',body:{game:'gomoku'}})).status,'waiting');
  const matched=await call('/api/matches/queue',{token:b.token,method:'POST',body:{game:'gomoku'}});assert.equal(matched.status,'matched');
  const event=await call(`/api/matches/${matched.match.id}/events`,{token:a.token,method:'POST',body:{type:'move',payload:{index:112}}});assert.equal(event.event.seq,1);
  assert.equal((await call(`/api/matches/${matched.match.id}`,{token:b.token})).match.events.length,1);
  await call(`/api/matches/${matched.match.id}/leave`,{token:a.token,method:'POST',body:{}});
  assert.equal((await call('/api/matches/queue',{token:a.token,method:'POST',body:{game:'chess'}})).status,'waiting');
  assert.equal((await call('/api/matches/queue/leave',{token:a.token,method:'POST',body:{}})).ok,true);
  console.log('Account, sync, friends, leaderboard, and match API smoke test passed.');
})().catch(error=>{console.error(error);process.exitCode=1});
