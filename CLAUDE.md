# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static help centre for Doc-Scribe.ai built with vanilla HTML, CSS, and JavaScript. No build system, no frameworks — runs directly in the browser.

Deployed on Cloudflare Pages using Cloudflare Workers for routing.

## Architecture

### Three Portal Types

The help centre has three distinct portals, each with its own navigation tab and content:

1. **User Portal** (`/index.html`) — End-user documentation
2. **Admin Portal** (`/Admin/index.html`) — System administrator guides
3. **Partner Portal** (`/Partner/index.html`) — Partner/reseller documentation

Each portal is a complete standalone SPA with its own `index.html`, `data-{lang}.js`, and shares the same `main.js` engine.

### Multi-Language Support

Each portal supports 5 languages:
- `index.html` / `data-en.js` — English
- `index-bm.html` / `data-bm.js` — Bahasa Malaysia
- `index-zh.html` / `data-zh.js` — Chinese
- `index-hi.html` / `data-hi.js` — Hindi
- `index-th.html` / `data-th.js` — Thai

**Critical**: Each language variant loads a different `data-{lang}.js` file via `<script src="data-{lang}.js">`. The HTML files are otherwise identical except for font imports (Noto Sans SC for Chinese, Noto Sans Thai for Thai).

### Single-Page App Structure

The app uses **hash-based routing** (`#article/article-id`, `#cat/category-id`). The routing logic is in `main.js`:

- `handleRouteChange()` — reads `window.location.hash` and renders the appropriate view
- No page reloads — all navigation is client-side
- Search state is preserved across route changes

### Content Data Structure

All content lives in `window.CATS` (categories) and `window.ARTS` (articles) in `data-{lang}.js`:

```javascript
window.CATS = [
  { id: 'getting-started', title: 'Getting Started', arts: ['what-is', 'how-it-works'], ... }
];

window.ARTS = {
  'what-is': { cat: 'getting-started', title: 'What is Doc-Scribe.ai', exc: '...', body: '<p>...</p>' }
};
```

**Key point**: Article IDs in `CATS.arts` must match keys in `ARTS`. The `cat` field in each article must match a category `id`.

### Search System

Search is implemented in `main.js` with several optimizations:

- **200ms debounce** — waits until user stops typing before searching
- **Relevance sorting** — title matches ranked higher than body matches
- **Keyword highlighting** — matched terms highlighted in green
- **Context snippets** — shows surrounding text where match was found
- **Dynamic read time** — calculated from actual word count (not hardcoded)

The search queries both article titles and article bodies. Results show category badge, title, excerpt, and read time.

## Development

### Running Locally

You MUST use a local web server (not `file://` protocol, which breaks JS modules).

**VS Code Live Server (recommended)**:
```
1. Install "Live Server" extension
2. Right-click index.html → "Open with Live Server"
3. Opens at http://127.0.0.1:5500
```

**Python**:
```powershell
python -m http.server 5500
# Open http://localhost:5500
```

### Testing Multi-Language

To test language variants, navigate directly to:
- `http://localhost:5500/index-bm.html` (Bahasa)
- `http://localhost:5500/index-zh.html` (Chinese)
- `http://localhost:5500/index-hi.html` (Hindi)
- `http://localhost:5500/index-th.html` (Thai)

Language dropdown in the nav switches between these HTML files.

### Testing Different Portals

- User: `http://localhost:5500/index.html`
- Admin: `http://localhost:5500/Admin/index.html`
- Partner: `http://localhost:5500/Partner/index.html`

Portal tabs in the nav are hardcoded `<a href>` links — they trigger full page reloads (not SPA transitions).

## Deployment

### Cloudflare Pages

Deployed using Cloudflare Pages with a Cloudflare Worker for routing.

**`wrangler.toml`**:
```toml
name = "helpdesk-docscribe-ai"
compatibility_date = "2025-04-22"

[assets]
directory = "./"
```

**`worker.js`**:
Serves `index.html` for directory requests (e.g., `/Admin/` → `/Admin/index.html`).

**`_redirects`**:
Handles routing rules for Cloudflare Pages (currently minimal — only routing for root).

### Deploying Changes

This project uses Cloudflare Pages deployment:

1. Push changes to the repository
2. Cloudflare Pages auto-deploys from the connected Git branch

OR manually deploy via Wrangler CLI:
```powershell
npx wrangler pages deploy
```

**Note**: There is no build step. All files are deployed as-is.

## Content Management

### Adding a New Article

1. Open the appropriate `data-{lang}.js` file
2. Add article ID to a category's `arts` array in `window.CATS`
3. Add article object to `window.ARTS` with matching ID:
```javascript
'article-id': { 
  cat: 'category-id', 
  title: 'Article Title', 
  exc: 'Short excerpt shown in search results', 
  body: '<p>HTML content...</p>' 
}
```

**Important**: The `cat` field MUST match an existing category `id`.

### Adding a New Category

Add to `window.CATS` array in `data-{lang}.js`:
```javascript
{ 
  id: 'new-category', 
  title: 'Category Title', 
  bg: '#hex-color',   // light background
  fg: '#hex-color',   // dark text
  desc: 'Category description', 
  arts: ['article-1', 'article-2'],
  icon: '<svg>...</svg>' 
}
```

Category cards are auto-generated from this array. The `icon` field accepts inline SVG.

### Video Tutorials

Videos are defined in `window.VIDEOS` in `data-{lang}.js`:
```javascript
window.VIDEOS = [
  { id: 'overview', title: 'Product Overview', url: 'video/...', thumb: 'images/...' }
];
```

### Resources (PDFs)

Resources are defined in `window.RESOURCES` in `data-{lang}.js`:
```javascript
window.RESOURCES = [
  { title: 'Security Whitepaper', desc: '...', url: 'docs/whitepaper.pdf', type: 'PDF' }
];
```

PDFs should be placed in the `docs/` directory.

## Styling

All styles are in `index.css` (shared across all portals and languages).

- **CSS custom properties** for theming (light/dark mode)
- **Dark mode** controlled by `.dark` class on `<html>`
- Theme preference saved to `localStorage` as `hc-theme`

To toggle theme:
```javascript
document.documentElement.classList.toggle('dark');
localStorage.setItem('hc-theme', 'dark'); // or 'light'
```

## Special Considerations

### Language-Specific Fonts

Chinese and Thai require custom font imports. This is handled in each language variant's `<head>`:

- `index-zh.html` — includes `Noto Sans SC`
- `index-th.html` — includes `Noto Sans Thai`

If adding new languages with non-Latin scripts, update font imports accordingly.

### Reading Progress Bar

The reading progress bar at the top of article pages is driven by scroll position in `<main>`. The calculation is in `main.js` `init()`:

```javascript
const h = mainEl.scrollHeight - mainEl.clientHeight;
const pc = (mainEl.scrollTop / h) * 100;
bar.style.width = pc + '%';
```

This runs on the `scroll` event listener attached to `<main>`.

### No Search Results State

When search returns no results, the UI shows "No results found for {query}". The actual query is displayed to help users refine their search.

### Portal Tab Active State

Portal tabs show an `.active` class to indicate the current portal. This is hardcoded in each `index.html` file and is NOT dynamic — each portal's HTML has its own tab marked active.

## Known Issues / Quirks

- Search is client-side only — no server-side indexing
- Videos are embedded via `<video>` tags (not YouTube embeds)
- No analytics tracking configured
- Language dropdown does NOT preserve current article when switching languages (navigates to home)
