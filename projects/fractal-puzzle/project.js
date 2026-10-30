/* Fractal Puzzle: a quiet, self-contained project. Works without a build or network. */
(() => {
  const base = 'projects/fractal-puzzle/assets/';
  const boat = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 650" fill="none"><defs><linearGradient id="fp-boat-opacity" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="white" stop-opacity="1"/><stop offset="1" stop-color="white" stop-opacity="0.5"/></linearGradient><mask id="fp-boat-mask" maskContentUnits="objectBoundingBox"><rect width="1" height="1" fill="url(#fp-boat-opacity)"/></mask></defs><g mask="url(#fp-boat-mask)"><rect x="411" y="0" width="74" height="74" rx="3" fill="#ffaf43" style="--cell:0"/><rect x="328" y="82" width="75" height="75" rx="3" fill="#ffaf43" style="--cell:1"/><rect x="411" y="82" width="74" height="75" rx="3" fill="#ffaf43" style="--cell:2"/><rect x="246" y="165" width="75" height="74" rx="3" fill="#ffaf43" style="--cell:3"/><rect x="328" y="165" width="75" height="74" rx="3" fill="#ffaf43" style="--cell:4"/><rect x="411" y="165" width="74" height="74" rx="3" fill="#2bbbc6" style="--cell:5"/><rect x="164" y="247" width="75" height="74" rx="3" fill="#ffaf43" style="--cell:6"/><rect x="246" y="247" width="75" height="74" rx="3" fill="#ffaf43" style="--cell:7"/><rect x="328" y="247" width="75" height="74" rx="3" fill="#ffaf43" style="--cell:8"/><rect x="411" y="247" width="74" height="74" rx="3" fill="#2bbbc6" style="--cell:9"/><rect x="82" y="329" width="75" height="74" rx="3" fill="#ffaf43" style="--cell:10"/><rect x="164" y="329" width="75" height="74" rx="3" fill="#ffaf43" style="--cell:11"/><rect x="246" y="329" width="75" height="74" rx="3" fill="#ffaf43" style="--cell:12"/><rect x="328" y="329" width="75" height="74" rx="3" fill="#ffaf43" style="--cell:13"/><rect x="411" y="329" width="74" height="74" rx="3" fill="#2bbbc6" style="--cell:14"/><rect x="0" y="411" width="74" height="74" rx="3" fill="#2bbbc6" style="--cell:15"/><rect x="82" y="411" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:16"/><rect x="164" y="411" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:17"/><rect x="246" y="411" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:18"/><rect x="328" y="411" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:19"/><rect x="411" y="411" width="74" height="74" rx="3" fill="#2bbbc6" style="--cell:20"/><rect x="493" y="411" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:21"/><rect x="575" y="411" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:22"/><rect x="657" y="411" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:23"/><rect x="739" y="411" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:24"/><rect x="822" y="411" width="74" height="74" rx="3" fill="#2bbbc6" style="--cell:25"/><rect x="82" y="493" width="75" height="75" rx="3" fill="#2bbbc6" style="--cell:26"/><rect x="164" y="493" width="75" height="75" rx="3" fill="#2bbbc6" style="--cell:27"/><rect x="246" y="493" width="75" height="75" rx="3" fill="#2bbbc6" style="--cell:28"/><rect x="328" y="493" width="75" height="75" rx="3" fill="#2bbbc6" style="--cell:29"/><rect x="411" y="493" width="74" height="75" rx="3" fill="#2bbbc6" style="--cell:30"/><rect x="493" y="493" width="75" height="75" rx="3" fill="#2bbbc6" style="--cell:31"/><rect x="575" y="493" width="75" height="75" rx="3" fill="#2bbbc6" style="--cell:32"/><rect x="657" y="493" width="75" height="75" rx="3" fill="#2fb6c2" style="--cell:33"/><rect x="739" y="493" width="75" height="75" rx="3" fill="#2bbbc6" style="--cell:34"/><rect x="164" y="576" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:35"/><rect x="246" y="576" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:36"/><rect x="328" y="576" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:37"/><rect x="411" y="576" width="74" height="74" rx="3" fill="#2bbbc6" style="--cell:38"/><rect x="493" y="576" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:39"/><rect x="575" y="576" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:40"/><rect x="657" y="576" width="75" height="74" rx="3" fill="#2bbbc6" style="--cell:41"/></g></svg>';
  const mark = '<svg viewBox="0 0 28 28" fill="currentColor" aria-hidden="true"><rect x="12" y="2" width="6" height="6" rx="1"/><rect x="5" y="9" width="6" height="6" rx="1"/><rect x="12" y="9" width="6" height="6" rx="1"/><rect x="5" y="16" width="6" height="6" rx="1"/><rect x="12" y="16" width="6" height="6" rx="1"/><rect x="19" y="16" width="6" height="6" rx="1"/></svg>';
  const image = (number, alt, attrs = '') => `<img src="${base}screen-${String(number).padStart(2, '0')}.webp" alt="${alt}" width="1080" height="1920" ${attrs}>`;
  // The title uses the same unit as the world: a square. No external font needed.
  const glyphs = {
    F:['11111','10000','10000','11110','10000','10000','10000'],
    R:['11110','10001','10001','11110','10100','10010','10001'],
    A:['01110','10001','10001','11111','10001','10001','10001'],
    C:['01111','10000','10000','10000','10000','10000','01111'],
    T:['11111','00100','00100','00100','00100','00100','00100'],
    L:['10000','10000','10000','10000','10000','10000','11111'],
    P:['11110','10001','10001','11110','10000','10000','10000'],
    U:['10001','10001','10001','10001','10001','10001','01110'],
    Z:['11111','00001','00010','00100','01000','10000','11111'],
    E:['11111','10000','10000','11110','10000','10000','11111'],
    K:['10001','10010','10100','11000','10100','10010','10001'],
    Y:['10001','10001','01010','00100','00100','00100','00100'],
    O:['01110','10001','10001','10001','10001','10001','01110'],
    I:['11111','00100','00100','00100','00100','00100','11111'],
    M:['10001','11011','10101','10101','10001','10001','10001']
  };
  const pixelWord = word => `<svg viewBox="0 0 ${word.length*6-1} 7" fill="currentColor" aria-hidden="true" shape-rendering="crispEdges">${[...word].map((char,i)=>glyphs[char].map((row,y)=>[...row].map((v,x)=>v==='1'?`<rect x="${i*6+x}" y="${y}" width="1" height="1"/>`:'').join('')).join('')).join('')}</svg>`;
  const stars = Array.from({length:26},(_,i)=>`<i style="--x:${(i*37+11)%100}%;--y:${(i*23+7)%83}%;--d:${i%5}s;--s:${i%4===0?4:2}px"></i>`).join('');
  const reflections = Array.from({length:13},(_,i)=>`<i style="--row:${i};--w:${18+(i*23)%75}%;--offset:${(i%3-1)*13}px"></i>`).join('');
  const steps = [
    {name:'Задайте правило', text:'Один цвет превращается в маленькую комбинацию клеток. Выберите, как будет расти ваша фигура.', image:3, caption:'Кораблик · настройка правила'},
    {name:'Наблюдайте за ростом', text:'Запустите сборку. Простое правило повторяется, и клетка за клеткой начинает проступать знакомый силуэт.', image:5, caption:'Кораблик · процесс сборки'},
    {name:'Поймайте момент', text:'Парус поднят, последние клетки на своих местах. Маленькое удовольствие — увидеть, как всё складывается.', image:6, caption:'Кораблик · готовая фигура'}
  ];
  const figures = [
    {key:'boat', name:'Кораблик', number:'01', shot:6, caption:'Попутного ветра.', text:'Бирюзовый корпус. Тёплый парус. Маленькое путешествие начинается с одной клетки.'},
    {key:'fox', name:'Лиса на ходу', number:'01', shot:7, caption:'Тихо, лиса идёт.', text:'Острые ушки, длинный хвост и солнечный рыжий бок. Несколько цветов — и уже целый характер.'},
    {key:'kingfisher', name:'Зимородок', number:'05', shot:8, caption:'На крыльях цвета.', text:'Зелёные крылья, бирюзовая грудка, янтарный клюв. Птица, собранная из простых повторений.'},
    {key:'mushroom', name:'Грибной домик', number:'06', shot:9, caption:'Место, где уютно.', text:'Под большой золотистой шляпкой прячется маленькое окно. Ещё одна история из цветных клеток.'},
    {key:'crab', name:'Краб-скрипач', number:'09', shot:10, caption:'Привет с мелководья.', text:'Две клешни, бирюзовые лапки и немного озорства. У каждой новой фигуры своё настроение.'}
  ];
  const project = {
    id:'fractal-puzzle', name:'Fractal Puzzle', short:'Игра · тихая логика', icon:mark, category:'ИГРЫ / ГОЛОВОЛОМКА', custom:true,
    themeColor:'#142e3a', description:'Fractal Puzzle от boxtergames. Задайте правило. Отпустите мысли. Тихая головоломка, где из одной клетки вырастает целый мир.', label:'PROJECT 03 / FRACTAL PUZZLE',
    mount(container, api) {
      const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
      container.innerHTML = `<article class="fp-page" aria-labelledby="fp-title">
        <section class="fp-hero" data-project-swipe>
          <div class="fp-night-sky" aria-hidden="true">${stars}</div><div class="fp-far-islands" aria-hidden="true"></div>
          <div class="fp-topline"><span>BOXTERGAMES / МИР 03</span><span><i class="fp-status-light"></i> ВЕТЕР ТИХИЙ. МЫСЛИ ТОЖЕ.</span></div>
          <div class="fp-hero-grid">
            <div class="fp-intro">
              <div class="fp-eyebrow"><span aria-hidden="true">✳</span> МАЛЕНЬКАЯ ГОЛОВОЛОМКА. БОЛЬШОЙ ВЫДОХ.</div>
              <h1 id="fp-title" aria-label="Fractal Puzzle"><span class="fp-pixel-word">${pixelWord('FRACTAL')}</span><span class="fp-pixel-word">${pixelWord('PUZZLE')}<i aria-hidden="true"></i></span></h1>
              <p class="fp-tagline">Задай правило.<br><span>Отпусти мысли.</span></p>
              <p class="fp-description">Одна клетка становится парусом.<br>Пара повторений — и ты уже далеко<br>от повседневной суеты.</p>
              <button class="fp-button" type="button" data-fp-beta-open><span aria-hidden="true">▷</span> УЧАСТВОВАТЬ В ТЕСТИРОВАНИИ <span aria-hidden="true">↗</span></button>
              <span class="fp-small-note"><i></i> МАРШРУТ: ИЗ ШУМА — В ЛЮБОПЫТСТВО</span>
            </div>
            <div class="fp-hero-art">
              <div class="fp-pixel-sun" aria-hidden="true"></div><div class="fp-sun-trail" aria-hidden="true">${reflections}</div>
              <div class="fp-pixel-cloud fp-cloud-one" aria-hidden="true"></div><div class="fp-pixel-cloud fp-cloud-two" aria-hidden="true"></div>
              <span class="fp-art-note">ГДЕ-ТО МЕЖДУ<br>«А ЧТО, ЕСЛИ» И «ПОЛУЧИЛОСЬ»</span>
              <div class="fp-boat" role="img" aria-label="Пиксельный кораблик с янтарным парусом и бирюзовым корпусом">${boat}</div>
              <svg class="fp-water" viewBox="0 0 500 70" fill="none" aria-hidden="true"><path d="M0 15h55v5h60v-5h50v5h80v-5h60v5h70v-5h65v5h60M30 40h70m30 0h110m35 0h80m30 0h55M110 60h70m25 0h80m30 0h30" stroke="currentColor" stroke-width="2"/></svg>
              <div class="fp-art-caption"><button class="fp-reassemble" aria-label="Заново собрать кораблик">↻ СОБРАТЬ СНОВА</button></div>
            </div>
          </div>
          <div class="fp-hero-bottom"><span><b>01</b> КЛЕТКА <i>→</i> <b>∞</b> ВОЗМОЖНОСТЕЙ</span><a href="#fp-discover" data-fp-scroll>ДАЛЬШЕ — ТОЛЬКО ИНТЕРЕСНЕЕ <span aria-hidden="true">↓</span></a></div>
        </section>

        <section class="fp-discover" id="fp-discover" aria-labelledby="fp-discover-title">
          <div class="fp-section-meta"><span>01 / КАК ИГРАТЬ</span><span>SMALL RULES. LITTLE WONDERS.</span></div>
          <div class="fp-discover-grid"><div><div class="fp-rule-drawing" aria-hidden="true"><i></i><span>→</span><div><i></i><i></i><i></i></div><span>→</span>${mark}</div><h2 id="fp-discover-title">Из правила —<br><em>в фигуру.</em></h2></div><div><p class="fp-lead">Выберите правило и посмотрите,<br>как собирается фигура.</p><p>Каждое правило показывает, во что превращается цветная клетка. Выбери комбинацию и запусти сборку — правило будет повторяться, постепенно заполняя фигуру.</p><p>Попробуй собрать кораблик, лису, птицу и другие фигуры, подбирая подходящие правила.</p></div></div>
          <div class="fp-principles"><span>${mark} МЫСЛИ КВАДРАТИКАМИ</span><span><i class="fp-swatch fp-swatch-teal"></i><i class="fp-swatch fp-swatch-amber"></i><i class="fp-swatch fp-swatch-green"></i> ЧУВСТВУЙ ЦВЕТОМ</span><span>∞ <span>СМОТРИ, ЧТО ПОЛУЧИТСЯ</span></span></div>
        </section>

        <section class="fp-process" aria-labelledby="fp-process-title">
          <div class="fp-process-copy"><div class="fp-section-meta">02 / ИГРА В ДЕЙСТВИИ</div><h2 id="fp-process-title">От правила<br><em>до результата.</em></h2><p class="fp-process-intro">Три игровых кадра показывают, как собирается кораблик. Выберите шаг, чтобы рассмотреть его.</p>
            <div class="fp-steps" role="group" aria-label="Этапы сборки кораблика">${steps.map((s,i)=>`<button data-fp-step="${i}" aria-pressed="${i===0}" aria-controls="fp-process-frame"><span class="fp-step-number">0${i+1}</span><span><strong>${s.name}</strong><span>${s.text}</span></span><span class="fp-step-arrow" aria-hidden="true">↗</span></button>`).join('')}</div>
          </div>
          <div class="fp-process-visual"><span class="fp-capture-label">ВНУТРИ ИГРЫ / <span id="fp-step-counter">01</span></span><button id="fp-process-frame" class="fp-screen" aria-label="Увеличить: настройка правила">${image(3,steps[0].caption,'id="fp-process-image" loading="lazy"')}</button><span class="fp-screen-caption" id="fp-process-caption">${steps[0].caption}</span><span class="fp-visual-plus" aria-hidden="true">+</span></div>
        </section>

        <section class="fp-collection fp-tide-gallery" aria-labelledby="fp-collection-title">
          <div class="fp-section-meta"><span>03 / ОБИТАТЕЛИ ТИХИХ МИРОВ</span><span>ПЯТЬ МАЛЕНЬКИХ ОТКРЫТИЙ</span></div>
          <div class="fp-collection-heading"><h2 id="fp-collection-title">Один мир.<br><em>Столько историй.</em></h2><div class="fp-figure-pagination"><button id="fp-figure-prev" aria-label="Предыдущая фигура">←</button><span id="fp-figure-counter" aria-live="polite">01 / 05</span><button id="fp-figure-next" aria-label="Следующая фигура">→</button></div></div>
          <div class="fp-figure-preview" id="fp-figure-preview" data-figure="boat">
            <div class="fp-figure-art"><span class="fp-figure-index" aria-hidden="true">01</span><span class="fp-gallery-star fp-gallery-star-one" aria-hidden="true"></span><span class="fp-gallery-star fp-gallery-star-two" aria-hidden="true"></span><img id="fp-figure-image" src="${base}boat.svg" alt="Кораблик из бирюзовых и янтарных клеток" width="900" height="652" loading="lazy"><svg class="fp-gallery-ripples" viewBox="0 0 600 60" fill="none" aria-hidden="true"><path d="M50 10h80m50 0h90m60 0h125m30 0h65M95 28h55m55 0h155m45 0h70M190 48h60m45 0h80" stroke="currentColor" stroke-width="2"/></svg></div>
            <div class="fp-figure-copy"><span class="fp-eyebrow" id="fp-figure-label">НАБЛЮДЕНИЕ 01 / 05</span><h3 id="fp-figure-title">${figures[0].name}</h3><p id="fp-figure-description">${figures[0].text}</p><button class="fp-text-button" id="fp-figure-expand">Открыть игровой кадр <span aria-hidden="true">↗</span></button></div>
          </div>
          <div class="fp-figure-picker" role="group" aria-label="Фигуры из Fractal Puzzle">${figures.map((f,i)=>`<button data-fp-figure="${i}" aria-pressed="${i===0}" aria-controls="fp-figure-preview"><span class="fp-picker-number" aria-hidden="true">0${i+1}</span><span>${f.name}</span><i aria-hidden="true"></i></button>`).join('')}</div>
        </section>

        <section class="fp-project-details" aria-labelledby="fp-project-details-title">
          <div class="fp-section-meta"><span>04 / О ПРОЕКТЕ</span><span>ОТ ИДЕИ ДО ИГРЫ</span></div>
          <div class="fp-project-details-grid"><div><h2 id="fp-project-details-title">Маленький мир.<br><em>Личный проект.</em></h2><p>Fractal Puzzle — авторская головоломка Романа Каримова. Игра создана им самостоятельно с нуля до готового проекта.</p><a href="about.html">Подробнее об авторе <span aria-hidden="true">↗</span></a></div><dl><div><dt>ФОРМАТ</dt><dd>Мобильная головоломка</dd></div><div><dt>ПЛАТФОРМА</dt><dd>Android</dd></div><div><dt>СТАТУС</dt><dd>Закрытое тестирование</dd></div><div><dt>АВТОР</dt><dd>Роман Каримов / Boxter Games</dd></div></dl></div>
        </section>

        <section class="fp-outro"><div class="fp-outro-stars" aria-hidden="true">${stars}</div>${mark}<p>ГДЕ БЫ ТЫ НИ БЫЛ —</p><h2>Оставь суету<br><em>на другом берегу.</em></h2><div class="fp-take-time" aria-hidden="true">${pixelWord('TAKE')}${pixelWord('YOUR')}${pixelWord('TIME')}</div><p class="fp-outro-description">Присоединяйтесь к закрытому тестированию на Android и попробуйте игру.</p><button class="fp-outro-button" type="button" data-fp-beta-open>УЧАСТВОВАТЬ В ТЕСТИРОВАНИИ <span aria-hidden="true">↗</span></button><span class="fp-outro-signature">FRACTAL PUZZLE / MADE OF LITTLE THINGS</span></section>
        <a class="fp-next" href="#project/${api.nextProject.id}"><span>ДРУГОЕ НАСТРОЕНИЕ</span><strong>${api.nextProject.name}</strong><span aria-hidden="true">↗</span></a>
        <dialog class="fp-beta-dialog" aria-labelledby="fp-beta-title">
          <div class="fp-beta-content">
            <button class="fp-beta-close" type="button" aria-label="Закрыть окно">×</button>
            <span class="fp-beta-kicker">BOXTERGAMES / ЗАКРЫТЫЙ ТЕСТ</span>
            <h2 id="fp-beta-title">Давайте<br><em>тестировать!</em></h2>
            <p class="fp-beta-label">КАК ПРИСОЕДИНИТЬСЯ</p>
            <ol class="fp-beta-steps">
              <li><span>01</span><div><strong>Вступите в группу</strong><p>Присоединитесь к Google-группе с аккаунта, который используете в Google Play.</p><a href="https://groups.google.com/g/boxter-games-testers" target="_blank" rel="noopener noreferrer">Google-группа ↗</a></div></li>
              <li><span>02</span><div><strong>Станьте тестировщиком</strong><p>Откройте страницу тестирования и подтвердите участие.</p><a href="https://play.google.com/apps/testing/com.boxtergames.fractalpuzzle" target="_blank" rel="noopener noreferrer">Стать тестировщиком ↗</a></div></li>
              <li><span>03</span><div><strong>Установите игру</strong><p>После регистрации игра может появиться в Google Play не сразу — это может занять до 15 минут.</p><a href="https://play.google.com/store/apps/details?id=com.boxtergames.fractalpuzzle" target="_blank" rel="noopener noreferrer">Открыть в Google Play ↗</a></div></li>
            </ol>
            <p class="fp-beta-thanks">СПАСИБО ЗА ПОМОЩЬ! ✦</p>
          </div>
        </dialog>
      </article>`;

      const q = selector => container.querySelector(selector);
      const betaDialog=q('.fp-beta-dialog');
      container.querySelectorAll('[data-fp-beta-open]').forEach(button=>button.addEventListener('click',()=>betaDialog.showModal()));
      q('.fp-beta-close').addEventListener('click',()=>betaDialog.close());
      betaDialog.addEventListener('click',e=>{if(e.target===betaDialog)betaDialog.close();});
      q('.fp-reassemble').addEventListener('click',()=>{
        q('.fp-boat').getAnimations({subtree:true}).forEach(animation=>{
          if(animation.effect?.target?.tagName.toLowerCase()==='rect') animation.cancel();
        });
        if (reducedMotion.matches) return;
        q('.fp-boat').querySelectorAll('g rect').forEach((cell,i)=>cell.animate([
          {opacity:0,transform:`translate(${(i%5-2)*24}px,${35+i%4*12}px) scale(.25)`},
          {opacity:1,transform:'translate(0,0) scale(1)'}
        ],{duration:1100,delay:i*38,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'}));
      });
      let stepIndex = 0, figureIndex = 0;
      function showShot(number, caption) {
        api.openVisual(image(number,caption), 'Fractal Puzzle / '+caption, 'Скриншот из игры. Предоставлен автором проекта.');
      }
      container.querySelectorAll('[data-fp-step]').forEach(button => button.addEventListener('click', () => {
        stepIndex = Number(button.dataset.fpStep);
        const step = steps[stepIndex];
        container.querySelectorAll('[data-fp-step]').forEach(b => b.setAttribute('aria-pressed',String(b===button)));
        q('#fp-process-image').src = base+`screen-${String(step.image).padStart(2,'0')}.webp`;
        q('#fp-process-image').alt = step.caption;
        q('#fp-process-caption').textContent = step.caption;
        q('#fp-step-counter').textContent = '0'+(stepIndex+1);
        q('#fp-process-frame').setAttribute('aria-label','Увеличить: '+step.caption);
      }));
      q('#fp-process-frame').addEventListener('click',()=>showShot(steps[stepIndex].image,steps[stepIndex].caption));
      function selectFigure(index) {
        figureIndex = (index+figures.length)%figures.length;
        const f = figures[figureIndex];
        q('#fp-figure-image').src = base+f.key+'.svg';
        q('#fp-figure-image').alt = f.name+' — пиксельная фигура из игры';
        q('#fp-figure-preview').dataset.figure = f.key;
        q('#fp-figure-label').textContent = 'НАБЛЮДЕНИЕ '+String(figureIndex+1).padStart(2,'0')+' / 05';
        q('#fp-figure-title').textContent = f.name;
        q('#fp-figure-description').textContent = f.text;
        q('.fp-figure-index').textContent = String(figureIndex+1).padStart(2,'0');
        q('#fp-figure-counter').textContent = String(figureIndex+1).padStart(2,'0')+' / 05';
        q('#fp-figure-expand').setAttribute('aria-label','Рассмотреть в игре: '+f.name);
        container.querySelectorAll('[data-fp-figure]').forEach(b => b.setAttribute('aria-pressed',String(Number(b.dataset.fpFigure)===figureIndex)));
      }
      container.querySelectorAll('[data-fp-figure]').forEach(b => b.addEventListener('click',()=>selectFigure(Number(b.dataset.fpFigure))));
      q('#fp-figure-prev').addEventListener('click',()=>selectFigure(figureIndex-1));
      q('#fp-figure-next').addEventListener('click',()=>selectFigure(figureIndex+1));
      q('#fp-figure-expand').addEventListener('click',()=>showShot(figures[figureIndex].shot,figures[figureIndex].name));
      container.querySelectorAll('[data-fp-scroll]').forEach(a => a.addEventListener('click',e=>{
        e.preventDefault();q(a.getAttribute('href')).scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'});
      }));
      selectFigure(0);
    }
  };
  window.PortfolioProjects = window.PortfolioProjects || {};
  window.PortfolioProjects[project.id] = project;
})();
