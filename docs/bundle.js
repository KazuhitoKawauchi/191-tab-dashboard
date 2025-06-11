(function(){"use strict";const l=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function m(n,a){const e=document.createElement("div");e.innerHTML=`<h3>${a} 担当者別ダミー表示</h3>`,n.appendChild(e);const i=document.createElement("canvas");i.width=400,i.height=260,n.appendChild(i);const c=document.createElement("canvas");c.width=400,c.height=260,n.appendChild(c);const t=l.map(o=>o.担当者名);new Chart(i.getContext("2d"),{type:"bar",data:{labels:t,datasets:[{label:"売上予算",data:l.map(o=>o.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:l.map(o=>o.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}}),new Chart(c.getContext("2d"),{type:"bar",data:{labels:t,datasets:[{label:"加工高予算",data:l.map(o=>o.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:l.map(o=>o.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}})}function b(n,a){const e=document.createElement("p");e.innerText=`得意先別（${a}）：今後対応予定です。`,n.appendChild(e)}function g(n,a){const e=document.createElement("p");e.innerText=`品名別（${a}）：今後対応予定です。`,n.appendChild(e)}function h(n,a){const e=document.createElement("p");e.innerText=`年月別（${a}）：今後対応予定です。`,n.appendChild(e)}function f(n){const a=document.createElement("div");a.className="tab-menu",a.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
    <select id="dashboard-select" style="margin-left:8px;"></select>
    <button id="dashboard-reload" style="margin-left:4px;">再表示</button>
  `;const e=document.createElement("div");e.id="tab-content",n.appendChild(a),n.appendChild(e);const i=a.querySelector("#dashboard-select"),c=new Date;for(let d=0;d<12;d++){const r=new Date(c.getFullYear(),c.getMonth()-d,1),p=r.getFullYear(),s=("0"+(r.getMonth()+1)).slice(-2),u=document.createElement("option");u.value=`${p}-${s}`,u.textContent=`${p}-${s}`,i.appendChild(u)}const t={employee:m,customer:b,product:g,month:h},o=d=>{e.innerHTML="";const r="custom-hide-kintone-list";if(!document.getElementById(r)){const s=document.createElement("style");s.id=r,s.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(s)}a.querySelectorAll("button[data-tab]").forEach(s=>{s.classList.toggle("active",s.dataset.tab===d)});const p=i.value;t[d](e,p)};a.addEventListener("click",d=>{const r=d.target.dataset.tab;r&&t[r]&&o(r)}),a.querySelector("#dashboard-reload").addEventListener("click",()=>{const d=a.querySelector("button.active").dataset.tab;o(d)})}console.log("📦 bundle.js updated: v1.3.16 - 2025/06/11"),window.__BUNDLE_VERSION__="v1.3.16 - 2025/06/11",function(){const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/chart.js",n.onload=()=>{const e=()=>{const t=kintone.app.getHeaderSpaceElement();for(;t.firstChild;)t.removeChild(t.firstChild)},i=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const t=document.createElement("style");t.id="custom-hide-kintone-list",t.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(t)},c=()=>{const t=kintone.app.getHeaderSpaceElement(),o=document.createElement("div");o.id="custom-tab-buttons",o.innerHTML=`
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
      `,t.appendChild(o),document.getElementById("show-tabs-btn").addEventListener("click",()=>{i(),e();const d=document.createElement("div");d.id="tab-dashboard",kintone.app.getHeaderSpaceElement().appendChild(d),f(d)})};kintone.events.on("app.record.index.show",t=>(Number(t.appId)!==191||document.getElementById("custom-tab-buttons")||document.getElementById("tab-dashboard")||c(),t))},document.head.appendChild(n)}()})();
