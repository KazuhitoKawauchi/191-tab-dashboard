(function(){"use strict";const l=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function g(d,o){const n=document.createElement("div");n.innerHTML=`<h3>${o} 担当者別ダミー表示</h3>`,d.appendChild(n);const i=document.createElement("div");i.style.display="flex",i.style.justifyContent="center",i.style.gap="32px",i.style.flexWrap="wrap",d.appendChild(i);const r=document.createElement("canvas");r.width=400,r.height=260,i.appendChild(r);const e=document.createElement("canvas");e.width=400,e.height=260,i.appendChild(e);const s=l.map(t=>t.担当者名);new Chart(r.getContext("2d"),{type:"bar",data:{labels:s,datasets:[{label:"売上予算",data:l.map(t=>t.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:l.map(t=>t.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}}),new Chart(e.getContext("2d"),{type:"bar",data:{labels:s,datasets:[{label:"加工高予算",data:l.map(t=>t.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:l.map(t=>t.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}});const a=document.createElement("table");a.style.borderCollapse="collapse",a.style.marginTop="32px",a.style.width="100%",a.style.fontSize="14px";const c=`
    <tr style="background-color:#007BFF; color:white;">
      <th style="border:1px solid #ccc; padding:6px;">担当者</th>
      <th style="border:1px solid #ccc; padding:6px;">売上予算</th>
      <th style="border:1px solid #ccc; padding:6px;">売上金額</th>
      <th style="border:1px solid #ccc; padding:6px;">加工高予算</th>
      <th style="border:1px solid #ccc; padding:6px;">加工高</th>
    </tr>
  `,p=l.map((t,u)=>`
    <tr style="background-color:${u%2===0?"#ffffff":"#f0f8ff"};">
      <td style="border:1px solid #ccc; padding:6px;">${t.担当者名}</td>
      <td style="border:1px solid #ccc; padding:6px; text-align:right;">${t.売上予算.toLocaleString()}</td>
      <td style="border:1px solid #ccc; padding:6px; text-align:right;">${t.売上金額.toLocaleString()}</td>
      <td style="border:1px solid #ccc; padding:6px; text-align:right;">${t.加工高予算.toLocaleString()}</td>
      <td style="border:1px solid #ccc; padding:6px; text-align:right;">${t.加工高.toLocaleString()}</td>
    </tr>
  `).join("");a.innerHTML=`<thead>${c}</thead><tbody>${p}</tbody>`,d.appendChild(a)}function b(d,o){const n=document.createElement("p");n.innerText=`得意先別（${o}）：今後対応予定です。`,d.appendChild(n)}function m(d,o){const n=document.createElement("p");n.innerText=`品名別（${o}）：今後対応予定です。`,d.appendChild(n)}function h(d,o){const n=document.createElement("p");n.innerText=`年月別（${o}）：今後対応予定です。`,d.appendChild(n)}function x(d){const o=document.createElement("div");o.className="tab-menu",o.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
    <select id="dashboard-select" style="margin-left:8px;"></select>
    <button id="dashboard-reload" style="margin-left:4px;">再表示</button>
  `;const n=document.createElement("div");n.id="tab-content",d.appendChild(o),d.appendChild(n);const i=o.querySelector("#dashboard-select"),r=new Date;for(let a=0;a<12;a++){const c=new Date(r.getFullYear(),r.getMonth()-a,1),p=c.getFullYear(),t=("0"+(c.getMonth()+1)).slice(-2),u=document.createElement("option");u.value=`${p}-${t}`,u.textContent=`${p}-${t}`,i.appendChild(u)}const e={employee:g,customer:b,product:m,month:h},s=a=>{n.innerHTML="";const c="custom-hide-kintone-list";if(!document.getElementById(c)){const t=document.createElement("style");t.id=c,t.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(t)}o.querySelectorAll("button[data-tab]").forEach(t=>{t.classList.toggle("active",t.dataset.tab===a)});const p=i.value;e[a](n,p)};o.addEventListener("click",a=>{const c=a.target.dataset.tab;c&&e[c]&&s(c)}),o.querySelector("#dashboard-reload").addEventListener("click",()=>{const a=o.querySelector("button.active").dataset.tab;s(a)})}console.log("📦 bundle.js updated: v1.3.16 - 2025/06/11"),window.__BUNDLE_VERSION__="v1.3.16 - 2025/06/11",function(){const d=document.createElement("script");d.src="https://cdn.jsdelivr.net/npm/chart.js",d.onload=()=>{const n=()=>{const e=kintone.app.getHeaderSpaceElement();for(;e.firstChild;)e.removeChild(e.firstChild)},i=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const e=document.createElement("style");e.id="custom-hide-kintone-list",e.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(e)},r=()=>{const e=kintone.app.getHeaderSpaceElement(),s=document.createElement("div");s.id="custom-tab-buttons",s.innerHTML=`
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
      `,e.appendChild(s),document.getElementById("show-tabs-btn").addEventListener("click",()=>{i(),n();const a=document.createElement("div");a.id="tab-dashboard",kintone.app.getHeaderSpaceElement().appendChild(a),x(a)})};kintone.events.on("app.record.index.show",e=>(Number(e.appId)!==191||document.getElementById("custom-tab-buttons")||document.getElementById("tab-dashboard")||r(),e))},document.head.appendChild(d)}()})();
