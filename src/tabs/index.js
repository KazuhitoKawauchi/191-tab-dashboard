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

  const content = document.createElement('div');
  content.id = 'tab-content';
  container.appendChild(menu);
  container.appendChild(content);

  // ▼重複防止：既にセレクターが存在する場合は追加しない
  if (!document.getElementById('dashboard-selector-wrap')) {
    const selectorWrap = document.createElement('div');
    selectorWrap.id = 'dashboard-selector-wrap';
    selectorWrap.style.backgroundColor = '#e6f2ff';
    selectorWrap.style.padding = '8px';
    selectorWrap.style.borderRadius = '4px';
    selectorWrap.style.marginTop = '8px';

    selectorWrap.innerHTML = `
      表示年月：
      <select id="select-year"></select>
      <select id="select-month"></select>
      <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
    `;

    menu.appendChild(selectorWrap);

    const yearSelect = selectorWrap.querySelector('#select-year');
    const monthSelect = selectorWrap.querySelector('#select-month');
    const current = new Date();

    [current.getFullYear(), current.getFullYear() - 1, current.getFullYear() - 2].forEach((y) => {
      const option = document.createElement('option');
      option.value = y;
      option.textContent = `${y}年`;
      yearSelect.appendChild(option);
    });

    for (let i = 1; i <= 12; i++) {
      const m = ('0' + i).slice(-2);
      const option = document.createElement('option');
      option.value = m;
      option.textContent = `${i}月`;
      monthSelect.appendChild(option);
    }

    yearSelect.value = current.getFullYear();
    monthSelect.value = ('0' + (current.getMonth() + 1)).slice(-2);

    selectorWrap.querySelector('#dashboard-reload').addEventListener('click', () => {
      const key = menu.querySelector('button.active').dataset.tab;
      if (key) switchTab(key);
    });
  }

  const tabs = {
    employee: buildEmployeeTab,
    customer: buildCustomerTab,
    product: buildProductTab,
    month: buildMonthTab,
  };

  const switchTab = (key) => {
    content.innerHTML = '';

    // Kintone一覧を非表示
    const styleId = 'custom-hide-kintone-list';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .gaia-argoui-app-index-table,
        .gaia-argoui-app-index-list,
        .gaia-argoui-app-index-pane,
        .gaia-argoui-app-index-content,
        .gaia-argoui-app-index-no-record,
        .recordlist-gaia,
        .gaia-argoui-app-index-pager {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    }

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
