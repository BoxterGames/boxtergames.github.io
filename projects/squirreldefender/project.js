/* Self-contained project: local assets, no build step or external requests. */
(() => {
  const base = 'projects/squirreldefender/assets/';
  const acorn = `<svg viewBox="0 0 64 72" fill="none" aria-hidden="true"><path d="M35 16c-1-9 3-12 10-14" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M13 32c0 21 9 26 19 35 12-10 21-16 21-35" fill="currentColor"/><path d="M7 32c0-15 10-22 25-22s25 7 25 22Z" fill="currentColor"/><path d="m16 20 30 9M24 15l27 8M12 26l25 7" stroke="#172e24" stroke-width="2"/></svg>`;
  const image = (id, alt, attrs='') => `<img src="${base}screen-${String(id).padStart(2,'0')}.webp" alt="${alt}" width="1080" height="1920" ${attrs}>`;
  const groups = [
    {name:'На защите',note:'Волна за волной',copy:'Белка занимает позицию, пока лесорубы приближаются к дереву.',shots:[14,11,12],labels:['Лесорубы на тропе','Оборона дерева','Схватка у дерева']},
    {name:'Передышка',note:'Время подготовиться',copy:'Между схватками можно выбрать снаряжение и подготовиться к следующей встрече.',shots:[10,13],labels:['Выбор снаряжения','Подготовка к схватке']},
    {name:'Лесной мир',note:'Место для истории',copy:'Загляните туда, где разворачивается история маленького защитника.',shots:[8,9],labels:['Лесная поляна','Лес перед схваткой']}
  ];
  const project = {
    id:'squirreldefender',name:'Squirrel Defender',short:'Игра · защита леса',icon:acorn,category:'ИГРЫ / ЗАЩИТА ЛЕСА',custom:true,
    themeColor:'#101e18',description:'Squirrel Defender от boxtergames: маленький защитник большого леса. Сражения, усиления и живой low-poly мир.',label:'PROJECT 02 / SQUIRREL DEFENDER',
    mount(container,api){
      container.innerHTML=`<article class="sd-page" aria-labelledby="sd-title">
        <section class="sd-hero" data-project-swipe>
          <div class="sd-forest-backdrop" aria-hidden="true"></div>
          <div class="sd-topline"><span><i></i> BOXTERGAMES / GAME NO. 02</span><span>THE FOREST FIGHTS BACK</span></div>
          <div class="sd-hero-grid">
            <div class="sd-intro"><div class="sd-eyebrow"><span class="sd-rule"></span> ЭТО МОЁ ДЕРЕВО. И ТОЧКА.</div>
              <h1 id="sd-title"><span>SQUIRREL</span><span>DEFENDER</span></h1>
              <p class="sd-tagline">Маленькая белка.<br><strong>Большие проблемы.</strong><span>Для лесорубов, конечно.</span></p>
              <p class="sd-description">Они пришли за древесиной.<br>Но не учли кое-кого с пушистым хвостом<br>и очень метким желудём.</p>
              <button class="sd-button" type="button" data-sd-beta-open>JOIN BETATEST <span aria-hidden="true">↗</span></button>
              <div class="sd-hero-note">${acorn}<span>ЗАПАСЫ ЕСТЬ.<br>ТЕРПЕНИЯ — НЕТ.</span></div>
            </div>
            <div class="sd-scene">
              <span class="sd-scene-word" aria-hidden="true">GO<br>NUTS!</span>
              <div class="sd-sunburst" aria-hidden="true"></div>
              <img class="sd-mascot" src="${base}hero-squirrel.png" alt="Белка-защитник в зелёной шляпе с пером" fetchpriority="high">
              <span class="sd-flying-acorn sd-acorn-one" aria-hidden="true">${acorn}</span><span class="sd-flying-acorn sd-acorn-two" aria-hidden="true">${acorn}</span>
              <svg class="sd-throw-path" viewBox="0 0 500 500" aria-hidden="true"><path d="M80 380C-70 90 460 10 445 180" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 12"/></svg>
              <div class="sd-warning"><span>ВНИМАНИЕ!</span><strong>ЛЕСОРУБАМ<br>ВХОД ВОСПРЕЩЁН.</strong></div>
              <button class="sd-game-peek" data-sd-shot="14" data-caption="На защите дерева" aria-label="Увеличить игровой кадр: защита дерева">${image(14,'Белка на ветке защищает дерево от лесорубов')}<span>А ВОТ И ОНИ.<b>ИГРОВОЙ КАДР ↗</b></span></button>
            </div>
          </div>
          <div class="sd-hero-bottom"><span>МАЛЕНЬКИЙ ГЕРОЙ / БОЛЬШОЙ ХАРАКТЕР</span><a href="#sd-story" data-sd-scroll>ОСТОРОЖНО, ЖЁЛУДИ <span aria-hidden="true">↓</span></a></div>
          <div class="sd-treetops" aria-hidden="true"></div>
        </section>
        <div class="sd-ticker" aria-hidden="true"><div class="sd-ticker-track">${Array.from({length:2},()=>`<span class="sd-ticker-group"><span>HANDS OFF MY TREE!</span>${acorn}<span>ЛАПЫ ПРОЧЬ ОТ МОЕГО ДЕРЕВА!</span>${acorn}<span>HANDS OFF MY TREE!</span>${acorn}<span>ЛАПЫ ПРОЧЬ ОТ МОЕГО ДЕРЕВА!</span>${acorn}</span>`).join('')}</div></div>
        <section class="sd-story" id="sd-story">
          <div class="sd-section-meta"><span>01 / ПРАВИЛА ЛЕСА</span><span>ПРАВИЛА ПРОСТЫЕ. ЛЕС — НЕТ.</span></div>
          <div class="sd-story-grid"><div><h2>ЛЕС — НАШ.<br>ЖЁЛУДЬ —<br><em>ВАШ.</em></h2></div><div class="sd-story-copy"><p class="sd-lead">Топоры против желудей.<br>Ставки — за лес.</p><p>Лесорубы идут к дереву, а белка занимает оборону на ветке. Впереди — волны незваных гостей, снаряжение и борьба за каждый кусочек своего леса.</p><p>Держите позицию, готовьтесь к следующей схватке и докажите, что даже у маленького защитника может быть большой характер.</p><div class="sd-story-tags"><span>ЗАЩИТА ДЕРЕВА</span><span>ВОЛНЫ ЛЕСОРУБОВ</span><span>СНАРЯЖЕНИЕ</span></div></div></div>
        </section>

        <section class="sd-fieldnotes" id="sd-fieldnotes" aria-labelledby="sd-gallery-title">
          <div class="sd-section-meta"><span>02 / ИГРОВОЙ ПРОЦЕСС</span><span>7 КАДРОВ ИЗ ИГРЫ</span></div>
          <div class="sd-gallery-heading"><h2 id="sd-gallery-title">ВОЛНА<br><em>ЗА ВОЛНОЙ.</em></h2><p>Лесорубы не собираются уходить сами. Защищайте дерево, подбирайте снаряжение и готовьтесь к новым встречам на лесной тропе.</p></div>
          <div class="sd-tabs" role="group" aria-label="Разделы галереи">${groups.map((g,i)=>`<button data-sd-group="${i}" aria-pressed="${i===0}"><span>0${i+1}</span>${g.name}<span aria-hidden="true">↗</span></button>`).join('')}</div>
          <div class="sd-explorer">
            <div class="sd-note"><span class="sd-note-overline">РАЗДЕЛ / <span id="sd-group-counter">01</span></span><h3 id="sd-note-title">${groups[0].name}</h3><p id="sd-note-copy">${groups[0].copy}</p><div class="sd-thumbnails" id="sd-thumbnails" role="group" aria-label="Скриншоты выбранного раздела"></div><p class="sd-note-hint">Кадры из игры · выберите, чтобы рассмотреть детали.</p><div class="sd-pagination"><button id="sd-shot-prev" aria-label="Предыдущий скриншот">←</button><span id="sd-shot-counter" aria-live="polite"></span><button id="sd-shot-next" aria-label="Следующий скриншот">→</button></div></div>
            <div class="sd-preview"><div class="sd-preview-caption"><span>КАДР ИЗ ИГРЫ</span><span id="sd-preview-number">01 / 03</span></div><button class="sd-preview-image" id="sd-expand" aria-label="Увеличить выбранный скриншот">${image(14,groups[0].labels[0],'id="sd-active-image" loading="lazy"')}</button><span class="sd-preview-bottom" id="sd-preview-label">${groups[0].labels[0]}</span></div>
          </div>
        </section>
        <section class="sd-maker sd-maker-new" aria-labelledby="sd-maker-title">
          <div class="sd-maker-inner">
            <div class="sd-section-meta"><span>03 / СДЕЛАНО В BOXTERGAMES</span><span>ЛИЧНЫЙ ПРОЕКТ. ЦЕЛЫЙ ЛЕС.</span></div>
            <div class="sd-maker-layout">
              <div class="sd-maker-story"><span class="sd-maker-kicker">${acorn} ЛИЧНОЕ ДЕЛО</span><h2 id="sd-maker-title">МОЙ ЛЕС.<br><em>МОИ ПРАВИЛА.</em></h2><p class="sd-maker-intro">Привет, я Роман. Squirrel Defender — моя самостоятельная игра под именем BoxterGames.</p><p>Я разрабатываю её на Unity и C#: работаю над игровым процессом, интерфейсом и сборкой. Хотелось создать мир, в котором маленькая белка может дать отпор целой толпе лесорубов.</p><a class="sd-maker-link" href="about.html">БОЛЬШЕ ОБО МНЕ <span aria-hidden="true">↗</span></a></div>
              <div class="sd-maker-visual"><span class="sd-maker-bigword" aria-hidden="true">GO<br>NUTS!</span><figure class="sd-maker-photo">${image(14,'Игровой кадр: белка защищает дерево от лесорубов','loading="lazy"')}<figcaption>ИЗ ЛЕСА С ЛЮБОВЬЮ <span>↗</span></figcaption></figure><div class="sd-maker-stamp"><span>СТАТУС ПРОЕКТА</span><strong>НА<br>ТЕСТЕ!</strong><small>ЗАКРЫТОЕ ТЕСТИРОВАНИЕ</small></div></div>
            </div>
            <div class="sd-maker-facts"><div><span>01 / ДВИЖОК</span><strong>UNITY <i>+</i> C#</strong></div><div><span>02 / АВТОР</span><strong>ROMAN KARIMOV</strong></div><div><span>03 / МИССИЯ</span><strong>ЗАЩИТИТЬ ЛЕС ${acorn}</strong></div></div>
            <p class="sd-maker-credit">Игровые кадры предоставлены автором проекта. Персонаж на первом экране — промо-адаптация героя игры.</p>
          </div>
        </section>
        <section class="sd-development" aria-labelledby="sd-development-title">
          <div class="sd-section-meta"><span>04 / РАЗРАБОТКА</span><span>ОТ ИДЕИ ДО ИГРОВОГО МИРА</span></div>
          <div class="sd-development-grid"><h2 id="sd-development-title">ИДЕЯ.<br><em>ЛЕС. БЕЛКА.</em></h2><div><p class="sd-dev-lead">От идеи до игрового мира.</p><p>Мне хотелось создать игру с простым и запоминающимся конфликтом: белка защищает свой дом от тех, кто пришёл за древесиной.</p><p>Squirrel Defender объединяет оборону дерева, волны противников и снаряжение в одном игровом мире. Проект продолжает развиваться и проходить тестирование.</p></div></div>
        </section>
        <section class="sd-outro"><div class="sd-outro-inner"><div class="sd-outro-message"><div class="sd-outro-acorn">${acorn}</div><p>НЕ ВСЕ ГЕРОИ НОСЯТ ПЛАЩИ.</p><h2>У НАШЕГО —<br><em>ХВОСТ.</em></h2></div><div class="sd-outro-actions"><button class="sd-outro-cta" type="button" data-sd-beta-open>ПРИСОЕДИНИТЬСЯ К ТЕСТИРОВАНИЮ <span aria-hidden="true">↗</span></button><a href="about.html" class="sd-about-link">ОБО МНЕ ↗</a><span class="sd-outro-mark" aria-hidden="true">SQUIRREL DEFENDER / BOXTERGAMES</span></div></div></section>
        <a class="sd-next" href="#project/${api.nextProject.id}"><span>СЛЕДУЮЩИЙ ПРОЕКТ</span><strong>${api.nextProject.name}</strong><span aria-hidden="true">↗</span></a>
        <dialog class="sd-beta-dialog" aria-labelledby="sd-beta-title">
          <div class="sd-beta-content">
            <button class="sd-beta-close" type="button" aria-label="Закрыть окно">×</button>
            <span class="sd-beta-kicker">BOXTERGAMES / ЗАКРЫТЫЙ ТЕСТ</span>
            <h2 id="sd-beta-title">ДАВАЙТЕ<br><em>ТЕСТИРОВАТЬ!</em></h2>
            <p class="sd-beta-label">СТАТУС ПРОЕКТА</p>
            <p>Squirrel Defender сейчас проходит закрытое тестирование. Актуальные условия участия и открытая ссылка для вступления здесь пока не подтверждены.</p>
            <p class="sd-beta-thanks">СПАСИБО ЗА ИНТЕРЕС! ${acorn}</p>
          </div>
        </dialog>
      </article>`;
      const q = selector => container.querySelector(selector);
      document.body.classList.remove('sd-dock-hidden');
      if(window.sdDockVisibilityHandler)window.removeEventListener('scroll',window.sdDockVisibilityHandler);
      window.sdDockVisibilityHandler=null;
      const betaDialog=q('.sd-beta-dialog');
      container.querySelectorAll('[data-sd-beta-open]').forEach(button=>button.addEventListener('click',()=>betaDialog.showModal()));
      q('.sd-beta-close').addEventListener('click',()=>betaDialog.close());
      betaDialog.addEventListener('click',e=>{if(e.target===betaDialog)betaDialog.close();});
      let groupIndex=0,shotIndex=0;
      function selectShot(index){
        const group=groups[groupIndex];shotIndex=(index+group.shots.length)%group.shots.length;
        const id=group.shots[shotIndex];const img=q('#sd-active-image');
        img.src=base+`screen-${String(id).padStart(2,'0')}.webp`;img.alt=group.labels[shotIndex];img.width=1080;img.height=1920;
        q('#sd-shot-counter').textContent=`${String(shotIndex+1).padStart(2,'0')} / ${String(group.shots.length).padStart(2,'0')}`;
        q('#sd-preview-number').textContent=q('#sd-shot-counter').textContent;
        q('#sd-preview-label').textContent=group.labels[shotIndex];
        q('#sd-expand').setAttribute('aria-label','Увеличить: '+group.labels[shotIndex]);
        container.querySelectorAll('[data-sd-thumb]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.sdThumb)===shotIndex)));
      }
      function selectGroup(index){
        groupIndex=index;const group=groups[index];
        container.querySelectorAll('[data-sd-group]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.sdGroup)===index)));
        q('#sd-group-counter').textContent='0'+(index+1);q('#sd-note-title').textContent=group.name;q('#sd-note-copy').textContent=group.copy;
        q('#sd-thumbnails').innerHTML=group.shots.map((id,i)=>`<button data-sd-thumb="${i}" aria-pressed="${i===0}" aria-label="Показать: ${group.labels[i]}">${image(id,group.labels[i],'loading="lazy"')}<span>${String(i+1).padStart(2,'0')}</span></button>`).join('');
        selectShot(0);
      }
      q('#sd-thumbnails').addEventListener('click',e=>{const button=e.target.closest('[data-sd-thumb]');if(button)selectShot(Number(button.dataset.sdThumb));});
      container.querySelectorAll('[data-sd-group]').forEach(b=>b.addEventListener('click',()=>selectGroup(Number(b.dataset.sdGroup))));
      q('#sd-shot-prev').addEventListener('click',()=>selectShot(shotIndex-1));q('#sd-shot-next').addEventListener('click',()=>selectShot(shotIndex+1));
      q('#sd-expand').addEventListener('click',()=>{const group=groups[groupIndex];api.openVisual(image(group.shots[shotIndex],group.labels[shotIndex]),'Squirrel Defender / '+group.labels[shotIndex],'Скриншот из игры. Предоставлен автором проекта.');});
      container.querySelectorAll('[data-sd-shot]').forEach(b=>b.addEventListener('click',()=>api.openVisual(image(Number(b.dataset.sdShot),b.dataset.caption),'Squirrel Defender / '+b.dataset.caption,'Скриншот из игры. Предоставлен автором проекта.')));
      container.querySelectorAll('[data-sd-scroll]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();q(a.getAttribute('href')).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
      selectGroup(0);
    }
  };
  window.PortfolioProjects=window.PortfolioProjects||{};
  window.PortfolioProjects[project.id]=project;
})();
