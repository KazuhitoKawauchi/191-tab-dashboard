(function(){"use strict";const u=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function h(d,c){const o=document.createElement("div");o.innerHTML=`<h3>${c} 担当者別ダミー表示</h3>`,d.appendChild(o);const s=document.createElement("div");s.style.display="flex",s.style.justifyContent="center",s.style.gap="32px",s.style.flexWrap="wrap",d.appendChild(s);const p=document.createElement("canvas");p.width=400,p.height=260,s.appendChild(p);const e=document.createElement("canvas");e.width=400,e.height=260,s.appendChild(e);const r=u.map(t=>t.担当者名);new Chart(p.getContext("2d"),{type:"bar",data:{labels:r,datasets:[{label:"売上予算",data:u.map(t=>t.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:u.map(t=>t.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}}),new Chart(e.getContext("2d"),{type:"bar",data:{labels:r,datasets:[{label:"加工高予算",data:u.map(t=>t.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:u.map(t=>t.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}});const l=document.createElement("table");l.style.borderCollapse="collapse",l.style.marginTop="32px",l.style.width="100%",l.style.fontSize="14px";const a=`
    <tr>
      <th style="border:1px solid #ccc; padding:6px; background-color:#007BFF; color:white;">担当者</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#66ccff;">売上予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#3399ff; color:white;">売上金額</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ffcc66;">加工高予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ff9966; color:white;">加工高</th>
    </tr>
  `,n=u.map((t,i)=>{const m=i%2===0?"#e6f7ff":"#ffffff",g=i%2===0?"#cce5ff":"#ffffff",f=i%2===0?"#fff5cc":"#ffffff",b=i%2===0?"#ffe0cc":"#ffffff";return`
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">${t.担当者名}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${m};">${t.売上予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${g};">${t.売上金額.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${f};">${t.加工高予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${b};">${t.加工高.toLocaleString()}</td>
      </tr>
    `}).join("");l.innerHTML=`<thead>${a}</thead><tbody>${n}</tbody>`,d.appendChild(l)}const x=Object.freeze(Object.defineProperty({__proto__:null,buildEmployeeTab:h},Symbol.toStringTag,{value:"Module"}));function E(d,c){const o=document.createElement("p");o.innerText=`得意先別（${c}）：今後対応予定です。`,d.appendChild(o)}function v(d,c){const o=document.createElement("p");o.innerText=`品名別（${c}）：今後対応予定です。`,d.appendChild(o)}function C(d,c){const o=document.createElement("p");o.innerText=`年月別（${c}）：今後対応予定です。`,d.appendChild(o)}function k(d){const c=document.createElement("div");c.className="tab-menu",c.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
  `;const o=document.createElement("div");if(o.id="tab-content",d.appendChild(c),d.appendChild(o),!document.getElementById("dashboard-selector-wrap")){const e=document.createElement("div");e.id="dashboard-selector-wrap",e.style.backgroundColor="#e6f2ff",e.style.padding="8px",e.style.borderRadius="4px",e.style.marginTop="8px",e.innerHTML=`
      表示年月：
      <select id="select-year"></select>
      <select id="select-month"></select>
      <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
    `,c.appendChild(e);const r=e.querySelector("#select-year"),l=e.querySelector("#select-month"),a=new Date;[a.getFullYear(),a.getFullYear()-1,a.getFullYear()-2].forEach(n=>{const t=document.createElement("option");t.value=n,t.textContent=`${n}年`,r.appendChild(t)});for(let n=1;n<=12;n++){const t=("0"+n).slice(-2),i=document.createElement("option");i.value=t,i.textContent=`${n}月`,l.appendChild(i)}r.value=a.getFullYear(),l.value=("0"+(a.getMonth()+1)).slice(-2),e.querySelector("#dashboard-reload").addEventListener("click",()=>{const n=c.querySelector("button.active").dataset.tab;n&&p(n)})}const s={employee:h,customer:E,product:v,month:C},p=e=>{o.innerHTML="";const r="custom-hide-kintone-list";if(!document.getElementById(r)){const t=document.createElement("style");t.id=r,t.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(t)}c.querySelectorAll("button[data-tab]").forEach(t=>{t.classList.toggle("active",t.dataset.tab===e)});const l=document.getElementById("select-year").value,a=document.getElementById("select-month").value,n=`${l}-${a}`;s[e](o,n)};c.addEventListener("click",e=>{const r=e.target.dataset.tab;r&&s[r]&&p(r)})}console.log("📦 bundle.js updated: v1.3.18 - 2025/06/23"),window.__BUNDLE_VERSION__="v1.3.18 - 2025/06/23",function(){const d=document.createElement("script");d.src="https://cdn.jsdelivr.net/npm/chart.js",d.onload=()=>{const o=()=>{const e=kintone.app.getHeaderSpaceElement();for(;e.firstChild;)e.removeChild(e.firstChild)},s=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const e=document.createElement("style");e.id="custom-hide-kintone-list",e.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(e)},p=()=>{const e=kintone.app.getHeaderSpaceElement(),r=document.createElement("div");r.id="custom-tab-buttons",r.innerHTML=`
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
      `,e.appendChild(r),document.getElementById("show-tabs-btn").addEventListener("click",()=>{s(),o();const l=document.createElement("div");l.id="tab-dashboard",kintone.app.getHeaderSpaceElement().appendChild(l),k(l);const a=document.querySelector(".tab-menu");if(a){const n=document.createElement("div");n.style.backgroundColor="#e6f2ff",n.style.padding="8px",n.style.borderRadius="4px",n.style.marginTop="8px",n.innerHTML=`
            表示年月：
            <select id="select-year">
              ${[2025,2024,2023].map(i=>`<option value="${i}">${i}年</option>`).join("")}
            </select>
            <select id="select-month">
              ${[...Array(12)].map((i,m)=>{const g=m+1;return`<option value="${("0"+g).slice(-2)}">${g}月</option>`}).join("")}
            </select>
            <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
          `,a.appendChild(n);const t=new Date;a.querySelector("#select-year").value=t.getFullYear(),a.querySelector("#select-month").value=("0"+(t.getMonth()+1)).slice(-2),a.querySelector("#dashboard-reload").addEventListener("click",()=>{var b;const i=a.querySelector("#select-year").value,m=a.querySelector("#select-month").value,g=`${i}-${m}`;if((b=a.querySelector("button.active"))==null?void 0:b.dataset.tab){const y=document.getElementById("tab-content");y.innerHTML="",Promise.resolve().then(()=>x).then(w=>{w.buildEmployeeTab(y,g)})}})}})};kintone.events.on("app.record.index.show",e=>(Number(e.appId)!==191||document.getElementById("custom-tab-buttons")||document.getElementById("tab-dashboard")||p(),e))},document.head.appendChild(d)}()})();
