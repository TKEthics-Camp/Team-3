function updateNavigationLabels(){
  backToSetup.textContent=T[lang].backToSetup;
  setupHome.textContent=T[lang].backHome;
  quizHome.textContent=T[lang].backHome;
}

function returnToSetup(){
  questions=[];answers=[];current=0;graded=false;quizStartedAt=0;
  quizView.hidden=true;setup.hidden=false;score.style.display='none';dots.innerHTML='';content.innerHTML='';
}

updateNavigationLabels();
new MutationObserver(updateNavigationLabels).observe(document.documentElement,{
  attributes:true,
  attributeFilter:['lang']
});
