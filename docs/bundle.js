(function(){
  'use strict';
  const CHART_VERSION = '4.4.0';

  async function buildEmployeeTab(container, ym) {
    if (typeof container === 'string') container = document.getElementById(container);
    container.innerHTML = `
    <canvas id="employee-chart" style="max-width: 600px;"></canvas>
    <table id="employee-table" class="dashboard-table">
      <thead><tr><th>担当者</th><th>売上</th><th>粗利</th></tr></thead>
      <tbody></tbody>
    </table>
  `;
    const records = await fetchRecords(ym);
    const data = aggregate(records);
    drawChart(data);
    fillTable(data);
  }
  async function fetchRecords(ym) {
    const query = ym ? `年月 = "${ym}"` : '';
    const params = { app: kintone.app.getId(), query };
    const resp = await kintone.api(kintone.api.url('/k/v1/records', true), 'GET', params);
    return resp.records;
  }
  function aggregate(records) {
    const map = {};
    records.forEach((r) => {
      const name = r['担当者'].value;
      const sales = Number(r['売上'].value) || 0;
      const profit = Number(r['粗利'].value) || 0;
      if (!map[name]) map[name] = { sales: 0, profit: 0 };
      map[name].sales += sales;
      map[name].profit += profit;
    });
    const labels = [];
    const salesData = [];
    const profitData = [];
    const tableRows = [];
    Object.keys(map).forEach((name) => {
      labels.push(name);
      salesData.push(map[name].sales);
      profitData.push(map[name].profit);
      tableRows.push({ name, sales: map[name].sales, profit: map[name].profit });
    });
    return { labels, salesData, profitData, tableRows };
  }
  function drawChart({ labels, salesData, profitData }) {
    const ctx = document.getElementById('employee-chart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: '売上', data: salesData, backgroundColor: 'rgba(54, 162, 235, 0.5)' },
          { label: '粗利', data: profitData, backgroundColor: 'rgba(255, 99, 132, 0.5)' }
        ]
      },
      options: { responsive: true }
    });
  }
  function fillTable({ tableRows }) {
    const tbody = document.querySelector('#employee-table tbody');
    tableRows.forEach((row, i) => {
      const tr = document.createElement('tr');
      if (i % 2 === 0) tr.style.backgroundColor = '#f2f2f2';
      tr.innerHTML = `<td>${row.name}</td><td>${row.sales}</td><td>${row.profit}</td>`;
      tbody.appendChild(tr);
    });
  }

  function buildCustomerTab(container) {
    if (typeof container === 'string') container = document.getElementById(container);
    container.innerHTML = '<p>TODO: 得意先別タブを実装</p>';
  }

  function buildProductTab(container) {
    if (typeof container === 'string') container = document.getElementById(container);
    container.innerHTML = '<p>TODO: 品名別タブを実装</p>';
  }

  function buildMonthTab(container) {
    if (typeof container === 'string') container = document.getElementById(container);
    container.innerHTML = '<p>TODO: 年月別タブを実装</p>';
  }

  function initTabs(container) {
    const menu = document.createElement('div');
    menu.className = 'tab-menu';
    menu.innerHTML = `
    <button data-tab="employee" class="active">担当者別</button>
    <button data-tab="customer">得意先別</button>
    <button data-tab="product">品名別</button>
    <button data-tab="month">年月別</button>
    <select id="dashboard-select"></select>
    <button id="dashboard-reload">再表示</button>
  `;
    const content = document.createElement('div');
    content.id = 'tab-content';
    container.appendChild(menu);
    container.appendChild(content);

    const select = menu.querySelector('#dashboard-select');
    const current = new Date();
    for (let i = 0; i < 12; i++) {
      const d = new Date(current.getFullYear(), current.getMonth() - i, 1);
      const y = d.getFullYear();
      const m = ('0' + (d.getMonth() + 1)).slice(-2);
      const option = document.createElement('option');
      option.value = `${y}-${m}`;
      option.textContent = `${y}-${m}`;
      select.appendChild(option);
    }

    const tabs = {
      employee: buildEmployeeTab,
      customer: buildCustomerTab,
      product: buildProductTab,
      month: buildMonthTab
    };

    const switchTab = (key) => {
      content.innerHTML = '';
      menu.querySelectorAll('button[data-tab]').forEach((b) => {
        b.classList.toggle('active', b.dataset.tab === key);
      });
      tabs[key](content, select.value);
    };

    menu.addEventListener('click', (e) => {
      const key = e.target.dataset.tab;
      if (key && tabs[key]) {
        switchTab(key);
      }
    });

    menu.querySelector('#dashboard-reload').addEventListener('click', () => {
      const key = menu.querySelector('button.active').dataset.tab;
      switchTab(key);
    });

    switchTab('employee');
  }

  const APP_ID = 191;
  const loadChartJs = () => {
    if (window.Chart) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://cdn.jsdelivr.net/npm/chart.js@${CHART_VERSION}`;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const clearContent = () => {
    const node = kintone.app.getContentSpaceElement();
    while (node.firstChild) node.removeChild(node.firstChild);
  };

  kintone.events.on('app.record.index.show', async (event) => {
    if (Number(event.appId) !== APP_ID) return event;
    if (document.getElementById('tab-dashboard')) return event;

    await loadChartJs();
    clearContent();

    const root = document.createElement('div');
    root.id = 'tab-dashboard';
    kintone.app.getHeaderSpaceElement().appendChild(root);
    initTabs(root);
    return event;
  });
})();
