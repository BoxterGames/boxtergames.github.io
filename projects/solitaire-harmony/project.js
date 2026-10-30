/* An independent project package. No imports or fetch: works from file:// too. */
(() => {
  const base = 'projects/solitaire-harmony/assets/';
  const modes = [
    {name:'Klondike',label:'Знакомство с классикой',description:'Та самая «Косынка». Знакомая раскладка в новом визуальном исполнении.',image:'screen-06.webp',suit:'♠'},
    {name:'Spider',label:'На несколько ходов вперёд',description:'«Паук» для тех, кто любит подумать. Больше карт, больше пространства для стратегии.',image:'screen-05.webp',suit:'♣'},
    {name:'FreeCell',label:'Всё решает следующий ход',description:'Открытая раскладка и место для планирования. Каждый ход меняет возможности.',image:'screen-01.webp',suit:'♦'},
    {name:'Pyramid',label:'Постепенно к вершине',description:'Другой силуэт игрового поля. Короткий перерыв со своей маленькой задачей.',image:'screen-03.webp',suit:'♥'},
    {name:'TriPeaks',label:'Ещё одна вершина',description:'Три пика, динамичный ритм и ещё один повод разложить партию.',image:'screen-02.webp',suit:'♠'}
  ];
  const shot = (file,alt,extra='') => `<img src="${base+file}" alt="${alt}" ${extra}>`;
  const card = (rank,suit,type,position) => `<div class="sh-card ${type} ${position}" aria-hidden="true"><span>${rank}<small>${suit}</small></span><b>${suit}</b><span>${rank}<small>${suit}</small></span></div>`;
  const project = {
    id:'solitaire-harmony',name:'Solitaire Harmony',short:'Android · релиз',icon:'♠',category:'ИГРЫ / ANDROID',custom:true,art:shot('screen-06.webp','Solitaire Harmony — Klondike'),
    mount(container,api){
      container.innerHTML=`<article class="sh-page" aria-labelledby="sh-title">
        <section class="sh-hero" data-project-swipe>
          <div class="sh-kicker"><span>CARD PROJECT</span><span class="sh-status"><i></i> ДОСТУПНА В GOOGLE PLAY</span></div>
          <div class="sh-hero-grid">
            <div class="sh-intro">
              <div class="sh-app-label">${shot('icon.webp','Иконка Solitaire Harmony')}<span>ПАСЬЯНСЫ С ХАРАКТЕРОМ<span>ANDROID · CARD GAME</span></span></div>
              <h1 id="sh-title">SOLITAIRE<br><span>HARMONY<span class="sh-title-dot">.</span></span></h1>
              <p class="sh-tagline">Знакомые правила.<br>Совсем другая масть.</p>
              <p class="sh-description">Пять классических пасьянсов в графичном минималистичном мире. Раскладывайте карты, переключайте настроение и играйте в своём ритме.</p>
              <div class="sh-actions"><span class="sh-button sh-button-red"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 3 15 9-15 9Z" fill="currentColor"/></svg>Открыть Google Play</span></div>
              <div class="sh-hero-footnote"><span class="sh-suit-mark" aria-hidden="true">♠ ♥ ♣ ♦</span></div>
            </div>
            <div class="sh-art-stage">
              <div class="sh-orbit" aria-hidden="true"></div><span class="sh-art-index" aria-hidden="true">05</span>
              <div class="sh-background-word" aria-hidden="true">PLAY YOUR WAY</div>
              ${card('Q','♦','sh-card-red','sh-card-left')}${card('A','♠','sh-card-black','sh-card-right')}
              <button class="sh-phone sh-hero-phone" data-sh-image="screen-06.webp" data-sh-caption="Klondike — официальный скриншот игры" aria-label="Увеличить скриншот Solitaire Harmony">${shot('screen-06.webp','Реальный экран Solitaire Harmony: режим Klondike','fetchpriority="high"')}</button>
              <span class="sh-coordinate sh-coordinate-top" aria-hidden="true">+ A NEW TAKE ON A CLASSIC</span><span class="sh-coordinate sh-coordinate-bottom" aria-hidden="true">♠ / ♥ / ♣ / ♦</span>
            </div>
          </div>
          <div class="sh-facts"><div><strong>05</strong><span>пасьянсов<br>в одном приложении</span></div><div><strong>NO RUSH</strong><span>без таймеров<br>и лишней спешки</span></div><div><strong>OFFLINE</strong><span>игра всегда рядом,<br>даже без интернета</span></div><a href="#sh-origin" data-sh-scroll aria-label="Читать об игре и её авторе">ЛИСТАЙТЕ НИЖЕ<span>↓</span></a></div>
        </section>

        <section class="sh-section sh-origin" id="sh-origin" aria-labelledby="sh-origin-title">
          <div class="sh-section-meta"><span>01 / ЛИЧНЫЙ ПРОЕКТ</span><span>FROM IDEA TO RELEASE</span></div>
          <div class="sh-origin-layout"><div class="sh-origin-copy"><span class="sh-origin-label">BOXTERGAMES / SOLO PROJECT</span><h2 id="sh-origin-title">Одна игра.<br><span>Моя работа.</span></h2><p class="sh-origin-lead">Solitaire Harmony — моя самостоятельная игра, выпущенная под именем BoxterGames.</p><p>Я создал приложение и довёл его до публикации в Google Play: пять классических пасьянсов в одном Android-приложении.</p><p>Глубокий чёрный, яркие масти и чёткая геометрия объединяют знакомые игры в едином визуальном стиле.</p><div class="sh-origin-suits" aria-label="Четыре карточные масти"><span>♠</span><span>♥</span><span>♣</span><span>♦</span></div><a href="about.html" class="sh-origin-link">ОБ АВТОРЕ <span aria-hidden="true">↗</span></a></div><div class="sh-origin-art"><div class="sh-origin-card" aria-hidden="true"><span>A<small>♠</small></span><b>♠</b><span>A<small>♠</small></span></div><div class="sh-origin-ticket"><span>PROJECT / 01</span><strong>FROM IDEA<br>TO RELEASE<span>.</span></strong><div>ANDROID <i>✦</i> GOOGLE PLAY</div></div><span class="sh-origin-caption">ONE DEVELOPER / FIVE GAMES</span></div></div>
        </section>

        <section class="sh-modes sh-section" id="sh-modes" aria-labelledby="sh-modes-title">
          <div class="sh-section-meta"><span>02 / ПЯТЬ РЕЖИМОВ</span><span>ВЫБЕРИТЕ СВОЮ ПАРТИЮ</span></div>
          <div class="sh-heading-row"><h2 id="sh-modes-title">Пять игр.<br><span>Один характер.</span></h2><p>Klondike, Spider, FreeCell, Pyramid и TriPeaks —<br>каждый со своими правилами и ритмом.<br>Выберите режим под настроение.</p></div>
          <div class="sh-mode-explorer"><div class="sh-mode-list" role="group" aria-label="Варианты пасьянса">${modes.map((m,i)=>`<button class="sh-mode-button" data-mode="${i}" aria-pressed="${i===0}"><span class="sh-mode-number">0${i+1}</span><span>${m.name}</span><span class="sh-mode-suit" aria-hidden="true">${m.suit}</span><span class="sh-mode-arrow" aria-hidden="true">↗</span></button>`).join('')}<div class="sh-mode-description" aria-live="polite"><h3 id="sh-mode-label">${modes[0].label}</h3><p id="sh-mode-copy">${modes[0].description}</p></div></div>
          <div class="sh-mode-preview"><span class="sh-preview-corner">SCREEN / <span id="sh-mode-counter">01</span></span><button class="sh-phone sh-mode-phone" id="sh-mode-expand" aria-label="Увеличить скриншот Klondike">${shot('screen-06.webp','Solitaire Harmony — Klondike','id="sh-mode-image" loading="lazy"')}</button><span class="sh-preview-note">ОФИЦИАЛЬНЫЙ СКРИНШОТ · НАЖМИТЕ ДЛЯ УВЕЛИЧЕНИЯ</span></div></div>
        </section>

        <section class="sh-section sh-result" id="sh-result" aria-labelledby="sh-result-title">
          <div class="sh-section-meta"><span>03 / РЕЗУЛЬТАТ</span><span>ИГРАЙТЕ В СВОЁМ РИТМЕ</span></div>
          <div class="sh-release-grid"><div class="sh-release-brand">${shot('icon.webp','Иконка Solitaire Harmony')}<div>BOXTERGAMES<span>Solitaire Harmony</span></div></div><h2 id="sh-result-title">Пять пасьянсов.<br><span>Игра без интернета.</span></h2><a class="sh-button sh-button-red" href="https://play.google.com/store/apps/details?id=com.boxtergames.solitaireHarmony" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 3 15 9-15 9Z" fill="currentColor"/></svg>Открыть Google Play<span>↗</span></a></div>
          <div class="sh-source"><span>Solitaire Harmony · Android · Google Play</span></div>
        </section>

      </article>`;
      let active=0;
      container.querySelectorAll('[data-sh-scroll]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();container.querySelector(link.getAttribute('href')).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
      container.querySelectorAll('[data-sh-image]').forEach(button=>button.addEventListener('click',()=>api.openVisual(shot(button.dataset.shImage,button.dataset.shCaption),button.dataset.shCaption,'Официальный скриншот Solitaire Harmony из Google Play.')));
      container.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{
        active=Number(button.dataset.mode);const mode=modes[active];
        container.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
        container.querySelector('#sh-mode-image').src=base+mode.image;
        container.querySelector('#sh-mode-image').alt='Solitaire Harmony — '+mode.name;
        container.querySelector('#sh-mode-label').textContent=mode.label;
        container.querySelector('#sh-mode-copy').textContent=mode.description;
        container.querySelector('#sh-mode-counter').textContent='0'+(active+1);
        container.querySelector('#sh-mode-expand').setAttribute('aria-label','Увеличить скриншот '+mode.name);
      }));
      container.querySelector('#sh-mode-expand').addEventListener('click',()=>api.openVisual(shot(modes[active].image,'Solitaire Harmony — '+modes[active].name),modes[active].name+' / Solitaire Harmony','Официальный скриншот из Google Play.'));
    }
  };
  window.PortfolioProjects=window.PortfolioProjects||{};
  window.PortfolioProjects[project.id]=project;
})();
