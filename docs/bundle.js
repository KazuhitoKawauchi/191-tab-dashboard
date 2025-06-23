(function(){"use strict";const u=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function h(c,d){const a=document.createElement("div");a.innerHTML=`<h3>${d} 担当者別ダミー表示</h3>`,c.appendChild(a);const l=document.createElement("div");l.style.display="flex",l.style.justifyContent="center",l.style.gap="32px",l.style.flexWrap="wrap",c.appendChild(l);const s=document.createElement("canvas");s.width=400,s.height=260,l.appendChild(s);const t=document.createElement("canvas");t.width=400,t.height=260,l.appendChild(t);const p=u.map(e=>e.担当者名);new Chart(s.getContext("2d"),{type:"bar",data:{labels:p,datasets:[{label:"売上予算",data:u.map(e=>e.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:u.map(e=>e.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}}),new Chart(t.getContext("2d"),{type:"bar",data:{labels:p,datasets:[{label:"加工高予算",data:u.map(e=>e.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:u.map(e=>e.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}});const n=document.createElement("table");n.style.borderCollapse="collapse",n.style.marginTop="32px",n.style.width="100%",n.style.fontSize="14px";const o=`
    <tr>
      <th style="border:1px solid #ccc; padding:6px; background-color:#007BFF; color:white;">担当者</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#66ccff;">売上予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#3399ff; color:white;">売上金額</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ffcc66;">加工高予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ff9966; color:white;">加工高</th>
    </tr>
  `,i=u.map((e,r)=>{const b=r%2===0?"#e6f7ff":"#ffffff",g=r%2===0?"#cce5ff":"#ffffff",f=r%2===0?"#fff5cc":"#ffffff",m=r%2===0?"#ffe0cc":"#ffffff";return`
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">${e.担当者名}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${b};">${e.売上予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${g};">${e.売上金額.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${f};">${e.加工高予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${m};">${e.加工高.toLocaleString()}</td>
      </tr>
    `}).join("");n.innerHTML=`<thead>${o}</thead><tbody>${i}</tbody>`,c.appendChild(n)}const x=Object.freeze(Object.defineProperty({__proto__:null,buildEmployeeTab:h},Symbol.toStringTag,{value:"Module"}));function C(c,d){const a=document.createElement("p");a.innerText=`得意先別（${d}）：今後対応予定です。`,c.appendChild(a)}function E(c,d){const a=document.createElement("p");a.innerText=`品名別（${d}）：今後対応予定です。`,c.appendChild(a)}function v(c,d){const a=document.createElement("p");a.innerText=`年月別（${d}）：今後対応予定です。`,c.appendChild(a)}function k(c){const d=document.createElement("div");d.className="tab-menu",d.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
    <select id="dashboard-select" style="margin-left:8px;"></select>
    <button id="dashboard-reload" style="margin-left:4px;">再表示</button>
  `;const a=document.createElement("div");a.id="tab-content",c.appendChild(d),c.appendChild(a);const l=d.querySelector("#dashboard-select"),s=new Date;for(let n=0;n<12;n++){const o=new Date(s.getFullYear(),s.getMonth()-n,1),i=o.getFullYear(),e=("0"+(o.getMonth()+1)).slice(-2),r=document.createElement("option");r.value=`${i}-${e}`,r.textContent=`${i}-${e}`,l.appendChild(r)}const t={employee:h,customer:C,product:E,month:v},p=n=>{a.innerHTML="";const o="custom-hide-kintone-list";if(!document.getElementById(o)){const e=document.createElement("style");e.id=o,e.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(e)}d.querySelectorAll("button[data-tab]").forEach(e=>{e.classList.toggle("active",e.dataset.tab===n)});const i=l.value;t[n](a,i)};d.addEventListener("click",n=>{const o=n.target.dataset.tab;o&&t[o]&&p(o)}),d.querySelector("#dashboard-reload").addEventListener("click",()=>{const n=d.querySelector("button.active").dataset.tab;p(n)})}console.log("📦 bundle.js updated: v1.3.18 - 2025/06/23"),window.__BUNDLE_VERSION__="v1.3.18 - 2025/06/23",function(){const c=document.createElement("script");c.src="https://cdn.jsdelivr.net/npm/chart.js",c.onload=()=>{const a=()=>{const t=kintone.app.getHeaderSpaceElement();for(;t.firstChild;)t.removeChild(t.firstChild)},l=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const t=document.createElement("style");t.id="custom-hide-kintone-list",t.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(t)},s=()=>{const t=kintone.app.getHeaderSpaceElement(),p=document.createElement("div");p.id="custom-tab-buttons",p.innerHTML=`
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
      `,t.appendChild(p),document.getElementById("show-tabs-btn").addEventListener("click",()=>{l(),a();const n=document.createElement("div");n.id="tab-dashboard",kintone.app.getHeaderSpaceElement().appendChild(n),k(n);const o=document.querySelector(".tab-menu");if(o){const i=document.createElement("div");i.style.backgroundColor="#e6f2ff",i.style.padding="8px",i.style.borderRadius="4px",i.style.marginTop="8px",i.innerHTML=`
            表示年月：
            <select id="select-year">
              ${[2025,2024,2023].map(r=>`<option value="${r}">${r}年</option>`).join("")}
            </select>
            <select id="select-month">
              ${[...Array(12)].map((r,b)=>{const g=b+1;return`<option value="${("0"+g).slice(-2)}">${g}月</option>`}).join("")}
            </select>
            <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
          `,o.appendChild(i);const e=new Date;o.querySelector("#select-year").value=e.getFullYear(),o.querySelector("#select-month").value=("0"+(e.getMonth()+1)).slice(-2),o.querySelector("#dashboard-reload").addEventListener("click",()=>{var m;const r=o.querySelector("#select-year").value,b=o.querySelector("#select-month").value,g=`${r}-${b}`;if((m=o.querySelector("button.active"))==null?void 0:m.dataset.tab){const y=document.getElementById("tab-content");y.innerHTML="",Promise.resolve().then(()=>x).then(w=>{w.buildEmployeeTab(y,g)})}})}})};kintone.events.on("app.record.index.show",t=>(Number(t.appId)!==191||document.getElementById("custom-tab-buttons")||document.getElementById("tab-dashboard")||s(),t))},document.head.appendChild(c)}()})();
