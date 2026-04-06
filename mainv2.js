/* ── HELP CENTRE ENGINE (FIXED) ── */

let ALL_IDS = [];
function updateAllIds() {
  if (!window.CATS) return;
  ALL_IDS = [];
  window.CATS.forEach(cat => cat.articles.forEach(id => ALL_IDS.push(id)));
}

function init() {
  updateAllIds();
  renderStaticStrings();
  renderSidebar();
  renderCatGrid();
  renderVideoGrid();
  renderResourceGrid();
  handleRouteChange();
  window.addEventListener('hashchange', handleRouteChange);

  // Close search results when clicking outside
  document.addEventListener('click', (e) => {
    const heroSearch = document.getElementById('heroSearch');
    const searchResults = document.getElementById('searchResults');
    const navSearchWrap = document.querySelector('.nav-search-wrap');
    const navDrop = document.querySelector('.nav-search-drop');
    if (heroSearch && searchResults && !heroSearch.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
    if (navSearchWrap && navDrop && !navSearchWrap.contains(e.target)) {
      navDrop.style.display = 'none';
    }
  });
}

function renderStaticStrings() {
  if (!window.UI_STRINGS) return;
  const s = window.UI_STRINGS;

  // Nav
  const navLogoName = document.querySelector('.nav-logo-text .name');
  if (navLogoName) navLogoName.textContent = s.productName || 'Doc-Scribe';
  const navLogoAi = document.querySelector('.nav-logo-text .ai');
  if (navLogoAi) navLogoAi.textContent = s.aiSuffix || '.AI';
  const navTagline = document.querySelector('.nav-logo-text .tagline');
  if (navTagline) navTagline.textContent = s.helpCentre || 'Help Centre';

  const navLinks = document.querySelectorAll('.nav-links a');
  if (navLinks[0]) navLinks[0].textContent = s.resources || 'Resources';
  if (navLinks[1]) navLinks[1].textContent = s.tutorials || 'Tutorials';
  const tryBtn = document.querySelector('.nav-links .btn-primary');
  if (tryBtn) tryBtn.textContent = s.tryProduct || 'Try Product';

  // Hero
  const heroH1 = document.querySelector('.hero h1');
  if (heroH1 && s.heroTitle) heroH1.innerHTML = s.heroTitle;
  const heroP = document.querySelector('.hero p');
  if (heroP) heroP.textContent = s.heroSub || '';
  const heroInput = document.getElementById('heroSearch');
  if (heroInput) heroInput.placeholder = s.searchPlaceholder || 'Search for answers, guides, features...';
  const navInput = document.querySelector('.nav-search-input');
  if (navInput) navInput.placeholder = s.navSearchPlaceholder || 'Search guides...';

  // Browse heading
  const browseTitle = document.querySelector('.container .section-title');
  if (browseTitle) browseTitle.textContent = s.browseByTopic || 'Browse by Topic';

  // Still need help
  const ctaTitle = document.querySelector('.support-cta h3');
  if (ctaTitle) ctaTitle.textContent = s.stillNeedHelp || 'Still need help?';
  const ctaSub = document.querySelector('.support-cta p');
  if (ctaSub) ctaSub.textContent = s.supportSub || 'Our support team is available 24/7 for premium enterprise users.';
  const ctaBtn = document.querySelector('.support-cta a.btn');
  if (ctaBtn) ctaBtn.textContent = s.contactSupport || 'Contact Support';

  // Footer
  const footerBrandName = document.querySelector('.footer-brand .name');
  if (footerBrandName) footerBrandName.textContent = s.productName || 'Doc-Scribe';
  const footerBrandAi = document.querySelector('.footer-brand .ai');
  if (footerBrandAi) footerBrandAi.textContent = s.aiSuffix || '.AI';
  const footerDesc = document.querySelector('.footer-brand p');
  if (footerDesc) footerDesc.textContent = s.footerDesc || '';
}

function renderSidebar() {
  if (!window.CATS) return;
  const s = window.UI_STRINGS || {};
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  let html = `<a class="sb-home-link" href="#" onclick="navigate('home')">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
    ${s.browseAllSupport || 'Browse All Support'}
  </a>`;

  window.CATS.forEach(cat => {
    const arts = cat.articles || [];
    const artLinks = arts.map(id => {
      const art = window.ARTS[id];
      if (!art) return '';
      return `<a class="sb-link" href="#${id}" id="sb-${id}">${art.title}</a>`;
    }).join('');

    html += `
    <div class="sb-cat" id="sb-cat-${cat.id}">
      <button class="sb-cat-btn" onclick="toggleSb('${cat.id}')">
        <span class="sb-cat-ico">${cat.icon || ''}</span>
        <span>${cat.label}</span>
        <svg class="sb-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="sb-arts" id="sb-arts-${cat.id}">${artLinks}</div>
    </div>`;
  });

  sidebar.innerHTML = html;
}

function toggleSb(catId) {
  const btn = document.querySelector(`#sb-cat-${catId} .sb-cat-btn`);
  const arts = document.getElementById(`sb-arts-${catId}`);
  if (!btn || !arts) return;
  const isOpen = btn.classList.contains('open');
  btn.classList.toggle('open', !isOpen);
  arts.classList.toggle('open', !isOpen);
}

function renderCatGrid() {
  if (!window.CATS) return;
  const s = window.UI_STRINGS || {};
  const grid = document.querySelector('.cat-grid');
  if (!grid) return;

  grid.innerHTML = window.CATS.map(cat => {
    const arts = (cat.articles || []).slice(0, 3);
    const total = (cat.articles || []).length;
    const artListHtml = arts.map(id => {
      const art = window.ARTS[id];
      if (!art) return '';
      return `<a class="cat-art-item" href="#${id}">${art.title}</a>`;
    }).join('');
    const extra = total - 3;
    const extraHtml = extra > 0 ? `<span class="cat-art-item muted">+${extra} more</span>` : '';

    return `
    <div class="cat-card" onclick="navigate('${cat.articles[0]}')">
      <div class="cat-icon">${cat.icon || ''}</div>
      <h3>${cat.label}</h3>
      <p>${cat.desc || ''}</p>
      <div class="cat-art-list">${artListHtml}${extraHtml}</div>
      <div class="cat-footer">
        <a href="#cat-${cat.id}" onclick="event.stopPropagation();navigate('${cat.articles[0]}')">${total} ${s.articles || 'ARTICLES'} ›</a>
      </div>
    </div>`;
  }).join('');
}

function renderVideoGrid() {
  if (!window.VIDEOS) return;
  const grid = document.querySelector('.video-grid');
  if (!grid) return;
  const s = window.UI_STRINGS || {};

  grid.innerHTML = window.VIDEOS.map(v => `
    <div class="video-card" onclick="openLb('${v.id}')">
      <div class="video-thumb">
        <img src="${v.thumb}" alt="${v.title}" loading="lazy">
        <div class="play-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </div>
      </div>
      <div class="video-info">
        <span class="video-label">${v.label || ''}</span>
        <strong>${v.title}</strong>
      </div>
    </div>`).join('');
}

function renderResourceGrid() {
  if (!window.RESOURCES) return;
  const grid = document.querySelector('.wp-grid, .resource-grid');
  if (!grid) return;

  grid.innerHTML = window.RESOURCES.map(r => `
    <a class="cat-card wp-card" href="${r.url || '#'}" target="_blank">
      <div class="cat-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      </div>
      <span class="wp-tag">${r.tag || ''}</span>
      <h3>${r.title}</h3>
      <p>${r.desc || ''}</p>
    </a>`).join('');
}

function handleRouteChange() {
  const hash = location.hash.replace('#', '').trim();
  if (!hash || hash === 'home') {
    showHome();
  } else {
    showArt(hash);
  }
}

function navigate(id) {
  if (!id || id === 'home') {
    location.hash = '';
    showHome();
  } else {
    location.hash = id;
    showArt(id);
  }
}

function showHome() {
  const homeView = document.getElementById('homeView');
  const artView = document.getElementById('artView');
  if (homeView) homeView.style.display = '';
  if (artView) artView.style.display = 'none';

  // Clear sidebar active states
  document.querySelectorAll('.sb-link.active').forEach(el => el.classList.remove('active'));
}

// ── FIX 1: Dynamic read time calculated from actual word count ──
function calcReadTime(htmlBody) {
  const text = htmlBody.replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').trim();
  const words = text.split(/\s+/).filter(w => w.length > 0).length;
  const mins = Math.max(1, Math.round(words / 200));
  return mins;
}

function showArt(id) {
  const art = window.ARTS[id];
  if (!art) return;

  const cat = window.CATS.find(c => c.id === art.cat);
  const s = window.UI_STRINGS || { readTime: 'min read', updated: 'Updated' };

  const homeView = document.getElementById('homeView');
  const artView = document.getElementById('artView');
  if (homeView) homeView.style.display = 'none';
  if (artView) artView.style.display = '';

  // Breadcrumb
  const bc = document.querySelector('.breadcrumb');
  if (bc) {
    bc.innerHTML = `
      <a href="#" onclick="navigate('home')">${s.home || 'Home'}</a>
      <span class="sep">›</span>
      <span class="crumb-cat">${cat ? cat.label : ''}</span>
      <span class="sep">›</span>
      <span>${art.title}</span>`;
  }

  // Title
  const titleEl = document.getElementById('artTitle');
  if (titleEl) titleEl.textContent = art.title;

  // ── FIX 1: Real dynamic read time ──
  const readMins = calcReadTime(art.body || '');
  const metaEl = document.querySelector('.art-meta');
  if (metaEl) {
    metaEl.innerHTML = `
      <span class="meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        ${readMins} ${s.readTime || 'min read'}
      </span>
      <span class="meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
          <polyline points="17 21 17 13 7 13 7 21"></polyline>
          <polyline points="7 3 7 8 15 8"></polyline>
        </svg>
        ${s.updated || 'Updated'} ${art.updated || 'Mar 19, 2026'}
      </span>`;
  }

  // Body
  const bodyEl = document.querySelector('.content-body');
  if (bodyEl) bodyEl.innerHTML = art.body || '';

  // Sidebar active state - open correct category
  document.querySelectorAll('.sb-link.active').forEach(el => el.classList.remove('active'));
  const activeSbLink = document.getElementById(`sb-${id}`);
  if (activeSbLink) {
    activeSbLink.classList.add('active');
    // Auto-open parent category
    if (cat) {
      const catBtn = document.querySelector(`#sb-cat-${cat.id} .sb-cat-btn`);
      const catArts = document.getElementById(`sb-arts-${cat.id}`);
      if (catBtn) catBtn.classList.add('open');
      if (catArts) catArts.classList.add('open');
    }
  }

  // Prev/Next navigation
  const allIds = ALL_IDS;
  const idx = allIds.indexOf(id);
  const prevId = idx > 0 ? allIds[idx - 1] : null;
  const nextId = idx < allIds.length - 1 ? allIds[idx + 1] : null;
  const prevArt = prevId ? window.ARTS[prevId] : null;
  const nextArt = nextId ? window.ARTS[nextId] : null;

  const prevBtn = document.querySelector('.art-nav-btn.prev');
  const nextBtn = document.querySelector('.art-nav-btn.next');
  if (prevBtn) {
    prevBtn.style.visibility = prevArt ? 'visible' : 'hidden';
    if (prevArt) {
      prevBtn.onclick = () => navigate(prevId);
      const prevTitle = prevBtn.querySelector('.art-nav-title');
      if (prevTitle) prevTitle.textContent = prevArt.title;
    }
  }
  if (nextBtn) {
    nextBtn.style.visibility = nextArt ? 'visible' : 'hidden';
    if (nextArt) {
      nextBtn.onclick = () => navigate(nextId);
      const nextTitle = nextBtn.querySelector('.art-nav-title');
      if (nextTitle) nextTitle.textContent = nextArt.title;
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  const btn = document.querySelector('.theme-toggle');
  if (btn) {
    btn.innerHTML = isDark
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ── FIX 2: Improved search with keyword highlighting + context matching ──
let _searchDebounce = null;

function highlightMatch(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(${escaped})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

function getMatchContext(htmlBody, query) {
  // Strip HTML, find the sentence containing the match
  const text = htmlBody.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const lc = text.toLowerCase();
  const idx = lc.indexOf(query.toLowerCase());
  if (idx === -1) return null;
  const start = Math.max(0, idx - 40);
  const end = Math.min(text.length, idx + query.length + 60);
  let snippet = (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
  return highlightMatch(snippet, query);
}

function handleSearch(val) {
  const drop = document.getElementById('searchResults');
  if (!drop) return;

  const query = val.trim();

  // FIX: debounce 150ms
  clearTimeout(_searchDebounce);
  if (!query) {
    drop.style.display = 'none';
    drop.innerHTML = '';
    return;
  }

  _searchDebounce = setTimeout(() => {
    if (!window.ARTS) return;
    const s = window.UI_STRINGS || {};
    const q = query.toLowerCase();

    const results = Object.keys(window.ARTS).filter(id => {
      const a = window.ARTS[id];
      // FIX: search only title and excerpt for primary match, body as fallback
      const titleMatch = a.title.toLowerCase().includes(q);
      const excMatch = (a.exc || '').toLowerCase().includes(q);
      const bodyText = (a.body || '').replace(/<[^>]+>/g, ' ').toLowerCase();
      const bodyMatch = bodyText.includes(q);
      return titleMatch || excMatch || bodyMatch;
    }).slice(0, 6);

    if (!results.length) {
      drop.style.display = 'block';
      drop.innerHTML = `<div class="search-item no-result">${s.noResults || 'No results found.'}</div>`;
      return;
    }

    drop.style.display = 'block';
    drop.innerHTML = results.map(id => {
      const a = window.ARTS[id];
      // FIX: show highlighted title + context where match was found
      const highlightedTitle = highlightMatch(a.title, query);

      // Determine best context to show
      let context = '';
      if (a.title.toLowerCase().includes(q)) {
        // Match in title — show excerpt as context
        context = highlightMatch(a.exc || '', query);
      } else {
        // Match in body — show the actual matching sentence
        context = getMatchContext(a.body || '', query) || highlightMatch(a.exc || '', query);
      }

      return `<div class="search-item" onclick="navigate('${id}');document.getElementById('searchResults').style.display='none';document.getElementById('heroSearch').value='';">
        <strong>${highlightedTitle}</strong>
        <p>${context}</p>
      </div>`;
    }).join('');
  }, 150);
}

// ── FIX 3: Nav search with same improvements ──
function handleNavSearch(val) {
  const query = val.trim();
  if (!query) {
    // If on article view, navigate home when cleared
    if (document.getElementById('homeView') && document.getElementById('homeView').style.display === 'none') return;
    return;
  }
  if (document.getElementById('homeView')) {
    document.getElementById('homeView').style.display = 'none';
  }
  // Reuse handleSearch logic on the hero search
  const heroInput = document.getElementById('heroSearch');
  if (heroInput) {
    heroInput.value = val;
    handleSearch(val);
  }
}

function toggleTs() {
  const drop = document.querySelector('.lang-dropdown');
  if (drop) drop.classList.toggle('open');
}

function toggleLang() {
  const drop = document.querySelector('.lang-dropdown');
  if (drop) drop.classList.toggle('open');
}

function openLb(videoId) {
  const lb = document.getElementById('videoLb');
  if (!lb) return;
  const iframe = lb.querySelector('iframe');
  if (iframe) iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  lb.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeLb() {
  const lb = document.getElementById('videoLb');
  if (!lb) return;
  const iframe = lb.querySelector('iframe');
  if (iframe) iframe.src = '';
  lb.classList.remove('show');
  document.body.style.overflow = '';
}

// Init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
 document.addEventListener('DOMContentLoaded', init);
}
