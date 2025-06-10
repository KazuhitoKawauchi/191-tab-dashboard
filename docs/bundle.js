(function(){"use strict";async function L(t,e){typeof t=="string"&&(t=document.getElementById(t)),t.innerHTML=`
    <canvas id="employee-chart" style="max-width: 600px;"></canvas>
    <table id="employee-table" class="dashboard-table">
      <thead><tr><th>担当者</th><th>売上</th><th>粗利</th></tr></thead>
      <tbody></tbody>
    </table>
  `;const o=await $(e),l=B(o);I(l),M(l)}async function $(t){const e=t?`年月 = "${t}"`:"",o={app:kintone.app.getId(),query:e};return(await kintone.api(kintone.api.url("/k/v1/records",!0),"GET",o)).records}function B(t){const e={};t.forEach(d=>{const s=d.担当者.value,c=Number(d.売上.value)||0,x=Number(d.粗利.value)||0;e[s]||(e[s]={sales:0,profit:0}),e[s].sales+=c,e[s].profit+=x});const o=[],l=[],a=[],f=[];return Object.keys(e).forEach(d=>{o.push(d),l.push(e[d].sales),a.push(e[d].profit),f.push({name:d,sales:e[d].sales,profit:e[d].profit})}),{labels:o,salesData:l,profitData:a,tableRows:f}}function I({labels:t,salesData:e,profitData:o}){const l=document.getElementById("employee-chart").getContext("2d");new Chart(l,{type:"bar",data:{labels:t,datasets:[{label:"売上",data:e,backgroundColor:"rgba(54, 162, 235, 0.5)"},{label:"粗利",data:o,backgroundColor:"rgba(255, 99, 132, 0.5)"}]},options:{responsive:!0}})}function M({tableRows:t}){const e=document.querySelector("#employee-table tbody");t.forEach((o,l)=>{const a=document.createElement("tr");l%2===0&&(a.style.backgroundColor="#f2f2f2"),a.innerHTML=`<td>${o.name}</td><td>${o.sales}</td><td>${o.profit}</td>`,e.appendChild(a)})}function S(t){typeof t=="string"&&(t=document.getElementById(t)),t.innerHTML="<p>TODO: 得意先別タブを実装</p>"}function H(t){typeof t=="string"&&(t=document.getElementById(t)),t.innerHTML="<p>TODO: 品名別タブを実装</p>"}function A(t){typeof t=="string"&&(t=document.getElementById(t)),t.innerHTML="<p>TODO: 年月別タブを実装</p>"}function D(t){const e=document.createElement("div");e.className="tab-menu",e.innerHTML=`
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
    <select id="dashboard-select"></select>
    <button id="dashboard-reload">再表示</button>
  `;const o=document.createElement("div");o.id="tab-content",t.appendChild(e),t.appendChild(o);const l=e.querySelector("#dashboard-select"),a=new Date;for(let s=0;s<12;s++){const c=new Date(a.getFullYear(),a.getMonth()-s,1),x=c.getFullYear(),w=("0"+(c.getMonth()+1)).slice(-2),k=document.createElement("option");k.value=`${x}-${w}`,k.textContent=`${x}-${w}`,l.appendChild(k)}const f={employee:L,customer:S,product:H,month:A},d=s=>{o.innerHTML="",e.querySelectorAll("button[data-tab]").forEach(c=>{c.classList.toggle("active",c.dataset.tab===s)}),f[s](o,l.value)};e.addEventListener("click",s=>{const c=s.target.dataset.tab;c&&f[c]&&d(c)}),e.querySelector("#dashboard-reload").addEventListener("click",()=>{const s=e.querySelector("button.active").dataset.tab;d(s)}),d("employee")}console.log("📦 bundle.js updated: v1.3.15 - 2025/06/10"),window.__BUNDLE_VERSION__="v1.3.15 - 2025/06/10",function(){const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/chart.js",t.onload=e,document.head.appendChild(t);function e(){const a=new Date,f=a.getFullYear(),d=a.getMonth()+1,s=p=>p.toLocaleString(),c=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}],x=p=>{const u=document.createElement("div");u.style.width="100%",u.style.overflowX="auto",u.style.marginTop="6px";const i=document.createElement("table");i.style.width="100%",i.style.borderCollapse="collapse";const y=["担当者名","売上予算","売上金額","加工高予算","加工高","加工高率","加工高達成率"],g=document.createElement("thead"),n=document.createElement("tr");y.forEach(v=>{const h=document.createElement("th");h.innerText=v,h.style.border="1px solid #ccc",h.style.textAlign="center",h.style.padding="6px",h.style.backgroundColor=["加工高予算","加工高","加工高率","加工高達成率"].includes(v)?"#ffcc66":"#3399ff",h.style.color=["加工高予算","加工高","加工高率","加工高達成率"].includes(v)?"#000":"#fff",n.appendChild(h)}),g.appendChild(n),i.appendChild(g);const b=document.createElement("tbody");return p.forEach((v,h)=>{const r=document.createElement("tr"),E=h%2===1;y.forEach(m=>{const C=document.createElement("td"),T=v[m],q=typeof T=="number"?s(T):T;C.innerText=q,C.style.border="1px solid #ccc",C.style.textAlign="center",C.style.padding="6px",C.style.backgroundColor=["加工高予算","加工高","加工高率","加工高達成率"].includes(m)?E?"#ffe0b3":"#fff":E?"#e6f3ff":"#fff",r.appendChild(C)}),b.appendChild(r)}),i.appendChild(b),u.appendChild(i),u},w=(p,u)=>{const i=document.createElement("div");i.className="ym-select",i.style.backgroundColor=u,i.style.padding="6px",i.style.marginBottom="8px";let y="",g="";for(let n=0;n<5;n++){const b=2024+n;y+=`<option value="${b}"${b===f?" selected":""}>${b}年</option>`}for(let n=1;n<=12;n++)g+=`<option value="${n}"${n===d?" selected":""}>${n}月</option>`;return i.innerHTML=`
        <label style="margin-right:8px;">表示年月：</label>
        <select id="year-select-${p}">${y}</select>
        <select id="month-select-${p}">${g}</select>
        <button id="refresh-btn-${p}" style="margin-left:8px;">再表示</button>
      `,i},k={staff:"#e0f0ff",dummy1:"#e0f9e6",dummy2:"#f9e0ed",month:"#ffe8d9"},O=()=>{const p=kintone.app.getHeaderSpaceElement(),u=document.createElement("div");u.id="custom-tab-wrap",u.innerHTML=`
        <style>
          .tab-buttons { margin-left: 8px; margin-top: 4px; }
          .tab-buttons button {
            margin-right: 6px; padding: 6px 12px; border-radius: 4px; border: none;
            color: #fff; font-weight: bold;
          }
          .tab-buttons button[data-tab="staff"] { background-color: #3399ff; }
          .tab-buttons button[data-tab="dummy1"] { background-color: #33aa66; }
          .tab-buttons button[data-tab="dummy2"] { background-color: #cc6699; }
          .tab-buttons button[data-tab="month"] { background-color: #ff6600; }
          .tab-content { display: none; margin-top: 10px; }
          .tab-content.active { display: block; }
          .chart-wrapper { display: flex; justify-content: center; gap: 40px; margin-top: 12px; }
          canvas { background: #fff; border: 1px solid #ccc; }
        </style>
        <div class="tab-buttons">
          <button data-tab="staff">担当者別</button>
          <button data-tab="dummy1">得意先別</button>
          <button data-tab="dummy2">品名別</button>
          <button data-tab="month">年月別</button>
        </div>
        <div id="tab-staff" class="tab-content"></div>
        <div id="tab-dummy1" class="tab-content"><p>得意先別：今後対応</p></div>
        <div id="tab-dummy2" class="tab-content"><p>品名別：今後対応</p></div>
        <div id="tab-month" class="tab-content"><p>年月別：今後対応</p></div>
      `,p.appendChild(u);const i=u.querySelectorAll(".tab-buttons button"),y=u.querySelectorAll(".tab-content");i.forEach(g=>{g.addEventListener("click",()=>{const n=g.dataset.tab;i.forEach(r=>r.classList.remove("active")),y.forEach(r=>r.classList.remove("active")),g.classList.add("active");const b=document.getElementById(`tab-${n}`);b.classList.add("active"),b.innerHTML="";const v=w(n,k[n]);if(b.appendChild(v),n==="staff"){const r=document.createElement("div");r.className="chart-wrapper",r.innerHTML=`
              <div>
                <h4 style="text-align:center;margin:4px 0;">売上グラフ</h4>
                <canvas id="sales-chart" width="400" height="260"></canvas>
              </div>
              <div>
                <h4 style="text-align:center;margin:4px 0;">粗利グラフ</h4>
                <canvas id="profit-chart" width="400" height="260"></canvas>
              </div>
            `,b.appendChild(r),b.appendChild(x(c));const E=c.map(m=>m.担当者名);new Chart(document.getElementById("sales-chart").getContext("2d"),{type:"bar",data:{labels:E,datasets:[{label:"売上予算",data:c.map(m=>m.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:c.map(m=>m.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},plugins:{legend:{position:"top"}},animation:!1}}),new Chart(document.getElementById("profit-chart").getContext("2d"),{type:"bar",data:{labels:E,datasets:[{label:"加工高予算",data:c.map(m=>m.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:c.map(m=>m.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},plugins:{legend:{position:"top"}},animation:!1}})}if(document.getElementById(`refresh-btn-${n}`).addEventListener("click",()=>{const r=document.getElementById(`year-select-${n}`).value,E=document.getElementById(`month-select-${n}`).value;alert(`${r}年 ${E}月 のデータを表示（※ダミー）`)}),!document.getElementById("custom-hide-kintone-list")){const r=document.createElement("style");r.id="custom-hide-kintone-list",r.innerHTML=`
              .gaia-argoui-app-index-table,
              .gaia-argoui-app-index-list,
              .gaia-argoui-app-index-pane,
              .gaia-argoui-app-index-content,
              .gaia-argoui-app-index-no-record,
              .recordlist-gaia,
              .gaia-argoui-app-index-pager {
                display: none !important;
              }
            `,document.head.appendChild(r)}})})};kintone.events.on("app.record.index.show",()=>{document.getElementById("custom-tab-wrap")||O(),document.querySelectorAll(".tab-content").forEach(p=>p.classList.remove("active")),document.querySelectorAll(".tab-buttons button").forEach(p=>p.classList.remove("active"))})}const o=()=>{const a=kintone.app.getHeaderSpaceElement();for(;a.firstChild;)a.removeChild(a.firstChild)},l=191;kintone.events.on("app.record.index.show",async a=>{if(Number(a.appId)!==l||document.getElementById("tab-dashboard"))return a;o();const f=document.createElement("div");return f.id="tab-dashboard",kintone.app.getHeaderSpaceElement().appendChild(f),D(f),a})}()})();
