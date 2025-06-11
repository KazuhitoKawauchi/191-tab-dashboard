// === { コード版 v1.3.16：タブ押下時に一覧非表示 } ===

import { initTabs } from './tabs';

console.log("🎞️ bundle.js updated: v1.3.16 - 2025/06/10");
window.__BUNDLE_VERSION__ = "v1.3.16 - 2025/06/10";

(function () {
  'use strict';

  const chartJsScript = document.createElement('script');
  chartJsScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  chartJsScript.onload = init;
  document.head.appendChild(chartJsScript);

  function init() {
    const APP_ID = 191;

    const clearContent = () => {
      const node = kintone.app.getHeaderSpaceElement();
      while (node.firstChild) node.removeChild(node.firstChild);
    };

    kintone.events.on('app.record.index.show', async (event) => {
      if (Number(event.appId) !== APP_ID) return event;

      const rootId = 'tab-dashboard';
      const existing = document.getElementById(rootId);

      if (!existing) {
        const root = document.createElement('div');
        root.id = rootId;
        kintone.app.getHeaderSpaceElement().appendChild(root);
        initTabs(root, () => {
          // タブ押下時に一覧非表示スタイルを追加
          if (!document.getElementById('custom-hide-kintone-list')) {
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
          }
        });
      }

      return event;
    });
  }
})();
