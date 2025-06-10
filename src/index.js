// === src/index.js ===

import { initTabs } from './tabs/index.js';

console.log("📦 bundle.js updated: v1.3.15 - 2025/06/10");
window.__BUNDLE_VERSION__ = "v1.3.15 - 2025/06/10";

(function () {
  'use strict';

  const APP_ID = 191;

  const clearContent = () => {
    const node = kintone.app.getHeaderSpaceElement();
    while (node.firstChild) node.removeChild(node.firstChild);
  };

  const loadChartJs = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = resolve;
      document.head.appendChild(script);
    });
  };

  kintone.events.on('app.record.index.show', async (event) => {
    if (Number(event.appId) !== APP_ID) return event;
    if (document.getElementById('tab-dashboard')) return event;

    await loadChartJs();
    clearContent();

    const root = document.createElement('div');
    root.id = 'tab-dashboard';
    kintone.app.getHeaderSpaceElement().appendChild(root);

    initTabs(root);
    return event;
  });
})();
