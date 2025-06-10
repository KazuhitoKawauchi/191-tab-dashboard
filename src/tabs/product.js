// === src/tabs/product.js ===

export function buildProductTab(container, ym) {
  const message = document.createElement('p');
  message.innerText = `品名別（${ym}）：今後対応予定です。`;
  container.appendChild(message);
}