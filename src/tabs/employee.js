import { demoData } from '../demoData.js';

export function buildEmployeeTab(container, ym) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<h3>${ym} 担当者別ダミー表示</h3>`;
  container.appendChild(wrapper);

  const canvas1 = document.createElement('canvas');
  canvas1.width = 400;
  canvas1.height = 260;
  container.appendChild(canvas1);

  const canvas2 = document.createElement('canvas');
  canvas2.width = 400;
  canvas2.height = 260;
  container.appendChild(canvas2);

  const labels = demoData.map(d => d['担当者名']);

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
      scales: { y: { beginAtZero: true } }
    }
  });

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
      scales: { y: { beginAtZero: true } }
    }
  });
}
