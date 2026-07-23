const ACCOUNT_SYNC_FIELDS=['totalSolved','totalCorrect','todaySolved','lastDate','streak','mastery','wrongBook','quizCount','perfectQuizzes','unlockedAchievements','equippedTitle','points','lifetimePointsEarned','pointHistory'];
let accountTab='account',leaderboardPeriod='day',accountBusy=false;
function accountSnapshot(){return Object.fromEntries(ACCOUNT_SYNC_FIELDS.map(key=>[key,clone(user[key])]))}
function applyRemoteSnapshot(data){
  if(!data||typeof data!=='object')return;
  const preservedHistory=Array.isArray(data.pointHistory)?data.pointHistory:[];
  user={...user,...Object.fromEntries(ACCOUNT_SYNC_FIELDS.filter(key=>key in data).map(key=>[key,clone(data[key])])),mastery:{...user.mastery,...(data.mastery||{})},wrongBook:Array.isArray(data.wrongBook)?data.wrongBook:user.wrongBook,unlockedAchievements:Array.isArray(data.unlockedAchievements)?data.unlockedAchievements:user.unlockedAchievements,pointHistory:preservedHistory};
  user.points=Math.min(adminSettings.pointCap,Math.max(0,Math.floor(Number(user.points)||0)));
  user.lifetimePointsEarned=Math.max(0,Math.floor(Number(user.lifetimePointsEarned)||0));
  saveUser();updateDash()
}
function accountMessage(text,ok=false){accountStatus.textContent=text;accountStatus.className=`account-status ${ok?'ok':''}`}
function openAccount(tab='account'){accountTab=tab;accountModal.hidden=false;document.body.style.overflow='hidden';renderAccount()}
function closeAccount(){accountModal.hidden=true;document.body.style.overflow=''}
function accountLogout(){WumingRemote.logout();accountMessage('');renderAccount();renderAccountButton()}
function renderAccountButton(){
  const auth=WumingRemote.loadAuth(),configured=WumingRemote.configured();
  accountButton.textContent=auth?`☁ ${auth.username}`:configured?'☁ 登录':'☁ 未配置';
  syncButton.hidden=!auth;syncButton.disabled=!configured
}
function renderAccount(){
  const auth=WumingRemote.loadAuth(),configured=WumingRemote.configured();
  accountConfigNotice.hidden=configured;
  accountConfigNotice.textContent=lang==='zh'?'远程服务器地址尚未配置。请在 src/config/remote.js 填写 REMOTE_SERVER_URL。':'Remote server is not configured. Set REMOTE_SERVER_URL in src/config/remote.js.';
  accountAuthView.hidden=!!auth;
  accountSignedView.hidden=!auth;
  accountTabs.hidden=!auth;
  accountSocial.hidden=!auth||accountTab==='account';
  if(auth){accountUsername.textContent=auth.username;accountRevision.textContent=`云端版本 ${auth.revision||0}`;accountTabs.querySelectorAll('[data-account-tab]').forEach(button=>button.classList.toggle('active',button.dataset.accountTab===accountTab));if(accountTab==='friends')loadFriends();if(accountTab==='leaderboard')loadLeaderboard()}
  renderAccountButton()
}
function setAccountTab(tab){accountTab=tab;renderAccount()}
async function submitAccount(event,kind){
  event.preventDefault();if(accountBusy)return;
  const form=event.currentTarget,username=form.querySelector('[name="username"]').value.trim(),password=form.querySelector('[name="password"]').value;
  accountBusy=true;accountMessage(lang==='zh'?'正在连接服务器…':'Connecting…');
  try{
    const result=kind==='register'?await WumingRemote.register(username,password,accountSnapshot()):await WumingRemote.login(username,password);
    if(kind==='login'&&result.user.data)applyRemoteSnapshot(result.user.data);
    accountMessage(lang==='zh'?'登录并同步成功。':'Signed in and synced.',true);form.reset();renderAccount()
  }catch(error){accountMessage(accountError(error))}
  finally{accountBusy=false}
}
function accountError(error){
  const map={REMOTE_NOT_CONFIGURED:'远程服务器尚未配置。',AUTH_REQUIRED:'请先登录。',USERNAME_TAKEN:'账户名已被使用。',INVALID_CREDENTIALS:'账户名或密码错误。',INVALID_USERNAME:'账户名需为 3–24 位字母、数字、下划线或中文。',WEAK_PASSWORD:'密码至少 8 位。',FRIEND_NOT_FOUND:'没有找到该账户。',CANNOT_FRIEND_SELF:'不能添加自己。'};
  return lang==='zh'?(map[error.message]||`操作失败：${error.message}`):`Request failed: ${error.message}`
}
async function manualRemoteSync(){
  if(accountBusy)return;accountBusy=true;syncButton.disabled=true;accountMessage(lang==='zh'?'正在同步…':'Syncing…');
  try{const result=await WumingRemote.sync(accountSnapshot());applyRemoteSnapshot(result.user.data);accountMessage(result.conflict?(lang==='zh'?'检测到其他设备的新版本，已采用服务器数据。':'A newer server version was applied.'):(lang==='zh'?'同步完成。':'Sync complete.'),true);renderAccount()}
  catch(error){accountMessage(accountError(error));if(accountModal.hidden)openAccount()}
  finally{accountBusy=false;syncButton.disabled=false}
}
async function addFriend(event){
  event.preventDefault();const input=event.currentTarget.elements.username;
  try{await WumingRemote.addFriend(input.value.trim());input.value='';accountMessage(lang==='zh'?'好友已添加。':'Friend added.',true);loadFriends()}
  catch(error){accountMessage(accountError(error))}
}
async function loadFriends(){
  accountSocial.innerHTML='<p class="account-loading">正在加载好友…</p>';
  try{const result=await WumingRemote.friends();accountSocial.innerHTML=`<form class="friend-form" onsubmit="addFriend(event)"><input name="username" required placeholder="输入对方账户名"><button type="submit">添加好友</button></form><div class="friend-list">${result.friends.length?result.friends.map(friend=>`<div><strong>${esc(friend.username)}</strong><span>累计 ${friend.lifetimePointsEarned||0} 分</span></div>`).join(''):'<p class="account-empty">还没有好友。</p>'}</div>`}
  catch(error){accountSocial.innerHTML=`<p class="account-empty">${esc(accountError(error))}</p>`}
}
function setLeaderboardPeriod(period){leaderboardPeriod=period;loadLeaderboard()}
async function loadLeaderboard(){
  accountSocial.innerHTML=`<div class="leaderboard-tabs"><button onclick="setLeaderboardPeriod('day')" class="${leaderboardPeriod==='day'?'active':''}">日榜</button><button onclick="setLeaderboardPeriod('week')" class="${leaderboardPeriod==='week'?'active':''}">周榜</button><button onclick="setLeaderboardPeriod('month')" class="${leaderboardPeriod==='month'?'active':''}">月榜</button></div><p class="account-loading">正在加载排行榜…</p>`;
  try{const result=await WumingRemote.leaderboard(leaderboardPeriod),host=accountSocial.querySelector('.account-loading');host.outerHTML=`<ol class="leaderboard">${result.entries.length?result.entries.map((entry,index)=>`<li><span class="rank">${index+1}</span><strong>${esc(entry.username)}</strong><span>${entry.points} 分</span></li>`).join(''):'<li class="account-empty">这个周期还没有积分记录。</li>'}</ol>`}
  catch(error){accountSocial.querySelector('.account-loading').textContent=accountError(error)}
}
