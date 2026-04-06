# Doc-Scribe.ai — Help Centre

A fully static help centre website for Doc-Scribe.ai, built with vanilla HTML, CSS, and JavaScript.

## 📁 Project Structure

```
helpcentre-doc-scribe/
├── index.html          ← Main HTML (single page app)
├── index.css           ← All styles (dark/light theme)
├── main.js             ← App engine (routing, search, render) — FIXED
├── data-en.js          ← All content: articles, categories, videos, UI strings
├── images/
│   └── logo.png        ← Doc-Scribe logo (copy from live site)
├── docs/
│   └── *.pdf           ← Whitepaper PDFs
└── README.md
```

## 🚀 How to Run Locally

**Option 1 — VS Code Live Server (recommended)**
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Opens at `http://127.0.0.1:5500`

**Option 2 — Python**
```bash
python -m http.server 5500
# Open http://localhost:5500
```

> ⚠️ Do NOT open index.html directly (file://) — JS modules won't load. Always use a local server.

## ✅ Fixes Applied (main.js)

| # | Issue | Fix |
|---|-------|-----|
| 1 | Hardcoded "4 min read" on all articles | **Dynamic read time** calculated from real word count |
| 2 | Search fires on every keystroke | **200ms debounce** — waits until user stops typing |
| 3 | No keyword highlighting in results | **Matched keyword highlighted** in green in results |
| 4 | Results show fixed excerpt only | **Context snippet** shows where match was found in body |
| 5 | Results in random order | **Relevance sorted** — title matches shown first |
| 6 | No way to clear search | **✕ clear button** appears when typing |
| 7 | "No results" shows generic message | Shows actual search query: "No results for xyz" |
| 8 | Nav search didn't populate hero input | **Fixed** — properly syncs nav search to hero search |

## 📦 Deploying to Netlify

1. Drag the entire `helpcentre-doc-scribe` folder into Netlify Drop
2. Or connect your GitHub repo → Netlify auto-deploys

## 🌍 Multi-language Support

Add language variants:
- `index-hi.html` — Hindi
- `index-zh.html` — Chinese
- `index-bm.html` — Bahasa Malaysia
- `index-th.html` — Thai

Each language file uses a different `data-XX.js` with translated `UI_STRINGS` and `ARTS`.

## 🖼️ Missing Assets

Copy these from the live site or your assets folder:
- `images/logo.png` — Doc-Scribe shield logo
- `images/image1.png` to `image16.png` — Article screenshots
- `docs/Doc-Scribe_Security_Whitepaper.pdf`

