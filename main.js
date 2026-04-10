/* ── HELP CENTRE ENGINE ── */

let ALL_IDS = [];

function updateAllIds() {
  if (!window.CATS) return;
  ALL_IDS = [];
  window.CATS.forEach(c => c.arts.forEach(id => ALL_IDS.push(id)));
}

function init() {
  updateAllIds();
  renderStaticStrings();
  renderCatGrid();
  renderVideoGrid();
  renderResourceGrid();
  renderSidebar();
  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange();

  // Theme: default dark
  const savedTheme = localStorage.getItem('hc-theme') || 'dark';
  if (savedTheme === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');

  // Reading progress bar
  const mainEl = document.querySelector('main');
  if (mainEl) {
    mainEl.addEventListener('scroll', () => {
      const bar = document.getElementById('readingProgress');
      if (!bar) return;
      const h = mainEl.scrollHeight - mainEl.clientHeight;
      const pc = (mainEl.scrollTop / h) * 100;
      bar.style.width = pc + '%';
    });
  }

  // Close lang dropdown on outside click
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-selector')) {
      const drop = document.getElementById('langDropdown');
      if (drop) drop.classList.remove('active');
    }
  });
}

function renderStaticStrings() {
  if (!window.UI_STRINGS) return;
  const s = window.UI_STRINGS;

  const tagline = document.querySelector('.nav-logo-text .tagline');
  if (tagline) tagline.textContent = s.helpCentre;
  const navInput = document.querySelector('.nav-search-input');
  if (navInput) navInput.placeholder = s.searchGuides;
  const navLinks = document.querySelectorAll('.nav-links a');
  if (navLinks.length >= 2) {
    navLinks[0].textContent = s.resources;
    navLinks[1].textContent = s.tutorials;
  } else if (navLinks.length === 1) {
    navLinks[0].textContent = s.tutorials;
  }
  const tryProduct = document.querySelector('.btn.btn-primary[href*="doc-scribe.ai"]');
  if (tryProduct) tryProduct.textContent = s.tryProduct;

  const heroH1 = document.querySelector('.hero h1');
  if (heroH1) heroH1.innerHTML = s.howCanWeHelp;
  const heroP = document.querySelector('.hero p');
  if (heroP) heroP.textContent = s.exploreGuides;
  const heroInput = document.getElementById('heroSearch');
  if (heroInput) heroInput.placeholder = s.searchPlaceholder;

  const sectionTitles = document.querySelectorAll('.section-title');
  if (sectionTitles[0]) sectionTitles[0].textContent = s.browseByTopic;
  if (sectionTitles[1]) sectionTitles[1].textContent = s.videoTutorials;
  if (sectionTitles[2]) sectionTitles[2].textContent = s.resourcesAndPapers;

  const sCtaH3 = document.querySelector('.support-cta h3');
  if (sCtaH3) sCtaH3.textContent = s.stillNeedHelp;
  const sCtaP = document.querySelector('.support-cta p');
  if (sCtaP) sCtaP.textContent = s.supportTeamAvailability;
  const sCtaBtn = document.querySelector('.support-cta .btn');
  if (sCtaBtn) sCtaBtn.textContent = s.contactSupport;

  const footerDesc = document.querySelector('.footer-brand p');
  if (footerDesc && s.footerDesc) footerDesc.textContent = s.footerDesc;

  const footerCols = document.querySelectorAll('.footer-col');
  footerCols.forEach(col => {
    const h4 = col.querySelector('h4');
    if (!h4) return;
    const links = col.querySelectorAll('a');
    if (h4.textContent.toLowerCase().includes('solution')) {
      h4.textContent = s.solution || 'Solution';
      if (links[0]) links[0].textContent = s.features || 'Features';
      if (links[1]) links[1].textContent = s.securityTitle || 'Security';
      if (links[2]) links[2].textContent = s.pricing || 'Pricing';
      if (links[3]) links[3].textContent = s.enterprise || 'Enterprise';
    } else if (h4.textContent.toLowerCase().includes('support')) {
      h4.textContent = s.support || 'Support';
      if (links[0]) links[0].textContent = s.helpCentre || 'Help Centre';
      if (links[1]) links[1].textContent = s.apiDocs || 'API Docs';
      if (links[2]) links[2].textContent = s.systemStatus || 'System Status';
      if (links[3]) links[3].textContent = s.contact || 'Contact';
    } else if (h4.textContent.toLowerCase().includes('legal')) {
      h4.textContent = s.legal || 'Legal';
      if (links[0]) links[0].textContent = s.privacyPolicy || 'Privacy Policy';
      if (links[1]) links[1].textContent = s.termsOfService || 'Terms of Service';
      if (links[2]) links[2].textContent = s.cookiePolicy || 'Cookie Policy';
      if (links[3]) links[3].textContent = s.securityTitle || 'Security';
    }
  });

  const footerBottomP = document.querySelector('.footer-bottom p');
  if (footerBottomP) footerBottomP.innerHTML = `&copy; 2026 Doc-Scribe<span>.ai</span> — ${s.allRightsReserved}`;
  const footerBottomMsg = document.querySelector('.footer-bottom div');
  if (footerBottomMsg) footerBottomMsg.textContent = s.builtWithPrecision;
}

