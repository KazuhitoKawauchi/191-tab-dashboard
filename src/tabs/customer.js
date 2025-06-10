// === src/tabs/customer.js ===

export function buildCustomerTab(container, ym) {
  const message = document.createElement('p');
  message.innerText = `得意先別（${ym}）：今後対応予定です。`;
  container.appendChild(message);
}