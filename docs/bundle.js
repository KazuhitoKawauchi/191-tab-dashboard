(function(){"use strict";const p=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function m(n,o){const e=document.createElement("div");e.innerHTML=`<h3>${o} 担当者別ダミー表示</h3>`,n.appendChild(e);const l=document.createElement("div");l.style.display="flex",l.style.justifyContent="center",l.style.gap="32px",l.style.flexWrap="wrap",n.appendChild(l);const a=document.createElement("canvas");a.width=400,a.height=260,l.appendChild(a);const d=document.createElement("canvas");d.width=400,d.height=260,l.appendChild(d);const t=p.map(c=>c.担当者名);new Chart(a.getContext("2d"),{type:"bar",data:{labels:t,datasets:[{label:"売上予算",data:p.map(c=>c.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:p.map(c=>c.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}}),new Chart(d.getContext("2d"),{type:"bar",data:{labels:t,datasets:[{label:"加工高予算",data:p.map(c=>c.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:p.map(c=>c.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}})}function b(n,o){const e=document.createElement("p");e.innerText=`得意先別（${o}）：今後対応予定です。`,n.appendChild(e)}function h(n,o){const e=document.createElement("p");e.innerText=`品名別（${o}）：今後対応予定です。`,n.appendChild(e)}function g(n,o){const e=document.createElement("p");e.innerText=`年月別（${o}）：今後対応予定です。`,n.appendChild(e)}function y(n){const o=document.createElement("div");o.className="tab-menu",o.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
  `,n.appendChild(o);const e=document.createElement("div");e.id="tab-content",n.appendChild(e);const l={employee:m,customer:b,product:h,month:g},a=d=>{e.innerHTML="",o.querySelectorAll("button[data-tab]").forEach(s=>{s.classList.toggle("active",s.dataset.tab===d)});const t=document.getElementById("select-year").value,c=document.getElementById("select-month").value,u=`${t}-${c}`;l[d](e,u)};o.addEventListener("click",d=>{const t=d.target.dataset.tab;t&&l[t]&&a(t)})}function C(n,o,e){const l={employee:m,customer:b,product:h,month:g};n.innerHTML="",l[o](n,e)}const E=Object.freeze(Object.defineProperty({__proto__:null,initTabs:y,rebuildTab:C},Symbol.toStringTag,{value:"Module"}));console.log("📦 bundle.js updated: v1.3.22 - 2025/07/01"),window.__BUNDLE_VERSION__="v1.3.22 - 2025/07/01",function(){const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/chart.js",n.onload=()=>{const e=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const a=document.createElement("style");a.id="custom-hide-kintone-list",a.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(a)},l=()=>{const a=kintone.app.getHeaderSpaceElement(),d=document.createElement("div");if(d.id="tab-dashboard",a.appendChild(d),y(d),!document.getElementById("selector-wrap")){const t=document.createElement("div");t.id="selector-wrap",t.style.backgroundColor="#e6f2ff",t.style.padding="8px",t.style.borderRadius="4px",t.style.marginTop="8px",t.innerHTML=`
          表示年月：
          <select id="select-year"></select>
          <select id="select-month"></select>
          <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
          <div style="margin-top:8px;">
            <label><input type="checkbox" id="chk-quarter"> 四半期</label>
            <label style="margin-left:12px;"><input type="checkbox" id="chk-upper"> 上半期</label>
            <label style="margin-left:12px;"><input type="checkbox" id="chk-lower"> 下半期</label>
            <label style="margin-left:12px;"><input type="checkbox" id="chk-full"> 全期</label>
          </div>
        `,a.appendChild(t);const c=t.querySelector("#select-year"),u=t.querySelector("#select-month"),s=new Date;[s.getFullYear(),s.getFullYear()-1,s.getFullYear()-2].forEach(i=>{const r=document.createElement("option");r.value=i,r.textContent=`${i}年`,c.appendChild(r)});for(let i=1;i<=12;i++){const r=document.createElement("option");r.value=("0"+i).slice(-2),r.textContent=`${i}月`,u.appendChild(r)}c.value=s.getFullYear(),u.value=("0"+(s.getMonth()+1)).slice(-2),t.querySelector("#dashboard-reload").addEventListener("click",()=>{var x;const i=c.value,r=u.value,k=`${i}-${r}`,f=(x=document.querySelector(".tab-menu button.active"))==null?void 0:x.dataset.tab;if(f){const v=document.getElementById("tab-content");v.innerHTML="",Promise.resolve().then(()=>E).then(T=>{T.rebuildTab(v,f,k)})}})}};kintone.events.on("app.record.index.show",a=>(Number(a.appId)!==191||document.getElementById("tab-dashboard")||(e(),l()),a))},document.head.appendChild(n)}()})();
