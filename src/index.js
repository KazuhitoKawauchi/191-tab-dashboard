import { initTabs } from './tabs';

console.log("📦 bundle.js updated: v1.3.23 - 2025/07/01");
window.__BUNDLE_VERSION__ = "v1.3.23 - 2025/07/01";

(function () {
  'use strict';

  const chartJsScript = document.createElement('script');
  chartJsScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  chartJsScript.onload = () => {
    const APP_ID = 191;

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

    const setupUI = () => {
      const header = kintone.app.getHeaderMenuSpaceElement();

      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.flexWrap = 'wrap';
      container.style.gap = '16px';
      container.style.alignItems = 'center';
      container.style.marginTop = '8px';
      header.appendChild(container);

      // タブエリア
      const root = document.createElement('div');
      root.id = 'tab-dashboard';
      container.appendChild(root);
      initTabs(root);

      // セレクターとチェックボックス（1回だけ設置）
      if (!document.getElementById('selector-wrap')) {
        const selectorWrap = document.createElement('div');
        selectorWrap.id = 'selector-wrap';
        selectorWrap.style.backgroundColor = '#e6f2ff';
        selectorWrap.style.padding = '8px';
        selectorWrap.style.borderRadius = '4px';
        selectorWrap.style.display = 'flex';
        selectorWrap.style.alignItems = 'center';
        selectorWrap.style.gap = '8px';

        selectorWrap.innerHTML = `
          表示年月：
          <select id="select-year"></select>
          <select id="select-month"></select>
          <button id="dashboard-reload" style="padding:4px 8px;">再表示</button>
          <label><input type="checkbox" id="chk-quarter"> 四半期</label>
          <label><input type="checkbox" id="chk-upper"> 上半期</label>
          <label><input type="checkbox" id="chk-lower"> 下半期</label>
          <label><input type="checkbox" id="chk-full"> 全期</label>
        `;
        container.appendChild(selectorWrap);

        // ▼年・月セレクター初期化
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
    };

    kintone.events.on('app.record.index.show', (event) => {
      if (Number(event.appId) !== APP_ID) return event;
      if (document.getElementById('tab-dashboard')) return event;

      hideKintoneList();
      setupUI();
      return event;
    });
  };

  document.head.appendChild(chartJsScript);
})();
