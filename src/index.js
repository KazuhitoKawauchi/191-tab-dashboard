import { initTabs } from './tabs';

console.log("📦 bundle.js updated: v1.3.18 - 2025/06/23");
window.__BUNDLE_VERSION__ = "v1.3.18 - 2025/06/23";

(function () {
  'use strict';

  const chartJsScript = document.createElement('script');
  chartJsScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  chartJsScript.onload = () => {
    const APP_ID = 191;

    const clearContent = () => {
      const node = kintone.app.getHeaderSpaceElement();
      while (node.firstChild) node.removeChild(node.firstChild);
    };

    const hideKintoneList = () => {
      if (document.getElementById('custom-hide-kintone-list')) return;

      const style = document.createElement('style');
      style.id = 'custom-hide-kintone-list';
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
    };

    const addTabUI = () => {
      const space = kintone.app.getHeaderSpaceElement();

      const wrap = document.createElement('div');
      wrap.id = 'custom-tab-buttons';
      wrap.innerHTML = `
        <style>
          .tab-trigger-wrap {
            display: flex;
            gap: 12px;
            margin-top: 8px;
          }
          .tab-trigger-wrap button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
          }
        </style>
        <div class="tab-trigger-wrap">
          <button id="show-tabs-btn">📊 グラフ・表を表示</button>
        </div>
      `;
      space.appendChild(wrap);

      document.getElementById('show-tabs-btn').addEventListener('click', () => {
        hideKintoneList();
        clearContent();

        const root = document.createElement('div');
        root.id = 'tab-dashboard';
        kintone.app.getHeaderSpaceElement().appendChild(root);
        initTabs(root);

        // ▼セレクターのデザインを反映
        const menu = document.querySelector('.tab-menu');
        if (menu) {
          const selectorWrap = document.createElement('div');
          selectorWrap.style.backgroundColor = '#e6f2ff';
          selectorWrap.style.padding = '8px';
          selectorWrap.style.borderRadius = '4px';
          selectorWrap.style.marginTop = '8px';

          selectorWrap.innerHTML = `
            表示年月：
            <select id="select-year">
              ${[2025, 2024, 2023].map(y => `<option value="${y}">${y}年</option>`).join('')}
            </select>
            <select id="select-month">
              ${[...Array(12)].map((_, i) => {
                const m = i + 1;
                return `<option value="${('0' + m).slice(-2)}">${m}月</option>`;
              }).join('')}
            </select>
            <button id="dashboard-reload" style="margin-left:8px; padding:4px 8px;">再表示</button>
          `;

          menu.appendChild(selectorWrap);

          // ▼初期値を当月に設定
          const now = new Date();
          menu.querySelector('#select-year').value = now.getFullYear();
          menu.querySelector('#select-month').value = ('0' + (now.getMonth() + 1)).slice(-2);

          // ▼再表示ボタン動作
          menu.querySelector('#dashboard-reload').addEventListener('click', () => {
            const year = menu.querySelector('#select-year').value;
            const month = menu.querySelector('#select-month').value;
            const ym = `${year}-${month}`;
            
            const key = menu.querySelector('button.active')?.dataset.tab;
            if (key) {
              const content = document.getElementById('tab-content');
              content.innerHTML = '';
              import('./tabs/employee.js').then(module => {
                module.buildEmployeeTab(content, ym);
              });
            }
          });
        }
      });
    };

    kintone.events.on('app.record.index.show', (event) => {
      if (Number(event.appId) !== APP_ID) return event;
      if (document.getElementById('custom-tab-buttons')) return event;
      if (document.getElementById('tab-dashboard')) return event;

      addTabUI();
      return event;
    });
  };

  document.head.appendChild(chartJsScript);
})();
