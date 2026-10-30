(() => {
  const english = /(?:index|about)\.en\.html$/.test(location.pathname);
  // Restore the current view after switching translations, including when a section
  // fragment would otherwise make the browser jump to an anchor on the new page.
  try {
    const saved = JSON.parse(sessionStorage.getItem('portfolio-language-scroll') || 'null');
    if (saved && saved.path === location.pathname) {
      sessionStorage.removeItem('portfolio-language-scroll');
      const restore = () => window.scrollTo({top: saved.top, left: saved.left, behavior: 'instant'});
      window.addEventListener('load', () => { restore(); requestAnimationFrame(restore); }, {once: true});
    }
  } catch (_) {}
  let preference = null;
  try { preference = localStorage.getItem('portfolio-language'); } catch (_) {}
  const language = preference === 'ru' || preference === 'en'
    ? preference
    : (/^ru(?:-|$)/i.test(navigator.language || '') ? 'ru' : 'en');
  if (!english && language === 'en') {
    const target = location.pathname.replace(/(index|about)\.html$/, '$1.en.html').replace(/\/$/, '/index.en.html');
    if (target !== location.pathname) location.replace(target + location.search + location.hash);
  }
  document.addEventListener('click', event => {
    document.querySelectorAll('.language-switch[open]').forEach(menu => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const menu = document.querySelector('.language-switch[open]');
    if (menu) { menu.open = false; menu.querySelector('summary').focus(); }
  });
  document.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    if (link.dataset.language) {
      event.preventDefault();
      const selected = link.dataset.language;
      if ((selected === 'en') === english) {
        link.closest('details').open = false;
        return;
      }
      const target = new URL(link.href);
      try { sessionStorage.setItem('portfolio-language-scroll', JSON.stringify({path: target.pathname, top: window.scrollY, left: window.scrollX})); } catch (_) {}
      try { localStorage.setItem('portfolio-language', selected); } catch (_) {}
      const page = /about(?:\.en)?\.html$/.test(location.pathname) ? 'about' : 'index';
      location.href = page + (selected === 'en' ? '.en' : '') + '.html' + location.search + location.hash;
      return;
    }
    // Preserve an explicitly opened English page when navigating within the portfolio.
    if (english && link.origin === location.origin && /\/(index|about)\.html$/.test(link.pathname)) {
      link.pathname = link.pathname.replace(/(index|about)\.html$/, '$1.en.html');
    }
  });
})();
