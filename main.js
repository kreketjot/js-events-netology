(()=>{"use strict";const e=(e=new HTMLCollection)=>e.item(Math.random()*e.length),t=document.getElementById("hits-counter"),n=document.getElementById("fails-counter"),d=document.getElementById("game-over"),o=document.getElementById("goblin"),i=document.getElementById("grid"),l=document.getElementsByClassName("grid-item"),c=document.getElementById("restart");let m,a=null,r=0,u=0;const s=(e=!0)=>document.dispatchEvent(new CustomEvent("goblin",{detail:{fail:e}}));i.addEventListener("click",(e=>{e.target===o?(clearTimeout(m),s(!1)):s(!0)}));const g=()=>{var i,c,g;c=u,void 0!==(i=r)&&(g=i,t.textContent=g),void 0!==c&&(e=>{n.textContent=e})(c),u<5?(a=((t,n,d)=>{const o=((t,n)=>{let d;do{d=e(t)}while(d===n);return d})(t,n);return o.append&&o.append(d),o})(l,a,o),m=setTimeout((()=>s(!0)),1e3)):(o.hidden=!0,d.hidden=!1)};document.addEventListener("goblin",(e=>{e.detail.fail?u+=1:r+=1,g()})),c.addEventListener("click",(()=>document.location.reload())),g()})();