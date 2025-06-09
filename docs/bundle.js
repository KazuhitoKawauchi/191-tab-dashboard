(function(){"use strict";(function(){const h=document.createElement("script");h.src="https://cdn.jsdelivr.net/npm/chart.js",h.onload=y,document.head.appendChild(h);function y(){const s=new Date,f=s.getFullYear(),x=s.getMonth()+1,E=a=>a.toLocaleString(),u=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}],C=a=>{const o=document.createElement("div");o.style.width="100%",o.style.overflowX="auto",o.style.marginTop="6px";const n=document.createElement("table");n.style.width="100%",n.style.borderCollapse="collapse";const l=["担当者名","売上予算","売上金額","加工高予算","加工高","加工高率","加工高達成率"],i=document.createElement("thead"),t=document.createElement("tr");l.forEach(p=>{const r=document.createElement("th");r.innerText=p,r.style.border="1px solid #ccc",r.style.textAlign="center",r.style.padding="6px",r.style.backgroundColor=["加工高予算","加工高","加工高率","加工高達成率"].includes(p)?"#ffcc66":"#3399ff",r.style.color=["加工高予算","加工高","加工高率","加工高達成率"].includes(p)?"#000":"#fff",t.appendChild(r)}),i.appendChild(t),n.appendChild(i);const c=document.createElement("tbody");return a.forEach((p,r)=>{const e=document.createElement("tr"),m=r%2===1;l.forEach(d=>{const b=document.createElement("td"),g=p[d],L=typeof g=="number"?E(g):g;b.innerText=L,b.style.border="1px solid #ccc",b.style.textAlign="center",b.style.padding="6px",b.style.backgroundColor=["加工高予算","加工高","加工高率","加工高達成率"].includes(d)?m?"#ffe0b3":"#fff":m?"#e6f3ff":"#fff",e.appendChild(b)}),c.appendChild(e)}),n.appendChild(c),o.appendChild(n),o},w=(a,o)=>{const n=document.createElement("div");n.className="ym-select",n.style.backgroundColor=o,n.style.padding="6px",n.style.marginBottom="8px";let l="",i="";for(let t=0;t<5;t++){const c=2024+t;l+=`<option value="${c}"${c===f?" selected":""}>${c}年</option>`}for(let t=1;t<=12;t++)i+=`<option value="${t}"${t===x?" selected":""}>${t}月</option>`;return n.innerHTML=`
        <label style="margin-right:8px;">表示年月：</label>
        <select id="year-select-${a}">${l}</select>
        <select id="month-select-${a}">${i}</select>
        <button id="refresh-btn-${a}" style="margin-left:8px;">再表示</button>
      `,n},k={staff:"#e0f0ff",dummy1:"#e0f9e6",dummy2:"#f9e0ed",month:"#ffe8d9"},$=()=>{const a=kintone.app.getHeaderSpaceElement(),o=document.createElement("div");o.id="custom-tab-wrap",o.innerHTML=`
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
      `,a.appendChild(o);const n=o.querySelectorAll(".tab-buttons button"),l=o.querySelectorAll(".tab-content");n.forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.tab;n.forEach(e=>e.classList.remove("active")),l.forEach(e=>e.classList.remove("active")),i.classList.add("active");const c=document.getElementById(`tab-${t}`);c.classList.add("active"),c.innerHTML="";const p=w(t,k[t]);if(c.appendChild(p),t==="staff"){const e=document.createElement("div");e.className="chart-wrapper",e.innerHTML=`
              <div>
                <h4 style="text-align:center;margin:4px 0;">売上グラフ</h4>
                <canvas id="sales-chart" width="400" height="260"></canvas>
              </div>
              <div>
                <h4 style="text-align:center;margin:4px 0;">粗利グラフ</h4>
                <canvas id="profit-chart" width="400" height="260"></canvas>
              </div>
            `,c.appendChild(e),c.appendChild(C(u));const m=u.map(d=>d.担当者名);new Chart(document.getElementById("sales-chart").getContext("2d"),{type:"bar",data:{labels:m,datasets:[{label:"売上予算",data:u.map(d=>d.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:u.map(d=>d.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},plugins:{legend:{position:"top"}},animation:!1}}),new Chart(document.getElementById("profit-chart").getContext("2d"),{type:"bar",data:{labels:m,datasets:[{label:"加工高予算",data:u.map(d=>d.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:u.map(d=>d.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},plugins:{legend:{position:"top"}},animation:!1}})}if(document.getElementById(`refresh-btn-${t}`).addEventListener("click",()=>{const e=document.getElementById(`year-select-${t}`).value,m=document.getElementById(`month-select-${t}`).value;alert(`${e}年 ${m}月 のデータを表示（※ダミー）`)}),!document.getElementById("custom-hide-kintone-list")){const e=document.createElement("style");e.id="custom-hide-kintone-list",e.innerHTML=`
              .gaia-argoui-app-index-table,
              .gaia-argoui-app-index-list,
              .gaia-argoui-app-index-pane,
              .gaia-argoui-app-index-content,
              .gaia-argoui-app-index-no-record,
              .recordlist-gaia,
              .gaia-argoui-app-index-pager {
                display: none !important;
              }
            `,document.head.appendChild(e)}})})};kintone.events.on("app.record.index.show",()=>{document.getElementById("custom-tab-wrap")||$(),document.querySelectorAll(".tab-content").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".tab-buttons button").forEach(a=>a.classList.remove("active"))})}const v=()=>{const s=kintone.app.getHeaderSpaceElement();for(;s.firstChild;)s.removeChild(s.firstChild)};kintone.events.on("app.record.index.show",async s=>{if(Number(s.appId)!==APP_ID||document.getElementById("tab-dashboard"))return s;await loadChartJs(),v();const f=document.createElement("div");return f.id="tab-dashboard",kintone.app.getHeaderSpaceElement().appendChild(f),initTabs(f),s})})()})();
