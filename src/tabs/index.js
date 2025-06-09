import { buildEmployeeTab } from './employee.js';
import { buildCustomerTab } from './customer.js';
import { buildProductTab } from './product.js';
import { buildMonthTab } from './month.js';

export function initTabs(container) {
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
    month: buildMonthTab,
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
