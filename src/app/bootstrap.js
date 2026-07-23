document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!adminModal.hidden)closeAdmin();else if(e.key==='Escape'&&!usageModal.hidden)closeUsage();else if(e.key==='Escape'&&!exchangeModal.hidden)closeExchange()});exchangeModal.addEventListener('click',e=>{if(e.target===exchangeModal)closeExchange()});usageModal.addEventListener('click',e=>{if(e.target===usageModal)closeUsage()});adminModal.addEventListener('click',e=>{if(e.target===adminModal)closeAdmin()});
window.addEventListener('pageshow',()=>{if(importArcadeReturn()&&!exchangeModal.hidden)renderExchange()});
init();
