import { CHART_VERSION } from './chartVersion.js';
import { initTabs } from './tabs/index.js';

(function () {
  'use strict';
  const APP_ID = 191;

  const loadChartJs = () => {
    if (window.Chart) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://cdn.jsdelivr.net/npm/chart.js@${CHART_VERSION}`;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const clearContent = () => {
    const node = kintone.app.getContentSpaceElement();
    while (node.firstChild) node.removeChild(node.firstChild);
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