function renderSidebar() {
  const sb = document.getElementById('sidebar');
  if (!sb || !window.CATS) return;
  const s = window.UI_STRINGS || { browseAllSupport: 'Browse All Support' };

  sb.innerHTML = `
    <div class="sidebar-head">
      <a href="#" class="sb-home-link" onclick="showHome(); return false;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        ${s.browseAllSupport}
      </a>
    </div>
  ` + window.CATS.map(c => `
    <div class="sb-cat">
      <button class="sb-cat-btn" onclick="toggleSb(this)">
        <span class="sb-cat-ico" style="background:${c.bg}; color:${c.fg}">${c.icon}</span>
        ${c.title}
        <span class="sb-chevron">›</span>
      </button>
      <div class="sb-arts">
        ${c.arts.map(id => `
          <a href="#${id}" class="sb-link" id="sb-${id}">${window.ARTS[id] ? window.ARTS[id].title : id}</a>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleSb(btn) {
  const arts = btn.nextElementSibling;
  const isOpen = arts.classList.contains('open');
  document.querySelectorAll('.sb-arts').forEach(ea => ea.classList.remove('open'));
  document.querySelectorAll('.sb-cat-btn').forEach(eb => eb.classList.remove('open'));
  if (!isOpen) {
    btn.classList.add('open');
    arts.classList.add('open');
  }
}

function renderCatGrid() {
  const grid = document.getElementById('catGrid');
  if (!grid || !window.CATS) return;
  const s = window.UI_STRINGS || { moreArticles: 'more', articlesLabel: 'articles' };

  grid.innerHTML = window.CATS.map(c => `
    <div class="cat-card" onclick="showArt('${c.arts[0]}')">
      <div class="cat-icon" style="background:${c.bg}; color:${c.fg}">${c.icon}</div>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="cat-art-list">
        ${c.arts.slice(0, 3).map(id => `<span class="cat-art-item">${window.ARTS[id] ? window.ARTS[id].title : id}</span>`).join('')}
        ${c.arts.length > 3 ? `<span class="cat-art-item muted">+${c.arts.length - 3} ${s.moreArticles}</span>` : ''}
      </div>
      <div class="cat-footer">${c.arts.length} ${s.articlesLabel} ›</div>
    </div>
  `).join('');
}

function renderVideoGrid() {
  const grid = document.getElementById('videoGrid');
  if (!grid || !window.VIDEOS) return;

  grid.innerHTML = window.VIDEOS.map(v => `
    <div class="video-card" onclick="window.open('${v.url}', '_blank')">
      <div class="video-thumb">
        <img src="${v.thumb}" alt="${v.title}">
        <div class="play-icon">&#9654;</div>
      </div>
      <div class="video-info">
        <div class="video-label">${v.label}</div>
        <h4>${v.title}</h4>
      </div>
    </div>
  `).join('');
}

function renderResourceGrid() {
  const grid = document.getElementById('resourceGrid');
  if (!grid || !window.PAPERS) return;

  grid.innerHTML = window.PAPERS.map(p => `
    <div class="cat-card wp-card" onclick="window.open('${p.file}', '_blank')">
      <div class="cat-icon">&#128196;</div>
      <div class="wp-tag">${p.tag}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `).join('');
}

const SECTION_IDS = ['resources', 'tutorials'];

function handleRouteChange() {
  const id = window.location.hash.slice(1);
  if (id && SECTION_IDS.includes(id)) {
    // Show home view, then smooth-scroll to the named section
    document.getElementById('homeView').style.display = 'block';
    document.getElementById('articleView').style.display = 'none';
    document.getElementById('sidebar').style.display = 'none';
    document.querySelectorAll('.sb-link').forEach(l => l.classList.remove('active'));
    requestAnimationFrame(() => {
      const section = document.getElementById(id);
      const main = document.querySelector('main');
      if (section && main) {
        main.scrollTo({ top: section.offsetTop - 24, behavior: 'smooth' });
      }
    });
  } else if (id && window.ARTS && window.ARTS[id]) {
    showArt(id);
  } else {
    showHome();
  }
}

function showHome() {
  const currentHash = window.location.hash.slice(1);
  if (currentHash && !SECTION_IDS.includes(currentHash)) {
    window.location.hash = '';
    return;
  }
  document.getElementById('homeView').style.display = 'block';
  document.getElementById('articleView').style.display = 'none';
  document.getElementById('sidebar').style.display = 'none';
  document.querySelectorAll('.sb-link').forEach(l => l.classList.remove('active'));
  const main = document.querySelector('main');
  if (main) main.scrollTo({ top: 0, behavior: 'instant' });
}

function showArt(id) {
  const art = window.ARTS[id];
  if (!art) return;
  const cat = window.CATS.find(c => c.id === art.cat);
  const s = window.UI_STRINGS || { readTime: 'min read', updated: 'Updated', previous: 'Previous', next: 'Next', home: 'Home' };

  document.getElementById('homeView').style.display = 'none';
  document.getElementById('articleView').style.display = 'block';
  document.getElementById('sidebar').style.display = 'block';
  document.getElementById('artTitle').textContent = art.title;
  document.getElementById('artBody').innerHTML = art.body;

  const meta = `
    <div class="art-meta">
      <span class="meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        4 ${s.readTime}
      </span>
      <span class="meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
          <polyline points="17 21 17 13 7 13 7 21"/>
          <polyline points="7 3 7 8 15 8"/>
        </svg>
        ${s.updated} Mar 19, 2026
      </span>
    </div>`;
  document.getElementById('artBody').insertAdjacentHTML('afterbegin', meta);

  document.getElementById('breadcrumb').innerHTML = `
    <a href="#" onclick="showHome(); return false;">${s.home}</a>
    <span class="sep">›</span>
    <span class="crumb-cat">${cat ? cat.title : ''}</span>
    <span class="sep">›</span>
    ${art.title}`;

  document.querySelectorAll('.sb-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.sb-arts').forEach(ea => ea.classList.remove('open'));
  document.querySelectorAll('.sb-cat-btn').forEach(eb => eb.classList.remove('open'));
  const activeLink = document.getElementById('sb-' + id);
  if (activeLink) {
    activeLink.classList.add('active');
    const parentContainer = activeLink.closest('.sb-arts');
    const parentBtn = parentContainer.previousElementSibling;
    parentContainer.classList.add('open');
    parentBtn.classList.add('open');
  }

  const idx = ALL_IDS.indexOf(id);
  const prevId = idx > 0 ? ALL_IDS[idx - 1] : null;
  const nextId = idx < ALL_IDS.length - 1 ? ALL_IDS[idx + 1] : null;

  document.getElementById('artNav').innerHTML = `
    ${prevId ? `
      <a href="#${prevId}" class="art-nav-btn prev">
        <span>&#8249; ${s.previous}</span>
        <div class="art-nav-title">${window.ARTS[prevId].title}</div>
      </a>` : '<div></div>'}
    ${nextId ? `
      <a href="#${nextId}" class="art-nav-btn next">
        <span>${s.next} &#8250;</span>
        <div class="art-nav-title">${window.ARTS[nextId].title}</div>
      </a>` : '<div></div>'}`;

  const mainEl = document.querySelector('main');
  if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'instant' });
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('hc-theme', isDark ? 'dark' : 'light');
}

