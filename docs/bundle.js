(function(){"use strict";const p=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function g(d,o){const a=document.createElement("div");a.innerHTML=`<h3>${o} 担当者別ダミー表示</h3>`,d.appendChild(a);const c=document.createElement("div");c.style.display="flex",c.style.justifyContent="center",c.style.gap="32px",c.style.flexWrap="wrap",d.appendChild(c);const r=document.createElement("canvas");r.width=400,r.height=260,c.appendChild(r);const e=document.createElement("canvas");e.width=400,e.height=260,c.appendChild(e);const l=p.map(t=>t.担当者名);new Chart(r.getContext("2d"),{type:"bar",data:{labels:l,datasets:[{label:"売上予算",data:p.map(t=>t.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:p.map(t=>t.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}}),new Chart(e.getContext("2d"),{type:"bar",data:{labels:l,datasets:[{label:"加工高予算",data:p.map(t=>t.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:p.map(t=>t.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}});const n=document.createElement("table");n.style.borderCollapse="collapse",n.style.marginTop="32px",n.style.width="100%",n.style.fontSize="14px";const i=`
    <tr>
      <th style="border:1px solid #ccc; padding:6px; background-color:#007BFF; color:white;">担当者</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#66ccff;">売上予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#3399ff; color:white;">売上金額</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ffcc66;">加工高予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ff9966; color:white;">加工高</th>
    </tr>
  `,u=p.map((t,s)=>{const x=s%2===0?"#e6f7ff":"#ffffff",y=s%2===0?"#cce5ff":"#ffffff",C=s%2===0?"#fff5cc":"#ffffff",E=s%2===0?"#ffe0cc":"#ffffff";return`
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">${t.担当者名}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${x};">${t.売上予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${y};">${t.売上金額.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${C};">${t.加工高予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${E};">${t.加工高.toLocaleString()}</td>
      </tr>
    `}).join("");n.innerHTML=`<thead>${i}</thead><tbody>${u}</tbody>`,d.appendChild(n)}function b(d,o){const a=document.createElement("p");a.innerText=`得意先別（${o}）：今後対応予定です。`,d.appendChild(a)}function m(d,o){const a=document.createElement("p");a.innerText=`品名別（${o}）：今後対応予定です。`,d.appendChild(a)}function f(d,o){const a=document.createElement("p");a.innerText=`年月別（${o}）：今後対応予定です。`,d.appendChild(a)}function h(d){const o=document.createElement("div");o.className="tab-menu",o.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
    <select id="dashboard-select" style="margin-left:8px;"></select>
    <button id="dashboard-reload" style="margin-left:4px;">再表示</button>
  `;const a=document.createElement("div");a.id="tab-content",d.appendChild(o),d.appendChild(a);const c=o.querySelector("#dashboard-select"),r=new Date;for(let n=0;n<12;n++){const i=new Date(r.getFullYear(),r.getMonth()-n,1),u=i.getFullYear(),t=("0"+(i.getMonth()+1)).slice(-2),s=document.createElement("option");s.value=`${u}-${t}`,s.textContent=`${u}-${t}`,c.appendChild(s)}const e={employee:g,customer:b,product:m,month:f},l=n=>{a.innerHTML="";const i="custom-hide-kintone-list";if(!document.getElementById(i)){const t=document.createElement("style");t.id=i,t.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(t)}o.querySelectorAll("button[data-tab]").forEach(t=>{t.classList.toggle("active",t.dataset.tab===n)});const u=c.value;e[n](a,u)};o.addEventListener("click",n=>{const i=n.target.dataset.tab;i&&e[i]&&l(i)}),o.querySelector("#dashboard-reload").addEventListener("click",()=>{const n=o.querySelector("button.active").dataset.tab;l(n)})}console.log("📦 bundle.js updated: v1.3.16 - 2025/06/11"),window.__BUNDLE_VERSION__="v1.3.16 - 2025/06/11",function(){const d=document.createElement("script");d.src="https://cdn.jsdelivr.net/npm/chart.js",d.onload=()=>{const a=()=>{const e=kintone.app.getHeaderSpaceElement();for(;e.firstChild;)e.removeChild(e.firstChild)},c=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const e=document.createElement("style");e.id="custom-hide-kintone-list",e.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(e)},r=()=>{const e=kintone.app.getHeaderSpaceElement(),l=document.createElement("div");l.id="custom-tab-buttons",l.innerHTML=`
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
      `,e.appendChild(l),document.getElementById("show-tabs-btn").addEventListener("click",()=>{c(),a();const n=document.createElement("div");n.id="tab-dashboard",kintone.app.getHeaderSpaceElement().appendChild(n),h(n)})};kintone.events.on("app.record.index.show",e=>(Number(e.appId)!==191||document.getElementById("custom-tab-buttons")||document.getElementById("tab-dashboard")||r(),e))},document.head.appendChild(d)}()})();
