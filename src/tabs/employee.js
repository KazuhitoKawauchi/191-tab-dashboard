export async function buildEmployeeTab(container, ym) {
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
        { label: '粗利', data: profitData, backgroundColor: 'rgba(255, 99, 132, 0.5)' },
      ],
    },
    options: { responsive: true },
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
