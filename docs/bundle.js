(function(){"use strict";const g=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function x(c,r){const o=document.createElement("div");o.innerHTML=`<h3>${r} 担当者別ダミー表示</h3>`,c.appendChild(o);const s=document.createElement("div");s.style.display="flex",s.style.justifyContent="center",s.style.gap="32px",s.style.flexWrap="wrap",c.appendChild(s);const u=document.createElement("canvas");u.width=400,u.height=260,s.appendChild(u);const e=document.createElement("canvas");e.width=400,e.height=260,s.appendChild(e);const l=g.map(t=>t.担当者名);new Chart(u.getContext("2d"),{type:"bar",data:{labels:l,datasets:[{label:"売上予算",data:g.map(t=>t.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:g.map(t=>t.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}}),new Chart(e.getContext("2d"),{type:"bar",data:{labels:l,datasets:[{label:"加工高予算",data:g.map(t=>t.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:g.map(t=>t.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}});const n=document.createElement("table");n.style.borderCollapse="collapse",n.style.marginTop="32px",n.style.width="100%",n.style.fontSize="14px";const i=`
    <tr>
      <th style="border:1px solid #ccc; padding:6px; background-color:#007BFF; color:white;">担当者</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#66ccff;">売上予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#3399ff; color:white;">売上金額</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ffcc66;">加工高予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ff9966; color:white;">加工高</th>
    </tr>
  `,a=g.map((t,d)=>{const p=d%2===0?"#e6f7ff":"#ffffff",h=d%2===0?"#cce5ff":"#ffffff",b=d%2===0?"#fff5cc":"#ffffff",m=d%2===0?"#ffe0cc":"#ffffff";return`
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">${t.担当者名}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${p};">${t.売上予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${h};">${t.売上金額.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${b};">${t.加工高予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${m};">${t.加工高.toLocaleString()}</td>
      </tr>
    `}).join("");n.innerHTML=`<thead>${i}</thead><tbody>${a}</tbody>`,c.appendChild(n)}function C(c,r){const o=document.createElement("p");o.innerText=`得意先別（${r}）：今後対応予定です。`,c.appendChild(o)}function E(c,r){const o=document.createElement("p");o.innerText=`品名別（${r}）：今後対応予定です。`,c.appendChild(o)}function v(c,r){const o=document.createElement("p");o.innerText=`年月別（${r}）：今後対応予定です。`,c.appendChild(o)}function f(c){const r=document.createElement("div");r.className="tab-menu",r.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
  `;const o=document.createElement("div");if(o.id="tab-content",c.appendChild(r),c.appendChild(o),!document.getElementById("dashboard-selector-wrap")){const e=document.createElement("div");e.id="dashboard-selector-wrap",e.style.backgroundColor="#e6f2ff",e.style.padding="8px",e.style.borderRadius="4px",e.style.marginTop="8px",e.innerHTML=`
      表示年月：
      <select id="select-year"></select>
      <select id="select-month"></select>
      <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
    `,r.appendChild(e);const l=e.querySelector("#select-year"),n=e.querySelector("#select-month"),i=new Date;[i.getFullYear(),i.getFullYear()-1,i.getFullYear()-2].forEach(a=>{const t=document.createElement("option");t.value=a,t.textContent=`${a}年`,l.appendChild(t)});for(let a=1;a<=12;a++){const t=("0"+a).slice(-2),d=document.createElement("option");d.value=t,d.textContent=`${a}月`,n.appendChild(d)}l.value=i.getFullYear(),n.value=("0"+(i.getMonth()+1)).slice(-2),e.querySelector("#dashboard-reload").addEventListener("click",()=>{const a=r.querySelector("button.active").dataset.tab;a&&u(a)})}const s={employee:x,customer:C,product:E,month:v},u=e=>{o.innerHTML="";const l="custom-hide-kintone-list";if(!document.getElementById(l)){const t=document.createElement("style");t.id=l,t.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(t)}r.querySelectorAll("button[data-tab]").forEach(t=>{t.classList.toggle("active",t.dataset.tab===e)});const n=document.getElementById("select-year").value,i=document.getElementById("select-month").value,a=`${n}-${i}`;s[e](o,a)};r.addEventListener("click",e=>{const l=e.target.dataset.tab;l&&s[l]&&u(l)})}const w=Object.freeze(Object.defineProperty({__proto__:null,initTabs:f},Symbol.toStringTag,{value:"Module"}));console.log("📦 bundle.js updated: v1.3.19 - 2025/07/01"),window.__BUNDLE_VERSION__="v1.3.19 - 2025/07/01",function(){const c=document.createElement("script");c.src="https://cdn.jsdelivr.net/npm/chart.js",c.onload=()=>{const o=()=>{const e=kintone.app.getHeaderSpaceElement();for(;e.firstChild;)e.removeChild(e.firstChild)},s=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const e=document.createElement("style");e.id="custom-hide-kintone-list",e.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(e)},u=()=>{const e=kintone.app.getHeaderSpaceElement(),l=document.createElement("div");if(l.id="custom-tab-buttons",l.innerHTML=`
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
      `,e.appendChild(l),!document.getElementById("selector-wrap")){const n=document.createElement("div");n.id="selector-wrap",n.style.backgroundColor="#e6f2ff",n.style.padding="8px",n.style.borderRadius="4px",n.style.marginTop="8px",n.innerHTML=`
          表示年月：
          <select id="select-year"></select>
          <select id="select-month"></select>
          <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
        `,e.appendChild(n);const i=n.querySelector("#select-year"),a=n.querySelector("#select-month"),t=new Date;[t.getFullYear(),t.getFullYear()-1,t.getFullYear()-2].forEach(d=>{const p=document.createElement("option");p.value=d,p.textContent=`${d}年`,i.appendChild(p)});for(let d=1;d<=12;d++){const p=document.createElement("option");p.value=("0"+d).slice(-2),p.textContent=`${d}月`,a.appendChild(p)}i.value=t.getFullYear(),a.value=("0"+(t.getMonth()+1)).slice(-2),n.querySelector("#dashboard-reload").addEventListener("click",()=>{var m;const d=i.value,p=a.value,h=`${d}-${p}`,b=(m=document.querySelector(".tab-menu button.active"))==null?void 0:m.dataset.tab;if(b){const y=document.getElementById("tab-content");y.innerHTML="",Promise.resolve().then(()=>w).then(k=>{k.rebuildTab(y,b,h)})}})}document.getElementById("show-tabs-btn").addEventListener("click",()=>{if(document.getElementById("tab-dashboard"))return;s(),o();const n=document.createElement("div");n.id="tab-dashboard",e.appendChild(n),f(n)})};kintone.events.on("app.record.index.show",e=>(Number(e.appId)!==191||document.getElementById("custom-tab-buttons")||u(),e))},document.head.appendChild(c)}()})();
