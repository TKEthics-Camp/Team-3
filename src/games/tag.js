function initTag(){
  canvas.hidden=true;
  dom.hidden=false;
  dom.classList.add('tag-game-host');
  controls([]);
  const frame=document.createElement('iframe');
  frame.className='tag-game-frame';
  frame.src='assets/tag-game-2/index.html';
  frame.title=L('3D 追逐战','3D Tag Arena');
  frame.allow='fullscreen; gamepad';
  frame.setAttribute('sandbox','allow-scripts allow-same-origin allow-pointer-lock');
  dom.replaceChildren(frame);
  setStatus(L('本地机器人模式','LOCAL BOT MODE'));
  const g={score:0,loop:false};
  g.destroy=()=>{
    frame.src='about:blank';
    frame.remove();
    dom.classList.remove('tag-game-host');
  };
  return g
}
