const chessGlyph={K:'♔',Q:'♕',R:'♖',B:'♗',N:'♘',P:'♙',k:'♚',q:'♛',r:'♜',b:'♝',n:'♞',p:'♟'};
const chessValue={p:100,n:320,b:330,r:500,q:900,k:20000};
function chessColor(p){return !p?null:p===p.toUpperCase()?'w':'b'}
function chessInside(r,c){return r>=0&&r<8&&c>=0&&c<8}
function chessInitial(){return ['rnbqkbnr','pppppppp','........','........','........','........','PPPPPPPP','RNBQKBNR'].join('').split('').map(x=>x==='.'?'':x)}
function chessPseudo(board,from,attacksOnly=false){
  const p=board[from],color=chessColor(p),type=p.toLowerCase(),r=Math.floor(from/8),c=from%8,out=[];
  const add=(rr,cc)=>{if(!chessInside(rr,cc))return false;const to=rr*8+cc,target=board[to];if(!target){out.push(to);return true}if(chessColor(target)!==color)out.push(to);return false};
  if(type==='p'){
    const d=color==='w'?-1:1,start=color==='w'?6:1;
    for(const dc of [-1,1]){const rr=r+d,cc=c+dc;if(chessInside(rr,cc)&&(attacksOnly||board[rr*8+cc]&&chessColor(board[rr*8+cc])!==color))out.push(rr*8+cc)}
    if(!attacksOnly&&chessInside(r+d,c)&&!board[(r+d)*8+c]){out.push((r+d)*8+c);if(r===start&&!board[(r+2*d)*8+c])out.push((r+2*d)*8+c)}
  }else if(type==='n'){
    [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(([dr,dc])=>add(r+dr,c+dc));
  }else if(type==='k'){
    for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++)if(dr||dc)add(r+dr,c+dc);
  }else{
    const dirs=type==='b'?[[1,1],[1,-1],[-1,1],[-1,-1]]:type==='r'?[[1,0],[-1,0],[0,1],[0,-1]]:[[1,1],[1,-1],[-1,1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];
    for(const [dr,dc] of dirs)for(let n=1;chessInside(r+dr*n,c+dc*n);n++)if(!add(r+dr*n,c+dc*n))break;
  }
  return out;
}
function chessAttacked(board,square,byColor){for(let i=0;i<64;i++)if(chessColor(board[i])===byColor&&chessPseudo(board,i,true).includes(square))return true;return false}
function chessInCheck(board,color){const king=board.findIndex(p=>p===(color==='w'?'K':'k'));return king<0||chessAttacked(board,king,color==='w'?'b':'w')}
function chessAfter(board,move){const next=[...board],piece=next[move.from];next[move.to]=piece;next[move.from]='';if(move.castle){next[move.castle.to]=next[move.castle.from];next[move.castle.from]=''}const row=Math.floor(move.to/8);if(piece.toLowerCase()==='p'&&(row===0||row===7))next[move.to]=piece===piece.toUpperCase()?'Q':'q';return next}
function chessLegal(board,from,rights={}){
  const piece=board[from],color=chessColor(piece);if(!piece)return[];
  let moves=chessPseudo(board,from).map(to=>({from,to}));
  if(piece.toLowerCase()==='k'&&!chessInCheck(board,color)){
    const enemy=color==='w'?'b':'w',row=color==='w'?7:0,keyK=color==='w'?'K':'k',keyQ=color==='w'?'Q':'q';
    const rook=color==='w'?'R':'r';
    if(rights[keyK]&&!board[row*8+5]&&!board[row*8+6]&&board[row*8+7]===rook&&!chessAttacked(board,row*8+5,enemy)&&!chessAttacked(board,row*8+6,enemy))moves.push({from,to:row*8+6,castle:{from:row*8+7,to:row*8+5}});
    if(rights[keyQ]&&!board[row*8+1]&&!board[row*8+2]&&!board[row*8+3]&&board[row*8]===rook&&!chessAttacked(board,row*8+3,enemy)&&!chessAttacked(board,row*8+2,enemy))moves.push({from,to:row*8+2,castle:{from:row*8,to:row*8+3}});
  }
  return moves.filter(m=>!chessInCheck(chessAfter(board,m),color));
}
function chessAllMoves(board,color,rights={}){const out=[];for(let i=0;i<64;i++)if(chessColor(board[i])===color)out.push(...chessLegal(board,i,rights));return out}
function chessEval(board){return board.reduce((sum,p)=>p?sum+(chessColor(p)==='b'?1:-1)*chessValue[p.toLowerCase()]:sum,0)}
function chessSearch(board,depth,alpha,beta,color){
  if(depth===0)return chessEval(board);const moves=chessAllMoves(board,color,{});if(!moves.length)return chessInCheck(board,color)?(color==='b'?-99999:99999):0;
  if(color==='b'){let best=-Infinity;for(const m of moves){best=Math.max(best,chessSearch(chessAfter(board,m),depth-1,alpha,beta,'w'));alpha=Math.max(alpha,best);if(beta<=alpha)break}return best}
  let best=Infinity;for(const m of moves){best=Math.min(best,chessSearch(chessAfter(board,m),depth-1,alpha,beta,'b'));beta=Math.min(beta,best);if(beta<=alpha)break}return best;
}
function initChess(){
  canvas.hidden=true;dom.hidden=false;controls([]);const g={score:0,loop:false,board:chessInitial(),turn:'w',selected:-1,moves:[],mode:'ai',difficulty:'normal',started:false,rights:{K:true,Q:true,k:true,q:true},lastMove:null,timers:[],animating:false};
  const setup=()=>{setStatus('选择模式');dom.innerHTML=`<div class="mode-panel"><h3>♞ 建立棋局</h3><p>白方先行。电脑模式中你执白棋；双人模式在同一设备轮流操作。</p><div class="setup-grid"><label class="setup-field">对战模式<select id="chessMode"><option value="ai">对战电脑</option><option value="pvp">本地双人</option></select></label><label class="setup-field" id="chessDifficultyField">电脑难度<select id="chessDifficulty"><option value="easy">轻松</option><option value="normal" selected>进阶</option><option value="hard">大师</option></select></label></div><button class="setup-start" id="chessStart">开始对弈</button></div>`;const mode=$('#chessMode'),field=$('#chessDifficultyField');mode.onchange=()=>field.hidden=mode.value==='pvp';$('#chessStart').onclick=()=>{g.mode=mode.value;g.difficulty=$('#chessDifficulty').value;g.started=true;render()}};
  const updateRights=(piece,from,to)=>{if(piece==='K'){g.rights.K=false;g.rights.Q=false}if(piece==='k'){g.rights.k=false;g.rights.q=false}if(from===63||to===63)g.rights.K=false;if(from===56||to===56)g.rights.Q=false;if(from===7||to===7)g.rights.k=false;if(from===0||to===0)g.rights.q=false};
  const endCheck=()=>{const moves=chessAllMoves(g.board,g.turn,g.rights);if(moves.length)return false;const checked=chessInCheck(g.board,g.turn);if(checked){const winner=g.turn==='w'?'黑方':'白方';g.score=g.turn==='b'?1500:300;setScore(g.score);finish(`${winner}将死获胜`)}else finish('和棋 · 无合法着法');return true};
  const finalizeMove=m=>{const piece=g.board[m.from];updateRights(piece,m.from,m.to);g.board=chessAfter(g.board,m);g.lastMove=m;g.turn=g.turn==='w'?'b':'w';g.selected=-1;g.moves=[];g.animating=false;render();if(endCheck())return;if(g.mode==='ai'&&g.turn==='b')scheduleAI()};
  const flight=(board,piece,from,to)=>{const node=document.createElement('span'),fr=Math.floor(from/8),fc=from%8,tr=Math.floor(to/8),tc=to%8;node.className=`chess-flying-piece ${chessColor(piece)==='w'?'white':'black'}`;node.textContent=chessGlyph[piece];node.style.left=`${fc*12.5}%`;node.style.top=`${fr*12.5}%`;node.style.setProperty('--move-x',`${(tc-fc)*100}%`);node.style.setProperty('--move-y',`${(tr-fr)*100}%`);board.appendChild(node);board.querySelector(`[data-square="${from}"]`)?.classList.add('moving-origin');g.timers.push(setTimeout(()=>node.classList.add('go'),20))};
  const move=m=>{if(g.animating)return;g.animating=true;const board=dom.querySelector('.chess-board'),piece=g.board[m.from];if(!board)return finalizeMove(m);flight(board,piece,m.from,m.to);if(m.castle)flight(board,g.board[m.castle.from],m.castle.from,m.castle.to);g.timers.push(setTimeout(()=>finalizeMove(m),340))};
  const pickAI=()=>{const list=chessAllMoves(g.board,'b',g.rights);if(!list.length)return null;if(g.difficulty==='easy')return list[Math.floor(Math.random()*list.length)];if(g.difficulty==='normal'){const ranked=list.map(m=>({m,v:(g.board[m.to]?chessValue[g.board[m.to].toLowerCase()]:0)+Math.random()*90})).sort((a,b)=>b.v-a.v);return ranked[0].m}let best=-Infinity,choice=list[0];for(const m of list){const v=chessSearch(chessAfter(g.board,m),2,-Infinity,Infinity,'w')+Math.random()*2;if(v>best){best=v;choice=m}}return choice};
  const scheduleAI=()=>{setStatus('黑棋由电脑思考中…');g.timers.push(setTimeout(()=>{if(!g.started||ended)return;const m=pickAI();if(m)move(m)},g.difficulty==='hard'?420:260))};
  const clickSquare=i=>{if(ended||g.animating||!g.started||g.mode==='ai'&&g.turn==='b')return;const own=chessColor(g.board[i])===g.turn;if(g.selected>=0){const chosen=g.moves.find(m=>m.to===i);if(chosen)return move(chosen)}if(own){g.selected=i;g.moves=chessLegal(g.board,i,g.rights)}else{g.selected=-1;g.moves=[]}render()};
  const render=()=>{const turnName=g.turn==='w'?'白棋':'黑棋',checked=chessInCheck(g.board,g.turn),files=(arcadeLang==='zh'?'甲乙丙丁戊己庚辛':'ABCDEFGH').split(''),ranks=(arcadeLang==='zh'?'八七六五四三二一':'87654321').split('');setStatus(`${turnName}${checked?' · 将军':''}`);const squares=g.board.map((p,i)=>{const r=Math.floor(i/8),capture=g.moves.some(m=>m.to===i)&&!!p,classes=['chess-square',(r+i%8)%2?'dark':'light',p?(chessColor(p)==='w'?'piece-white':'piece-black'):'',g.selected===i?'selected':'',g.moves.some(m=>m.to===i)?(capture?'capture':'move'):'',g.lastMove&&(g.lastMove.from===i||g.lastMove.to===i)?'last':''].join(' ');return`<button class="${classes}" data-square="${i}" aria-label="${p?L('棋子','piece'):L('空格','empty square')}">${chessGlyph[p]||''}</button>`}).join('');dom.innerHTML=`<div class="game-toolbar"><strong>${turnName}行棋 ${checked?'⚠️ 将军':''}</strong><button class="mini-btn" id="chessConfig">模式设置</button></div><div class="chess-frame"><div class="chess-coords chess-files top">${files.map(x=>`<span>${x}</span>`).join('')}</div><div class="chess-coords chess-files bottom">${files.map(x=>`<span>${x}</span>`).join('')}</div><div class="chess-coords chess-ranks left">${ranks.map(x=>`<span>${x}</span>`).join('')}</div><div class="chess-coords chess-ranks right">${ranks.map(x=>`<span>${x}</span>`).join('')}</div><div class="chess-board" role="grid" aria-label="${L('国际象棋棋盘','Chess board')}">${squares}</div></div><p class="chess-note">${g.mode==='ai'?`你执白棋 · 电脑执黑棋 · 难度：${{easy:'轻松',normal:'进阶',hard:'大师'}[g.difficulty]}`:'本地双人 · 白棋与黑棋轮流操作'}</p>`;dom.querySelectorAll('[data-square]').forEach(b=>b.onclick=()=>clickSquare(+b.dataset.square));$('#chessConfig').onclick=()=>{g.timers.forEach(clearTimeout);g.started=false;g.animating=false;setup()}};
  g.destroy=()=>g.timers.forEach(clearTimeout);setup();return g;
}
