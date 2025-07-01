(function(){"use strict";const p=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function b(a,o){const n=document.createElement("div");n.innerHTML=`<h3>${o} 担当者別ダミー表示</h3>`,a.appendChild(n);const d=document.createElement("div");d.style.display="flex",d.style.justifyContent="center",d.style.gap="32px",d.style.flexWrap="wrap",a.appendChild(d);const i=document.createElement("canvas");i.width=400,i.height=260,d.appendChild(i);const e=document.createElement("canvas");e.width=400,e.height=260,d.appendChild(e);const c=p.map(t=>t.担当者名);new Chart(i.getContext("2d"),{type:"bar",data:{labels:c,datasets:[{label:"売上予算",data:p.map(t=>t.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:p.map(t=>t.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}}),new Chart(e.getContext("2d"),{type:"bar",data:{labels:c,datasets:[{label:"加工高予算",data:p.map(t=>t.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:p.map(t=>t.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}})}function g(a,o){const n=document.createElement("p");n.innerText=`得意先別（${o}）：今後対応予定です。`,a.appendChild(n)}function h(a,o){const n=document.createElement("p");n.innerText=`品名別（${o}）：今後対応予定です。`,a.appendChild(n)}function y(a,o){const n=document.createElement("p");n.innerText=`年月別（${o}）：今後対応予定です。`,a.appendChild(n)}function f(a){const o=document.createElement("div");o.className="tab-menu",o.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
  `,a.appendChild(o);const n=document.createElement("div");n.id="tab-content",a.appendChild(n);const d={employee:b,customer:g,product:h,month:y},i=e=>{n.innerHTML="",o.querySelectorAll("button[data-tab]").forEach(s=>{s.classList.toggle("active",s.dataset.tab===e)});const c=document.getElementById("select-year").value,t=document.getElementById("select-month").value,u=`${c}-${t}`;d[e](n,u)};o.addEventListener("click",e=>{const c=e.target.dataset.tab;c&&d[c]&&i(c)})}function x(a,o,n){const d={employee:b,customer:g,product:h,month:y};a.innerHTML="",d[o](a,n)}const w=Object.freeze(Object.defineProperty({__proto__:null,initTabs:f,rebuildTab:x},Symbol.toStringTag,{value:"Module"}));console.log("📦 bundle.js updated: v1.3.19 - 2025/07/01"),window.__BUNDLE_VERSION__="v1.3.19 - 2025/07/01",function(){const a=document.createElement("script");a.src="https://cdn.jsdelivr.net/npm/chart.js",a.onload=()=>{const n=()=>{const e=kintone.app.getHeaderSpaceElement();for(;e.firstChild;)e.removeChild(e.firstChild)},d=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const e=document.createElement("style");e.id="custom-hide-kintone-list",e.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(e)},i=()=>{const e=kintone.app.getHeaderSpaceElement(),c=document.createElement("div");if(c.id="custom-tab-buttons",c.innerHTML=`
        <style>
          .tab-trigger-wrap {
            display: flex;
            gap: 12px;
            margin-top: 8px;
          }
          .tab-trigger-wrap button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
          }
        </style>
        <div class="tab-trigger-wrap">
          <button id="show-tabs-btn">📊 グラフ・表を表示</button>
        </div>
      `,e.appendChild(c),!document.getElementById("selector-wrap")){const t=document.createElement("div");t.id="selector-wrap",t.style.backgroundColor="#e6f2ff",t.style.padding="8px",t.style.borderRadius="4px",t.style.marginTop="8px",t.innerHTML=`
          表示年月：
          <select id="select-year"></select>
          <select id="select-month"></select>
          <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
        `,e.appendChild(t);const u=t.querySelector("#select-year"),s=t.querySelector("#select-month"),m=new Date;[m.getFullYear(),m.getFullYear()-1,m.getFullYear()-2].forEach(r=>{const l=document.createElement("option");l.value=r,l.textContent=`${r}年`,u.appendChild(l)});for(let r=1;r<=12;r++){const l=document.createElement("option");l.value=("0"+r).slice(-2),l.textContent=`${r}月`,s.appendChild(l)}u.value=m.getFullYear(),s.value=("0"+(m.getMonth()+1)).slice(-2),t.querySelector("#dashboard-reload").addEventListener("click",()=>{var E;const r=u.value,l=s.value,T=`${r}-${l}`,C=(E=document.querySelector(".tab-menu button.active"))==null?void 0:E.dataset.tab;if(C){const v=document.getElementById("tab-content");v.innerHTML="",Promise.resolve().then(()=>w).then(k=>{k.rebuildTab(v,C,T)})}})}document.getElementById("show-tabs-btn").addEventListener("click",()=>{if(document.getElementById("tab-dashboard"))return;d(),n();const t=document.createElement("div");t.id="tab-dashboard",e.appendChild(t),f(t)})};kintone.events.on("app.record.index.show",e=>(Number(e.appId)!==191||document.getElementById("custom-tab-buttons")||i(),e))},document.head.appendChild(a)}()})();
