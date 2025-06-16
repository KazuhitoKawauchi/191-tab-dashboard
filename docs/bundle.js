(function(){"use strict";const l=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function m(o,n){const a=document.createElement("div");a.innerHTML=`<h3>${n} 担当者別ダミー表示</h3>`,o.appendChild(a);const d=document.createElement("div");d.style.display="flex",d.style.justifyContent="center",d.style.gap="32px",d.style.flexWrap="wrap",o.appendChild(d);const i=document.createElement("canvas");i.width=400,i.height=260,d.appendChild(i);const t=document.createElement("canvas");t.width=400,t.height=260,d.appendChild(t);const c=l.map(e=>e.担当者名);new Chart(i.getContext("2d"),{type:"bar",data:{labels:c,datasets:[{label:"売上予算",data:l.map(e=>e.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:l.map(e=>e.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}}),new Chart(t.getContext("2d"),{type:"bar",data:{labels:c,datasets:[{label:"加工高予算",data:l.map(e=>e.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:l.map(e=>e.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}})}function b(o,n){const a=document.createElement("p");a.innerText=`得意先別（${n}）：今後対応予定です。`,o.appendChild(a)}function g(o,n){const a=document.createElement("p");a.innerText=`品名別（${n}）：今後対応予定です。`,o.appendChild(a)}function h(o,n){const a=document.createElement("p");a.innerText=`年月別（${n}）：今後対応予定です。`,o.appendChild(a)}function f(o){const n=document.createElement("div");n.className="tab-menu",n.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
    <select id="dashboard-select" style="margin-left:8px;"></select>
    <button id="dashboard-reload" style="margin-left:4px;">再表示</button>
  `;const a=document.createElement("div");a.id="tab-content",o.appendChild(n),o.appendChild(a);const d=n.querySelector("#dashboard-select"),i=new Date;for(let e=0;e<12;e++){const s=new Date(i.getFullYear(),i.getMonth()-e,1),p=s.getFullYear(),r=("0"+(s.getMonth()+1)).slice(-2),u=document.createElement("option");u.value=`${p}-${r}`,u.textContent=`${p}-${r}`,d.appendChild(u)}const t={employee:m,customer:b,product:g,month:h},c=e=>{a.innerHTML="";const s="custom-hide-kintone-list";if(!document.getElementById(s)){const r=document.createElement("style");r.id=s,r.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(r)}n.querySelectorAll("button[data-tab]").forEach(r=>{r.classList.toggle("active",r.dataset.tab===e)});const p=d.value;t[e](a,p)};n.addEventListener("click",e=>{const s=e.target.dataset.tab;s&&t[s]&&c(s)}),n.querySelector("#dashboard-reload").addEventListener("click",()=>{const e=n.querySelector("button.active").dataset.tab;c(e)})}console.log("📦 bundle.js updated: v1.3.16 - 2025/06/11"),window.__BUNDLE_VERSION__="v1.3.16 - 2025/06/11",function(){const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/chart.js",o.onload=()=>{const a=()=>{const t=kintone.app.getHeaderSpaceElement();for(;t.firstChild;)t.removeChild(t.firstChild)},d=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const t=document.createElement("style");t.id="custom-hide-kintone-list",t.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(t)},i=()=>{const t=kintone.app.getHeaderSpaceElement(),c=document.createElement("div");c.id="custom-tab-buttons",c.innerHTML=`
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
      `,t.appendChild(c),document.getElementById("show-tabs-btn").addEventListener("click",()=>{d(),a();const e=document.createElement("div");e.id="tab-dashboard",kintone.app.getHeaderSpaceElement().appendChild(e),f(e)})};kintone.events.on("app.record.index.show",t=>(Number(t.appId)!==191||document.getElementById("custom-tab-buttons")||document.getElementById("tab-dashboard")||i(),t))},document.head.appendChild(o)}()})();
