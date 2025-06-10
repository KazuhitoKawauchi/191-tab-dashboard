// === src/tabs/month.js ===

export function buildMonthTab(container, ym) {
  const message = document.createElement('p');
  message.innerText = `年月別（${ym}）：今後対応予定です。`;
  container.appendChild(message);
}