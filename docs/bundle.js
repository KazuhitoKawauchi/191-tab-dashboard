(function(){"use strict";const s=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function b(o,a){const e=document.createElement("div");e.innerHTML=`<h3>${a} 担当者別ダミー表示</h3>`,o.appendChild(e);const c=document.createElement("canvas");c.width=400,c.height=260,o.appendChild(c);const i=document.createElement("canvas");i.width=400,i.height=260,o.appendChild(i);const t=s.map(n=>n.担当者名);new Chart(c.getContext("2d"),{type:"bar",data:{labels:t,datasets:[{label:"売上予算",data:s.map(n=>n.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:s.map(n=>n.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}}),new Chart(i.getContext("2d"),{type:"bar",data:{labels:t,datasets:[{label:"加工高予算",data:s.map(n=>n.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:s.map(n=>n.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}})}function m(o,a){const e=document.createElement("p");e.innerText=`得意先別（${a}）：今後対応予定です。`,o.appendChild(e)}function g(o,a){const e=document.createElement("p");e.innerText=`品名別（${a}）：今後対応予定です。`,o.appendChild(e)}function h(o,a){const e=document.createElement("p");e.innerText=`年月別（${a}）：今後対応予定です。`,o.appendChild(e)}function f(o){const a=document.createElement("div");a.className="tab-menu",a.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
    <select id="dashboard-select"></select>
    <button id="dashboard-reload">再表示</button>
  `;const e=document.createElement("div");e.id="tab-content",o.appendChild(a),o.appendChild(e);const c=a.querySelector("#dashboard-select"),i=new Date;for(let d=0;d<12;d++){const r=new Date(i.getFullYear(),i.getMonth()-d,1),p=r.getFullYear(),u=("0"+(r.getMonth()+1)).slice(-2),l=document.createElement("option");l.value=`${p}-${u}`,l.textContent=`${p}-${u}`,c.appendChild(l)}const t={employee:b,customer:m,product:g,month:h},n=d=>{e.innerHTML="",a.querySelectorAll("button[data-tab]").forEach(r=>{r.classList.toggle("active",r.dataset.tab===d)}),t[d](e,c.value)};a.addEventListener("click",d=>{const r=d.target.dataset.tab;r&&t[r]&&n(r)}),a.querySelector("#dashboard-reload").addEventListener("click",()=>{const d=a.querySelector("button.active").dataset.tab;n(d)}),n("employee")}console.log("📦 bundle.js updated: v1.3.16 - 2025/06/11"),window.__BUNDLE_VERSION__="v1.3.16 - 2025/06/11",function(){const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/chart.js",o.onload=()=>{const e=()=>{const t=kintone.app.getHeaderSpaceElement();for(;t.firstChild;)t.removeChild(t.firstChild)},c=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const t=document.createElement("style");t.id="custom-hide-kintone-list",t.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(t)},i=()=>{const t=kintone.app.getHeaderSpaceElement(),n=document.createElement("div");n.id="custom-tab-buttons",n.innerHTML=`
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
      `,t.appendChild(n),document.getElementById("show-tabs-btn").addEventListener("click",()=>{c(),e();const d=document.createElement("div");d.id="tab-dashboard",kintone.app.getHeaderSpaceElement().appendChild(d),f(d)})};kintone.events.on("app.record.index.show",t=>(Number(t.appId)!==191||document.getElementById("custom-tab-buttons")||document.getElementById("tab-dashboard")||i(),t))},document.head.appendChild(o)}()})();
