# 売上・利益ダッシュボード（Kintoneアプリ191）

このプロジェクトは、Kintoneアプリ **191** 向けのカスタムJavaScriptを提供します。ソースコードは `src/` ディレクトリにESモジュール形式で記述されており、[Vite](https://vitejs.dev/) を使って `docs/bundle.js` にバンドルされます。

---

## 📁 ディレクトリ構成

| フォルダ | 内容 |
|----------|------|
| `src/` | 開発中のJavaScriptソースコード（ESModules形式） |
| `docs/` | ビルド後のファイル（GitHub Pages経由で公開） |
| `.github/workflows/` | `main` ブランチにpushされた際に自動ビルドを行う設定（GitHub Actions） |

---

## 🚀 Kintoneアプリへの適用方法

Kintoneのアプリ191に以下のURLを**JavaScriptカスタマイズ**として登録してください：

https://cdn.jsdelivr.net/gh/KazuhitoKawauchi/191-tab-dashboard@main/191-tab-dashboard/docs/bundle.js


※ `<ユーザー名>` と `<リポジトリ名>` はご自身のGitHubアカウントに置き換えてください。

---

## 🛠 開発・ビルド手順

1. `src/` フォルダ内のファイルを編集
2. コマンド `npm run build` を実行（`docs/bundle.js` が生成されます）
3. `main` ブランチへ push
4. GitHub Actions により `docs/bundle.js` が自動更新されます

---

## 🧠 開発中に得られた知見とTips

| 課題 | 解決策・学び |
|------|---------------|
| `raw.githubusercontent.com` がKintoneで使えない | ✅ `cdn.jsdelivr.net` を利用する（CORS対応済み） |
| どのスクリプトが読み込まれているか不明 | ✅ `alert()` や `console.log()` を活用して確認 |
| GitHub Pages の設定がややこしい | ✅ 設定画面の「Pages」で `main` + `docs/` に設定 |
| スクリプトの反映が遅い | ✅ 反映に数分かかることがあるので待つ／キャッシュ強制 |
| `docs/` への手動コピーが手間 | ✅ GitHub Actions で `src/` → `docs/` を自動化 |

---

## 🧼 `.gitignore` の推奨設定

```bash
node_modules
dist
.vite
.env
*.log
.DS_Store

🔖 バージョン管理ポリシー
安定動作を確認できたタイミングで v1.x.x のタグを作成

main ブランチのみ使用（不要なブランチは作らない）

バージョンごとのソースは src/index.v1.x.x.js で管理

README.md に変更内容の履歴を記録

📄 バージョン履歴
✅ v1.3.15（安定版）
担当者別タブに売上・粗利グラフと表を表示（ダミーデータ）

年月セレクター実装（初期値は現在年月）

Kintone一覧（0件など）を完全非表示化
