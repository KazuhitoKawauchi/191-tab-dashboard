# kintone App 191 Tab Dashboard

This project provides a custom JavaScript for kintone app **191**. Source files are written as ES modules under `src/` and bundled with [Vite](https://vitejs.dev/) into `docs/bundle.js`.

## Structure

- **src/** – ES module source files.
- **docs/** – Bundled output published via GitHub Pages.
- **.github/workflows/** – Automation to build `docs/bundle.js` on every push to `main`.

## Usage

Register the following URL in the kintone app's JavaScript customization:

```
https://cdn.jsdelivr.net/gh/<user>/<repo>@main/191-tab-dashboard/docs/bundle.js
```

Replace `<user>` and `<repo>` with your GitHub account and repository name. After saving and updating the app, the dashboard will appear on the list view of app 191.

## Development

Edit files in `src/` and run `npm run build` to generate `docs/bundle.js`. When changes are pushed to the `main` branch, GitHub Actions automatically runs the build and commits the updated bundle.

---

## Learnings from Implementation

Here are the key takeaways and solutions learned while integrating this dashboard with Kintone and GitHub Pages:

| Issue | Solution / Insight |
|-------|--------------------|
| `raw.githubusercontent.com` cannot be loaded on Kintone | ✅ Use `cdn.jsdelivr.net` instead, which supports CORS and allows GitHub code to be loaded in Kintone |
| Uncertain which JS file is active in Kintone | ✅ Use `alert()` and `console.log()` for quick verification during development |
| Confusing GitHub Pages settings | ✅ Make sure to set `main` branch and `docs/` folder under `Settings > Pages` |
| Script not reflected immediately | ✅ Wait a few minutes after updates; GitHub Pages may take time to refresh |
| Manual script copying is tedious | ✅ Use GitHub Actions to automate copying from `src/` to `docs/` on push |
