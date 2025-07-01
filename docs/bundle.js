(function(){"use strict";const b=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}];function h(a,c){const o=document.createElement("div");o.innerHTML=`<h3>${c} 担当者別ダミー表示</h3>`,a.appendChild(o);const d=document.createElement("div");d.style.display="flex",d.style.justifyContent="center",d.style.gap="32px",d.style.flexWrap="wrap",a.appendChild(d);const s=document.createElement("canvas");s.width=400,s.height=260,d.appendChild(s);const t=document.createElement("canvas");t.width=400,t.height=260,d.appendChild(t);const l=b.map(n=>n.担当者名);new Chart(s.getContext("2d"),{type:"bar",data:{labels:l,datasets:[{label:"売上予算",data:b.map(n=>n.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:b.map(n=>n.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}}),new Chart(t.getContext("2d"),{type:"bar",data:{labels:l,datasets:[{label:"加工高予算",data:b.map(n=>n.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:b.map(n=>n.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{beginAtZero:!0}}}});const e=document.createElement("table");e.style.borderCollapse="collapse",e.style.marginTop="32px",e.style.width="100%",e.style.fontSize="14px";const u=`
    <tr>
      <th style="border:1px solid #ccc; padding:6px; background-color:#007BFF; color:white;">担当者</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#66ccff;">売上予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#3399ff; color:white;">売上金額</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ffcc66;">加工高予算</th>
      <th style="border:1px solid #ccc; padding:6px; background-color:#ff9966; color:white;">加工高</th>
    </tr>
  `,p=b.map((n,r)=>{const i=r%2===0?"#e6f7ff":"#ffffff",f=r%2===0?"#cce5ff":"#ffffff",g=r%2===0?"#fff5cc":"#ffffff",m=r%2===0?"#ffe0cc":"#ffffff";return`
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">${n.担当者名}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${i};">${n.売上予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${f};">${n.売上金額.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${g};">${n.加工高予算.toLocaleString()}</td>
        <td style="border:1px solid #ccc; padding:6px; text-align:right; background-color:${m};">${n.加工高.toLocaleString()}</td>
      </tr>
    `}).join("");e.innerHTML=`<thead>${u}</thead><tbody>${p}</tbody>`,a.appendChild(e)}function y(a,c){const o=document.createElement("p");o.innerText=`得意先別（${c}）：今後対応予定です。`,a.appendChild(o)}function x(a,c){const o=document.createElement("p");o.innerText=`品名別（${c}）：今後対応予定です。`,a.appendChild(o)}function C(a,c){const o=document.createElement("p");o.innerText=`年月別（${c}）：今後対応予定です。`,a.appendChild(o)}function E(a){const c=document.createElement("div");c.className="tab-menu",c.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
  `,a.appendChild(c);const o=document.createElement("div");o.id="tab-content",a.appendChild(o);const d={employee:h,customer:y,product:x,month:C},s=t=>{o.innerHTML="",c.querySelectorAll("button[data-tab]").forEach(p=>{p.classList.toggle("active",p.dataset.tab===t)});const l=document.getElementById("select-year").value,e=document.getElementById("select-month").value,u=`${l}-${e}`;d[t](o,u)};c.addEventListener("click",t=>{const l=t.target.dataset.tab;l&&d[l]&&s(l)})}function w(a,c,o){const d={employee:h,customer:y,product:x,month:C};a.innerHTML="",d[c](a,o)}const k=Object.freeze(Object.defineProperty({__proto__:null,initTabs:E,rebuildTab:w},Symbol.toStringTag,{value:"Module"}));console.log("📦 bundle.js updated: v1.3.19 - 2025/07/01"),window.__BUNDLE_VERSION__="v1.3.19 - 2025/07/01",function(){const a=document.createElement("script");a.src="https://cdn.jsdelivr.net/npm/chart.js",a.onload=()=>{const o=()=>{const t=kintone.app.getHeaderSpaceElement();for(;t.firstChild;)t.removeChild(t.firstChild)},d=()=>{if(document.getElementById("custom-hide-kintone-list"))return;const t=document.createElement("style");t.id="custom-hide-kintone-list",t.innerHTML=`
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `,document.head.appendChild(t)},s=()=>{const t=kintone.app.getHeaderSpaceElement(),l=document.createElement("div");if(l.id="custom-tab-buttons",l.innerHTML=`
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
      `,t.appendChild(l),!document.getElementById("selector-wrap")){const e=document.createElement("div");e.id="selector-wrap",e.style.backgroundColor="#e6f2ff",e.style.padding="8px",e.style.borderRadius="4px",e.style.marginTop="8px",e.innerHTML=`
          表示年月：
          <select id="select-year"></select>
          <select id="select-month"></select>
          <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
        `,t.appendChild(e);const u=e.querySelector("#select-year"),p=e.querySelector("#select-month"),n=new Date;[n.getFullYear(),n.getFullYear()-1,n.getFullYear()-2].forEach(r=>{const i=document.createElement("option");i.value=r,i.textContent=`${r}年`,u.appendChild(i)});for(let r=1;r<=12;r++){const i=document.createElement("option");i.value=("0"+r).slice(-2),i.textContent=`${r}月`,p.appendChild(i)}u.value=n.getFullYear(),p.value=("0"+(n.getMonth()+1)).slice(-2),e.querySelector("#dashboard-reload").addEventListener("click",()=>{var m;const r=u.value,i=p.value,f=`${r}-${i}`,g=(m=document.querySelector(".tab-menu button.active"))==null?void 0:m.dataset.tab;if(g){const v=document.getElementById("tab-content");v.innerHTML="",Promise.resolve().then(()=>k).then(T=>{T.rebuildTab(v,g,f)})}})}document.getElementById("show-tabs-btn").addEventListener("click",()=>{if(document.getElementById("tab-dashboard"))return;d(),o();const e=document.createElement("div");e.id="tab-dashboard",t.appendChild(e),E(e)})};kintone.events.on("app.record.index.show",t=>(Number(t.appId)!==191||document.getElementById("custom-tab-buttons")||s(),t))},document.head.appendChild(a)}()})();
