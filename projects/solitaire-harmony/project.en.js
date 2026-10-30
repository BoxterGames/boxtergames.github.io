/* An independent project package. No imports or fetch: works from file:// too. */
(() => {
  const base = 'projects/solitaire-harmony/assets/';
  const modes = [
    {name:'Klondike',label:'Meet the classic',description:'The classic solitaire layout, presented in a fresh visual style.',image:'screen-06.webp',suit:'♠'},
    {name:'Spider',label:'Think a few moves ahead',description:'Spider for those who like to think ahead. More cards, more room for strategy.',image:'screen-05.webp',suit:'♣'},
    {name:'FreeCell',label:'The next move matters',description:'An open layout with room to plan. Every move changes your options.',image:'screen-01.webp',suit:'♦'},
    {name:'Pyramid',label:'Climb to the top',description:'A different layout and a small challenge for a short break.',image:'screen-03.webp',suit:'♥'},
    {name:'TriPeaks',label:'One more peak',description:'Three peaks, a lively pace and another reason to play.',image:'screen-02.webp',suit:'♠'}
  ];
  const shot = (file,alt,extra='') => `<img src="${base+file}" alt="${alt}" ${extra}>`;
  const card = (rank,suit,type,position) => `<div class="sh-card ${type} ${position}" aria-hidden="true"><span>${rank}<small>${suit}</small></span><b>${suit}</b><span>${rank}<small>${suit}</small></span></div>`;
  const project = {
    id:'solitaire-harmony',name:'Solitaire Harmony',short:'Android · released',icon:'♠',category:'GAMES / ANDROID',custom:true,art:shot('screen-06.webp','Solitaire Harmony — Klondike'),
    mount(container,api){
      container.innerHTML=`<article class="sh-page" aria-labelledby="sh-title">
        <section class="sh-hero" data-project-swipe>
          <div class="sh-kicker"><span>CARD PROJECT</span><span class="sh-status"><i></i> AVAILABLE ON GOOGLE PLAY</span></div>
          <div class="sh-hero-grid">
            <div class="sh-intro">
              <div class="sh-app-label">${shot('icon.webp','Solitaire Harmony icon')}<span>SOLITAIRE WITH CHARACTER<span>ANDROID · CARD GAME</span></span></div>
              <h1 id="sh-title">SOLITAIRE<br><span>HARMONY<span class="sh-title-dot">.</span></span></h1>
              <p class="sh-tagline">Familiar rules.<br>A different suit entirely.</p>
              <p class="sh-description">Five classic solitaire games in a striking minimalist world. Deal the cards, change your mood and play at your own pace.</p>
              <div class="sh-actions"><span class="sh-button sh-button-red"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 3 15 9-15 9Z" fill="currentColor"/></svg>Open Google Play</span></div>
              <div class="sh-hero-footnote"><span class="sh-suit-mark" aria-hidden="true">♠ ♥ ♣ ♦</span></div>
            </div>
            <div class="sh-art-stage">
              <div class="sh-orbit" aria-hidden="true"></div><span class="sh-art-index" aria-hidden="true">05</span>
              <div class="sh-background-word" aria-hidden="true">PLAY YOUR WAY</div>
              ${card('Q','♦','sh-card-red','sh-card-left')}${card('A','♠','sh-card-black','sh-card-right')}
              <button class="sh-phone sh-hero-phone" data-sh-image="screen-06.webp" data-sh-caption="Klondike — official game screenshot" aria-label="Enlarge screenshot Solitaire Harmony">${shot('screen-06.webp','Solitaire Harmony gameplay: Klondike mode','fetchpriority="high"')}</button>
              <span class="sh-coordinate sh-coordinate-top" aria-hidden="true">+ A NEW TAKE ON A CLASSIC</span><span class="sh-coordinate sh-coordinate-bottom" aria-hidden="true">♠ / ♥ / ♣ / ♦</span>
            </div>
          </div>
          <div class="sh-facts"><div><strong>05</strong><span>solitaire games<br>in one app</span></div><div><strong>NO RUSH</strong><span>no timers<br>and no rush</span></div><div><strong>OFFLINE</strong><span>play anywhere,<br>even offline</span></div><a href="#sh-origin" data-sh-scroll aria-label="Read about the game and its creator">SCROLL DOWN<span>↓</span></a></div>
        </section>

        <section class="sh-section sh-origin" id="sh-origin" aria-labelledby="sh-origin-title">
          <div class="sh-section-meta"><span>01 / INDEPENDENT PROJECT</span><span>FROM IDEA TO RELEASE</span></div>
          <div class="sh-origin-layout"><div class="sh-origin-copy"><span class="sh-origin-label">BOXTERGAMES / SOLO PROJECT</span><h2 id="sh-origin-title">One game.<br><span>My work.</span></h2><p class="sh-origin-lead">Solitaire Harmony is my independent game, released under the BoxterGames name.</p><p>I created and published the app on Google Play: five classic solitaire games in one Android app.</p><p>Deep black, vibrant suits and clean geometry bring familiar games together in a distinctive visual style.</p><div class="sh-origin-suits" aria-label="Four card suits"><span>♠</span><span>♥</span><span>♣</span><span>♦</span></div><a href="about.html" class="sh-origin-link">ABOUT THE CREATOR <span aria-hidden="true">↗</span></a></div><div class="sh-origin-art"><div class="sh-origin-card" aria-hidden="true"><span>A<small>♠</small></span><b>♠</b><span>A<small>♠</small></span></div><div class="sh-origin-ticket"><span>PROJECT / 01</span><strong>FROM IDEA<br>TO RELEASE<span>.</span></strong><div>ANDROID <i>✦</i> GOOGLE PLAY</div></div><span class="sh-origin-caption">ONE DEVELOPER / FIVE GAMES</span></div></div>
        </section>

        <section class="sh-modes sh-section" id="sh-modes" aria-labelledby="sh-modes-title">
          <div class="sh-section-meta"><span>02 / FIVE MODES</span><span>CHOOSE YOUR GAME</span></div>
          <div class="sh-heading-row"><h2 id="sh-modes-title">Five games.<br><span>One style.</span></h2><p>Klondike, Spider, FreeCell, Pyramid and TriPeaks —<br>each with its own rules and pace.<br>Choose a mode to suit your mood.</p></div>
          <div class="sh-mode-explorer"><div class="sh-mode-list" role="group" aria-label="Solitaire modes">${modes.map((m,i)=>`<button class="sh-mode-button" data-mode="${i}" aria-pressed="${i===0}"><span class="sh-mode-number">0${i+1}</span><span>${m.name}</span><span class="sh-mode-suit" aria-hidden="true">${m.suit}</span><span class="sh-mode-arrow" aria-hidden="true">↗</span></button>`).join('')}<div class="sh-mode-description" aria-live="polite"><h3 id="sh-mode-label">${modes[0].label}</h3><p id="sh-mode-copy">${modes[0].description}</p></div></div>
          <div class="sh-mode-preview"><span class="sh-preview-corner">SCREEN / <span id="sh-mode-counter">01</span></span><button class="sh-phone sh-mode-phone" id="sh-mode-expand" aria-label="Enlarge screenshot Klondike">${shot('screen-06.webp','Solitaire Harmony — Klondike','id="sh-mode-image" loading="lazy"')}</button><span class="sh-preview-note">OFFICIAL SCREENSHOT · CLICK TO ENLARGE</span></div></div>
        </section>

        <section class="sh-section sh-result" id="sh-result" aria-labelledby="sh-result-title">
          <div class="sh-section-meta"><span>03 / RESULT</span><span>PLAY AT YOUR OWN PACE</span></div>
          <div class="sh-release-grid"><div class="sh-release-brand">${shot('icon.webp','Solitaire Harmony icon')}<div>BOXTERGAMES<span>Solitaire Harmony</span></div></div><h2 id="sh-result-title">Five solitaire games.<br><span>Play offline.</span></h2><a class="sh-button sh-button-red" href="https://play.google.com/store/apps/details?id=com.boxtergames.solitaireHarmony" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 3 15 9-15 9Z" fill="currentColor"/></svg>Open Google Play<span>↗</span></a></div>
          <div class="sh-source"><span>Solitaire Harmony · Android · Google Play</span></div>
        </section>

      </article>`;
      let active=0;
      container.querySelectorAll('[data-sh-scroll]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();container.querySelector(link.getAttribute('href')).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
      container.querySelectorAll('[data-sh-image]').forEach(button=>button.addEventListener('click',()=>api.openVisual(shot(button.dataset.shImage,button.dataset.shCaption),button.dataset.shCaption,'Official Solitaire Harmony screenshot from Google Play.')));
      container.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{
        active=Number(button.dataset.mode);const mode=modes[active];
        container.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
        container.querySelector('#sh-mode-image').src=base+mode.image;
        container.querySelector('#sh-mode-image').alt='Solitaire Harmony — '+mode.name;
        container.querySelector('#sh-mode-label').textContent=mode.label;
        container.querySelector('#sh-mode-copy').textContent=mode.description;
        container.querySelector('#sh-mode-counter').textContent='0'+(active+1);
        container.querySelector('#sh-mode-expand').setAttribute('aria-label','Enlarge screenshot '+mode.name);
      }));
      container.querySelector('#sh-mode-expand').addEventListener('click',()=>api.openVisual(shot(modes[active].image,'Solitaire Harmony — '+modes[active].name),modes[active].name+' / Solitaire Harmony','Official screenshot from Google Play.'));
    }
  };
  window.PortfolioProjects=window.PortfolioProjects||{};
  window.PortfolioProjects[project.id]=project;
})();
