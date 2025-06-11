import { initTabs } from './tabs';

console.log("📦 bundle.js updated: v1.3.16 - 2025/06/11");
window.__BUNDLE_VERSION__ = "v1.3.16 - 2025/06/11";

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
      });
    };

    // イベント登録：1回目はボタンだけ追加、クリック時に非表示＋描画
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