function handleSearch(val) {
  const drop = document.getElementById('searchResults');
  if (!val.trim()) { drop.style.display = 'none'; return; }
  const s = window.UI_STRINGS || { noResults: 'No results found.' };
  if (!window.ARTS) return;

  const results = Object.keys(window.ARTS).filter(id => {
    const a = window.ARTS[id];
    const q = val.toLowerCase();
    const bodyText = a.body.replace(/<[^>]*>/g, '').toLowerCase();
    return a.title.toLowerCase().includes(q) || a.exc.toLowerCase().includes(q) || bodyText.includes(q);
  });

  if (results.length) {
    drop.innerHTML = results.slice(0, 6).map(id => `
      <div class="search-item" onclick="location.hash='#${id}'; document.getElementById('searchResults').style.display='none'; document.getElementById('heroSearch').value=''">
        <strong>${window.ARTS[id].title}</strong>
        <p>${window.ARTS[id].exc}</p>
      </div>`).join('');
    drop.style.display = 'block';
  } else {
    drop.innerHTML = `<div class="search-item muted">${s.noResults}</div>`;
    drop.style.display = 'block';
  }
}

function handleNavSearch(val) {
  if (!val.trim()) return;
  if (document.getElementById('homeView').style.display === 'none') showHome();
  document.getElementById('heroSearch').value = val;
  handleSearch(val);
}

function toggleTs(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.ts-q').forEach(q => q.classList.remove('open'));
  document.querySelectorAll('.ts-a').forEach(a => a.classList.remove('open'));
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}

function toggleLang() {
  document.getElementById('langDropdown').classList.toggle('active');
}

function openLb(src) {
  window.open(src, '_blank');
}

function closeLb() {}

init();
