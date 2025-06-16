import { demoData } from '../demoData.js';

export function buildEmployeeTab(container, ym) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<h3>${ym} 担当者別ダミー表示</h3>`;
  container.appendChild(wrapper);

  // ▼グラフ用の横並びコンテナ
  const chartContainer = document.createElement('div');
  chartContainer.style.display = 'flex';
  chartContainer.style.justifyContent = 'center';
  chartContainer.style.gap = '32px';
  chartContainer.style.flexWrap = 'wrap';
  container.appendChild(chartContainer);

  // グラフ1（売上）
  const canvas1 = document.createElement('canvas');
  canvas1.width = 400;
  canvas1.height = 260;
  chartContainer.appendChild(canvas1);

  // グラフ2（加工高）
  const canvas2 = document.createElement('canvas');
  canvas2.width = 400;
  canvas2.height = 260;
  chartContainer.appendChild(canvas2);

  const labels = demoData.map(d => d['担当者名']);

  // 売上グラフ
  new Chart(canvas1.getContext('2d'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: '売上予算', data: demoData.map(d => d['売上予算'] / 1000), backgroundColor: '#66ccff' },
        { label: '売上金額', data: demoData.map(d => d['売上金額'] / 1000), backgroundColor: '#3399ff' }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { y: { beginAtZero: true } }
    }
  });

  // 加工高グラフ
  new Chart(canvas2.getContext('2d'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: '加工高予算', data: demoData.map(d => d['加工高予算'] / 1000), backgroundColor: '#ffcc66' },
        { label: '加工高', data: demoData.map(d => d['加工高'] / 1000), backgroundColor: '#ff9966' }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { y: { beginAtZero: true } }
    }
  });

  // ▼表の表示
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.marginTop = '32px';
  table.style.width = '100%';
  table.style.fontSize = '14px';

  const headerRow = `
    <tr style="background-color:#007BFF; color:white;">
      <th style="border:1px solid #ccc; padding:6px;">担当者</th>
      <th style="border:1px solid #ccc; padding:6px;">売上予算</th>
      <th style="border:1px solid #ccc; padding:6px;">売上金額</th>
      <th style="border:1px solid #ccc; padding:6px;">加工高予算</th>
      <th style="border:1px solid #ccc; padding:6px;">加工高</th>
    </tr>
  `;

  const rows = demoData.map((d, i) => `
    <tr style="background-color:${i % 2 === 0 ? '#ffffff' : '#f0f8ff'};">
      <td style="border:1px solid #ccc; padding:6px;">${d['担当者名']}</td>
      <td style="border:1px solid #ccc; padding:6px; text-align:right;">${(d['売上予算']).toLocaleString()}</td>
      <td style="border:1px solid #ccc; padding:6px; text-align:right;">${(d['売上金額']).toLocaleString()}</td>
      <td style="border:1px solid #ccc; padding:6px; text-align:right;">${(d['加工高予算']).toLocaleString()}</td>
      <td style="border:1px solid #ccc; padding:6px; text-align:right;">${(d['加工高']).toLocaleString()}</td>
    </tr>
  `).join('');

  table.innerHTML = `<thead>${headerRow}</thead><tbody>${rows}</tbody>`;
  container.appendChild(table);
}
