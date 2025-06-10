(function(){"use strict";console.log("📦 bundle.js updated: v1.3.15 - 2025/06/10"),window.__BUNDLE_VERSION__="v1.3.15 - 2025/06/10",function(){const h=document.createElement("script");h.src="https://cdn.jsdelivr.net/npm/chart.js",h.onload=y,document.head.appendChild(h);function y(){const s=new Date,f=s.getFullYear(),E=s.getMonth()+1,C=a=>a.toLocaleString(),m=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}],w=a=>{const o=document.createElement("div");o.style.width="100%",o.style.overflowX="auto",o.style.marginTop="6px";const n=document.createElement("table");n.style.width="100%",n.style.borderCollapse="collapse";const i=["担当者名","売上予算","売上金額","加工高予算","加工高","加工高率","加工高達成率"],l=document.createElement("thead"),t=document.createElement("tr");i.forEach(p=>{const r=document.createElement("th");r.innerText=p,r.style.border="1px solid #ccc",r.style.textAlign="center",r.style.padding="6px",r.style.backgroundColor=["加工高予算","加工高","加工高率","加工高達成率"].includes(p)?"#ffcc66":"#3399ff",r.style.color=["加工高予算","加工高","加工高率","加工高達成率"].includes(p)?"#000":"#fff",t.appendChild(r)}),l.appendChild(t),n.appendChild(l);const c=document.createElement("tbody");return a.forEach((p,r)=>{const e=document.createElement("tr"),u=r%2===1;i.forEach(d=>{const b=document.createElement("td"),g=p[d],B=typeof g=="number"?C(g):g;b.innerText=B,b.style.border="1px solid #ccc",b.style.textAlign="center",b.style.padding="6px",b.style.backgroundColor=["加工高予算","加工高","加工高率","加工高達成率"].includes(d)?u?"#ffe0b3":"#fff":u?"#e6f3ff":"#fff",e.appendChild(b)}),c.appendChild(e)}),n.appendChild(c),o.appendChild(n),o},k=(a,o)=>{const n=document.createElement("div");n.className="ym-select",n.style.backgroundColor=o,n.style.padding="6px",n.style.marginBottom="8px";let i="",l="";for(let t=0;t<5;t++){const c=2024+t;i+=`<option value="${c}"${c===f?" selected":""}>${c}年</option>`}for(let t=1;t<=12;t++)l+=`<option value="${t}"${t===E?" selected":""}>${t}月</option>`;return n.innerHTML=`
        <label style="margin-right:8px;">表示年月：</label>
        <select id="year-select-${a}">${i}</select>
        <select id="month-select-${a}">${l}</select>
        <button id="refresh-btn-${a}" style="margin-left:8px;">再表示</button>
      `,n},$={staff:"#e0f0ff",dummy1:"#e0f9e6",dummy2:"#f9e0ed",month:"#ffe8d9"},L=()=>{const a=kintone.app.getHeaderSpaceElement(),o=document.createElement("div");o.id="custom-tab-wrap",o.innerHTML=`
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
      `,a.appendChild(o);const n=o.querySelectorAll(".tab-buttons button"),i=o.querySelectorAll(".tab-content");n.forEach(l=>{l.addEventListener("click",()=>{const t=l.dataset.tab;n.forEach(e=>e.classList.remove("active")),i.forEach(e=>e.classList.remove("active")),l.classList.add("active");const c=document.getElementById(`tab-${t}`);c.classList.add("active"),c.innerHTML="";const p=k(t,$[t]);if(c.appendChild(p),t==="staff"){const e=document.createElement("div");e.className="chart-wrapper",e.innerHTML=`
              <div>
                <h4 style="text-align:center;margin:4px 0;">売上グラフ</h4>
                <canvas id="sales-chart" width="400" height="260"></canvas>
              </div>
              <div>
                <h4 style="text-align:center;margin:4px 0;">粗利グラフ</h4>
                <canvas id="profit-chart" width="400" height="260"></canvas>
              </div>
            `,c.appendChild(e),c.appendChild(w(m));const u=m.map(d=>d.担当者名);new Chart(document.getElementById("sales-chart").getContext("2d"),{type:"bar",data:{labels:u,datasets:[{label:"売上予算",data:m.map(d=>d.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:m.map(d=>d.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},plugins:{legend:{position:"top"}},animation:!1}}),new Chart(document.getElementById("profit-chart").getContext("2d"),{type:"bar",data:{labels:u,datasets:[{label:"加工高予算",data:m.map(d=>d.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:m.map(d=>d.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},plugins:{legend:{position:"top"}},animation:!1}})}if(document.getElementById(`refresh-btn-${t}`).addEventListener("click",()=>{const e=document.getElementById(`year-select-${t}`).value,u=document.getElementById(`month-select-${t}`).value;alert(`${e}年 ${u}月 のデータを表示（※ダミー）`)}),!document.getElementById("custom-hide-kintone-list")){const e=document.createElement("style");e.id="custom-hide-kintone-list",e.innerHTML=`
              .gaia-argoui-app-index-table,
              .gaia-argoui-app-index-list,
              .gaia-argoui-app-index-pane,
              .gaia-argoui-app-index-content,
              .gaia-argoui-app-index-no-record,
              .recordlist-gaia,
              .gaia-argoui-app-index-pager {
                display: none !important;
              }
            `,document.head.appendChild(e)}})})};kintone.events.on("app.record.index.show",()=>{document.getElementById("custom-tab-wrap")||L(),document.querySelectorAll(".tab-content").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".tab-buttons button").forEach(a=>a.classList.remove("active"))})}const v=()=>{const s=kintone.app.getHeaderSpaceElement();for(;s.firstChild;)s.removeChild(s.firstChild)},x=191;kintone.events.on("app.record.index.show",async s=>{if(Number(s.appId)!==x||document.getElementById("tab-dashboard"))return s;await loadChartJs(),v();const f=document.createElement("div");return f.id="tab-dashboard",kintone.app.getHeaderSpaceElement().appendChild(f),initTabs(f),s})}()})();
