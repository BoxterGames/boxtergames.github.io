/* One game per slide. Native touch scrolling remains available without JS. */
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track = carousel.querySelector('[data-carousel-track]');
  const items = [...track.children];
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  const pause = carousel.querySelector('[data-carousel-pause]');
  const counter = carousel.querySelector('[data-carousel-counter]');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let userPaused = reducedMotion.matches;
  let pointerInside = false;
  let focusInside = false;
  let inView = false;
  let timer;
  let settleTimer;

  function schedule() {
    clearTimeout(timer);
    const playing = !userPaused && !pointerInside && !focusInside && inView && !document.hidden;
    counter.setAttribute('aria-live', playing ? 'off' : 'polite');
    if (playing && items.length > 1) timer = setTimeout(() => go(current + 1), 5000);
  }
  function render() {
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${items.length}`;
    items.forEach((item, index) => { item.inert = index !== current; });
    pause.setAttribute('aria-pressed', String(userPaused));
    pause.setAttribute('aria-label', userPaused ? 'Включить автолистание игр' : 'Остановить автолистание игр');
    pause.innerHTML = userPaused ? '<span aria-hidden="true">▷</span> Авто' : '<span aria-hidden="true">Ⅱ</span> Пауза';
  }
  function go(index) {
    const previousIndex = current;
    current = (index + items.length) % items.length;
    const adjacent = Math.abs(current - previousIndex) === 1;
    track.scrollTo({left:current * track.clientWidth, behavior:reducedMotion.matches || !adjacent ? 'instant' : 'smooth'});
    render();
    schedule();
  }
  previous.addEventListener('click', () => go(current - 1));
  next.addEventListener('click', () => go(current + 1));
  pause.addEventListener('click', () => { userPaused = !userPaused; render(); schedule(); });
  carousel.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') { pointerInside = true; schedule(); } });
  carousel.addEventListener('pointerleave', () => { pointerInside = false; schedule(); });
  carousel.addEventListener('focusin', () => { focusInside = true; schedule(); });
  carousel.addEventListener('focusout', event => {
    if (!carousel.contains(event.relatedTarget)) { focusInside = false; schedule(); }
  });
  track.addEventListener('scroll', () => {
    clearTimeout(timer);
    clearTimeout(settleTimer);
    settleTimer = setTimeout(() => {
      if (track.clientWidth) current = Math.max(0, Math.min(items.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
      render();
      schedule();
    }, 180);
  }, {passive:true});
  track.addEventListener('keydown', event => {
    if (event.target !== track || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      go(event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : current + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', event => {
    userPaused = event.matches;
    render();
    schedule();
  });
  new IntersectionObserver(entries => {
    inView = entries[0].intersectionRatio >= 0.35;
    schedule();
  }, {threshold:0.35}).observe(carousel);
  new ResizeObserver(() => {
    track.scrollTo({left:current * track.clientWidth, behavior:'instant'});
  }).observe(track);
  [previous, next, pause].forEach(button => { button.hidden = false; });
  previous.disabled = next.disabled = items.length < 2;
  render();
});
