// === src/tabs/index.js ===

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
    <select id="dashboard-select" style="margin-left:8px;"></select>
    <button id="dashboard-reload" style="margin-left:4px;">再表示</button>
  `;

  const content = document.createElement('div');
  content.id = 'tab-content';
  container.appendChild(menu);
  container.appendChild(content);

  // ▼年月セレクター構築
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

    const ym = select.value;
    tabs[key](content, ym);
  };

  // ▼クリック切替
  menu.addEventListener('click', (e) => {
    const key = e.target.dataset.tab;
    if (key && tabs[key]) switchTab(key);
  });

  // ▼再表示クリック
  menu.querySelector('#dashboard-reload').addEventListener('click', () => {
    const key = menu.querySelector('button.active').dataset.tab;
    switchTab(key);
  });

  // ▼初期表示：タブ未選択状態にし、Kintone一覧を表示
  // 初期表示時は何も描画しない
}
