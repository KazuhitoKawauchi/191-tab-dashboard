import { initTabs } from './tabs';

console.log("📦 bundle.js updated: v1.3.20 - 2025/07/01");
window.__BUNDLE_VERSION__ = "v1.3.20 - 2025/07/01";

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

      // ボタン領域
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

      // セレクター（1回だけ設置）
      if (!document.getElementById('selector-wrap')) {
        const selectorWrap = document.createElement('div');
        selectorWrap.id = 'selector-wrap';
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
        space.appendChild(selectorWrap);

        // ▼年・月セレクター構築
        const yearSelect = selectorWrap.querySelector('#select-year');
        const monthSelect = selectorWrap.querySelector('#select-month');
        const now = new Date();

        [now.getFullYear(), now.getFullYear() - 1, now.getFullYear() - 2].forEach((y) => {
          const opt = document.createElement('option');
          opt.value = y;
          opt.textContent = `${y}年`;
          yearSelect.appendChild(opt);
        });
        for (let i = 1; i <= 12; i++) {
          const opt = document.createElement('option');
          opt.value = ('0' + i).slice(-2);
          opt.textContent = `${i}月`;
          monthSelect.appendChild(opt);
        }

        yearSelect.value = now.getFullYear();
        monthSelect.value = ('0' + (now.getMonth() + 1)).slice(-2);

        selectorWrap.querySelector('#dashboard-reload').addEventListener('click', () => {
          const year = yearSelect.value;
          const month = monthSelect.value;
          const ym = `${year}-${month}`;
          const key = document.querySelector('.tab-menu button.active')?.dataset.tab;
          if (key) {
            const content = document.getElementById('tab-content');
            content.innerHTML = '';
            import('./tabs/index.js').then(m => {
              m.rebuildTab(content, key, ym);
            });
          }
        });
      }

      // タブ表示ボタン
      document.getElementById('show-tabs-btn').addEventListener('click', () => {
        if (document.getElementById('tab-dashboard')) return;
        hideKintoneList();
        clearContent();

        const root = document.createElement('div');
        root.id = 'tab-dashboard';
        space.appendChild(root);
        initTabs(root);
      });
    };

    kintone.events.on('app.record.index.show', (event) => {
      if (Number(event.appId) !== APP_ID) return event;
      if (document.getElementById('custom-tab-buttons')) return event;

      addTabUI();
      return event;
    });
  };

  document.head.appendChild(chartJsScript);
})();
