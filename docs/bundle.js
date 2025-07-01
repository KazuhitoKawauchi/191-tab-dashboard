(function(){"use strict";const g=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function f(c,o){const a=document.createElement("div");a.innerHTML=`<h3>${o} 担当者別ダミー表示</h3>`,c.appendChild(a);const r=document.createElement("div");r.style.display="flex",r.style.justifyContent="center",r.style.gap="32px",r.style.flexWrap="wrap",c.appendChild(r);const p=document.createElement("canvas");p.width=400,p.height=260,r.appendChild(p);const t=document.createElement("canvas");t.width=400,t.height=260,r.appendChild(t);const u=g.map(e=>e.担当者名);new Chart(p.getContext("2d"),{type:"bar",data:{labels:u,datasets:[{label:"売上予算",data:g.map(e=>e.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:g.map(e=>e.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}}),new Chart(t.getContext("2d"),{type:"bar",data:{labels:u,datasets:[{label:"加工高予算",data:g.map(e=>e.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:g.map(e=>e.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}});const l=document.createElement("table");l.style.borderCollapse="collapse",l.style.marginTop="32px",l.style.width="100%",l.style.fontSize="14px";const i=`
    <tr>
      <th style="border:1px solid #ccc; padding:6px; background-color:#007BFF; color:white;">担当者</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#66ccff;">売上予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#3399ff; color:white;">売上金額</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ffcc66;">加工高予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ff9966; color:white;">加工高</th>
    </tr>
  `,n=g.map((e,d)=>{const s=d%2===0?"#e6f7ff":"#ffffff",b=d%2===0?"#cce5ff":"#ffffff",h=d%2===0?"#fff5cc":"#ffffff",m=d%2===0?"#ffe0cc":"#ffffff";return`
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">${e.担当者名}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${s};">${e.売上予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${b};">${e.売上金額.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${h};">${e.加工高予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${m};">${e.加工高.toLocaleString()}</td>
      </tr>
    `}).join("");l.innerHTML=`<thead>${i}</thead><tbody>${n}</tbody>`,c.appendChild(l)}const x=Object.freeze(Object.defineProperty({__proto__:null,buildEmployeeTab:f},Symbol.toStringTag,{value:"Module"}));function v(c,o){const a=document.createElement("p");a.innerText=`得意先別（${o}）：今後対応予定です。`,c.appendChild(a)}function C(c,o){const a=document.createElement("p");a.innerText=`品名別（${o}）：今後対応予定です。`,c.appendChild(a)}function E(c,o){const a=document.createElement("p");a.innerText=`年月別（${o}）：今後対応予定です。`,c.appendChild(a)}function k(c){const o=document.createElement("div");o.className="tab-menu",o.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>

    <div style="background-color:#e6f2ff; padding:8px; border-radius:4px; margin-top:8px;">
      表示年月：
      <select id="select-year"></select>
      <select id="select-month"></select>
      <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
    </div>
  `;const a=document.createElement("div");a.id="tab-content",c.appendChild(o),c.appendChild(a);const r=o.querySelector("#select-year"),p=o.querySelector("#select-month"),t=new Date;[t.getFullYear(),t.getFullYear()-1,t.getFullYear()-2].forEach(n=>{const e=document.createElement("option");e.value=n,e.textContent=`${n}年`,r.appendChild(e)});for(let n=1;n<=12;n++){const e=("0"+n).slice(-2),d=document.createElement("option");d.value=e,d.textContent=`${n}月`,p.appendChild(d)}r.value=t.getFullYear(),p.value=("0"+(t.getMonth()+1)).slice(-2);const l={employee:f,customer:v,product:C,month:E},i=n=>{a.innerHTML="";const e="custom-hide-kintone-list";if(!document.getElementById(e)){const s=document.createElement("style");s.id=e,s.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(s)}o.querySelectorAll("button[data-tab]").forEach(s=>{s.classList.toggle("active",s.dataset.tab===n)});const d=`${r.value}-${p.value}`;l[n](a,d)};o.addEventListener("click",n=>{const e=n.target.dataset.tab;e&&l[e]&&i(e)}),o.querySelector("#dashboard-reload").addEventListener("click",()=>{const n=o.querySelector("button.active").dataset.tab;n&&i(n)})}console.log("📦 bundle.js updated: v1.3.18 - 2025/06/23"),window.__BUNDLE_VERSION__="v1.3.18 - 2025/06/23",function(){const c=document.createElement("script");c.src="https://cdn.jsdelivr.net/npm/chart.js",c.onload=()=>{const a=()=>{const t=kintone.app.getHeaderSpaceElement();for(;t.firstChild;)t.removeChild(t.firstChild)},r=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const t=document.createElement("style");t.id="custom-hide-kintone-list",t.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(t)},p=()=>{const t=kintone.app.getHeaderSpaceElement(),u=document.createElement("div");u.id="custom-tab-buttons",u.innerHTML=`
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
      `,t.appendChild(u),document.getElementById("show-tabs-btn").addEventListener("click",()=>{r(),a();const l=document.createElement("div");l.id="tab-dashboard",kintone.app.getHeaderSpaceElement().appendChild(l),k(l);const i=document.querySelector(".tab-menu");if(i){const n=document.createElement("div");n.style.backgroundColor="#e6f2ff",n.style.padding="8px",n.style.borderRadius="4px",n.style.marginTop="8px",n.innerHTML=`
            表示年月：
            <select id="select-year">
              ${[2025,2024,2023].map(d=>`<option value="${d}">${d}年</option>`).join("")}
            </select>
            <select id="select-month">
              ${[...Array(12)].map((d,s)=>{const b=s+1;return`<option value="${("0"+b).slice(-2)}">${b}月</option>`}).join("")}
            </select>
            <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
          `,i.appendChild(n);const e=new Date;i.querySelector("#select-year").value=e.getFullYear(),i.querySelector("#select-month").value=("0"+(e.getMonth()+1)).slice(-2),i.querySelector("#dashboard-reload").addEventListener("click",()=>{var m;const d=i.querySelector("#select-year").value,s=i.querySelector("#select-month").value,b=`${d}-${s}`;if((m=i.querySelector("button.active"))==null?void 0:m.dataset.tab){const y=document.getElementById("tab-content");y.innerHTML="",Promise.resolve().then(()=>x).then(w=>{w.buildEmployeeTab(y,b)})}})}})};kintone.events.on("app.record.index.show",t=>(Number(t.appId)!==191||document.getElementById("custom-tab-buttons")||document.getElementById("tab-dashboard")||p(),t))},document.head.appendChild(c)}()})();
