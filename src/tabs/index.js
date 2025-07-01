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

    <div style="background-color:#e6f2ff; padding:8px; border-radius:4px; margin-top:8px;">
      表示年月：
      <select id="select-year"></select>
      <select id="select-month"></select>
      <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
    </div>
  `;

  const content = document.createElement('div');
  content.id = 'tab-content';
  container.appendChild(menu);
  container.appendChild(content);

  // ▼年・月セレクター構築
  const yearSelect = menu.querySelector('#select-year');
  const monthSelect = menu.querySelector('#select-month');
  const current = new Date();

  // 年セレクター（今年・昨年・一昨年）
  const years = [current.getFullYear(), current.getFullYear() - 1, current.getFullYear() - 2];
  years.forEach((y) => {
    const option = document.createElement('option');
    option.value = y;
    option.textContent = `${y}年`;
    yearSelect.appendChild(option);
  });

  // 月セレクター（01～12）
  for (let i = 1; i <= 12; i++) {
    const m = ('0' + i).slice(-2);
    const option = document.createElement('option');
    option.value = m;
    option.textContent = `${i}月`;
    monthSelect.appendChild(option);
  }

  // 初期値：当月
  yearSelect.value = current.getFullYear();
  monthSelect.value = ('0' + (current.getMonth() + 1)).slice(-2);

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

    const ym = `${yearSelect.value}-${monthSelect.value}`;
    tabs[key](content, ym);
  };

  // ▼タブ切替
  menu.addEventListener('click', (e) => {
    const key = e.target.dataset.tab;
    if (key && tabs[key]) switchTab(key);
  });

  // ▼再表示クリック
  menu.querySelector('#dashboard-reload').addEventListener('click', () => {
    const key = menu.querySelector('button.active').dataset.tab;
    if (key) switchTab(key);
  });

  // 初期表示時は何も描画しない
}
