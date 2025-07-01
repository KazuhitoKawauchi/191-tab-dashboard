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
  `;
  container.appendChild(menu);

  const content = document.createElement('div');
  content.id = 'tab-content';
  container.appendChild(content);

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
    const year = document.getElementById('select-year').value;
    const month = document.getElementById('select-month').value;
    const ym = `${year}-${month}`;
    tabs[key](content, ym);
  };

  menu.addEventListener('click', (e) => {
    const key = e.target.dataset.tab;
    if (key && tabs[key]) switchTab(key);
  });
}

export function rebuildTab(content, key, ym) {
  const tabs = {
    employee: buildEmployeeTab,
    customer: buildCustomerTab,
    product: buildProductTab,
    month: buildMonthTab,
  };
  content.innerHTML = '';
  tabs[key](content, ym);
}
