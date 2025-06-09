(function(){"use strict";(function(){const b=document.createElement("script");b.src="https://cdn.jsdelivr.net/npm/chart.js",b.onload=g,document.head.appendChild(b);function g(){const h=new Date,y=h.getFullYear(),v=h.getMonth()+1,x=n=>n.toLocaleString(),u=[{担当者名:"佐藤",売上金額:95e4,売上予算:1e6,加工高:5e5,加工高予算:5e5,加工高率:"52.6%",加工高達成率:"100%"},{担当者名:"鈴木",売上金額:64e4,売上予算:8e5,加工高:34e4,加工高予算:4e5,加工高率:"53.1%",加工高達成率:"85%"},{担当者名:"田中",売上金額:115e4,売上予算:12e5,加工高:57e4,加工高予算:6e5,加工高率:"49.6%",加工高達成率:"95%"}],E=n=>{const o=document.createElement("div");o.style.width="100%",o.style.overflowX="auto",o.style.marginTop="6px";const a=document.createElement("table");a.style.width="100%",a.style.borderCollapse="collapse";const l=["担当者名","売上予算","売上金額","加工高予算","加工高","加工高率","加工高達成率"],r=document.createElement("thead"),t=document.createElement("tr");l.forEach(i=>{const d=document.createElement("th");d.innerText=i,d.style.border="1px solid #ccc",d.style.textAlign="center",d.style.padding="6px",d.style.backgroundColor=["加工高予算","加工高","加工高率","加工高達成率"].includes(i)?"#ffcc66":"#3399ff",d.style.color=["加工高予算","加工高","加工高率","加工高達成率"].includes(i)?"#000":"#fff",t.appendChild(d)}),r.appendChild(t),a.appendChild(r);const c=document.createElement("tbody");return n.forEach((i,d)=>{const e=document.createElement("tr"),p=d%2===1;l.forEach(s=>{const m=document.createElement("td"),f=i[s],k=typeof f=="number"?x(f):f;m.innerText=k,m.style.border="1px solid #ccc",m.style.textAlign="center",m.style.padding="6px",m.style.backgroundColor=["加工高予算","加工高","加工高率","加工高達成率"].includes(s)?p?"#ffe0b3":"#fff":p?"#e6f3ff":"#fff",e.appendChild(m)}),c.appendChild(e)}),a.appendChild(c),o.appendChild(a),o},C=(n,o)=>{const a=document.createElement("div");a.className="ym-select",a.style.backgroundColor=o,a.style.padding="6px",a.style.marginBottom="8px";let l="",r="";for(let t=0;t<5;t++){const c=2024+t;l+=`<option value="${c}"${c===y?" selected":""}>${c}年</option>`}for(let t=1;t<=12;t++)r+=`<option value="${t}"${t===v?" selected":""}>${t}月</option>`;return a.innerHTML=`
        <label style="margin-right:8px;">表示年月：</label>
        <select id="year-select-${n}">${l}</select>
        <select id="month-select-${n}">${r}</select>
        <button id="refresh-btn-${n}" style="margin-left:8px;">再表示</button>
      `,a},w={staff:"#e0f0ff",dummy1:"#e0f9e6",dummy2:"#f9e0ed",month:"#ffe8d9"},$=()=>{const n=kintone.app.getHeaderSpaceElement(),o=document.createElement("div");o.id="custom-tab-wrap",o.innerHTML=`
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
      `,n.appendChild(o);const a=o.querySelectorAll(".tab-buttons button"),l=o.querySelectorAll(".tab-content");a.forEach(r=>{r.addEventListener("click",()=>{const t=r.dataset.tab;a.forEach(e=>e.classList.remove("active")),l.forEach(e=>e.classList.remove("active")),r.classList.add("active");const c=document.getElementById(`tab-${t}`);c.classList.add("active"),c.innerHTML="";const i=C(t,w[t]);if(c.appendChild(i),t==="staff"){const e=document.createElement("div");e.className="chart-wrapper",e.innerHTML=`
              <div>
                <h4 style="text-align:center;margin:4px 0;">売上グラフ</h4>
                <canvas id="sales-chart" width="400" height="260"></canvas>
              </div>
              <div>
                <h4 style="text-align:center;margin:4px 0;">粗利グラフ</h4>
                <canvas id="profit-chart" width="400" height="260"></canvas>
              </div>
            `,c.appendChild(e),c.appendChild(E(u));const p=u.map(s=>s.担当者名);new Chart(document.getElementById("sales-chart").getContext("2d"),{type:"bar",data:{labels:p,datasets:[{label:"売上予算",data:u.map(s=>s.売上予算/1e3),backgroundColor:"#66ccff"},{label:"売上金額",data:u.map(s=>s.売上金額/1e3),backgroundColor:"#3399ff"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},plugins:{legend:{position:"top"}},animation:!1}}),new Chart(document.getElementById("profit-chart").getContext("2d"),{type:"bar",data:{labels:p,datasets:[{label:"加工高予算",data:u.map(s=>s.加工高予算/1e3),backgroundColor:"#ffcc66"},{label:"加工高",data:u.map(s=>s.加工高/1e3),backgroundColor:"#ff9966"}]},options:{responsive:!1,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},plugins:{legend:{position:"top"}},animation:!1}})}if(document.getElementById(`refresh-btn-${t}`).addEventListener("click",()=>{const e=document.getElementById(`year-select-${t}`).value,p=document.getElementById(`month-select-${t}`).value;alert(`${e}年 ${p}月 のデータを表示（※ダミー）`)}),!document.getElementById("custom-hide-kintone-list")){const e=document.createElement("style");e.id="custom-hide-kintone-list",e.innerHTML=`
              .gaia-argoui-app-index-table,
              .gaia-argoui-app-index-list,
              .gaia-argoui-app-index-pane,
              .gaia-argoui-app-index-content,
              .gaia-argoui-app-index-no-record,
              .recordlist-gaia,
              .gaia-argoui-app-index-pager {
                display: none !important;
              }
            `,document.head.appendChild(e)}})})};kintone.events.on("app.record.index.show",()=>{document.getElementById("custom-tab-wrap")||$(),document.querySelectorAll(".tab-content").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".tab-buttons button").forEach(n=>n.classList.remove("active"))})}})()})();
