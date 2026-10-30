(() => {
  const english = /(?:index|about)\.en\.html$/.test(location.pathname);
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
    const link = event.target.closest('a');
    if (!link) return;
    if (link.dataset.language) {
      event.preventDefault();
      const selected = link.dataset.language;
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
