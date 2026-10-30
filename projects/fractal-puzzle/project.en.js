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
    {name:'Set a rule', text:'One color becomes a small combination of cells. Choose how your figure will grow.', image:3, caption:'Boat · setting the rule'},
    {name:'Watch it grow', text:'Start building. A simple rule repeats, and a familiar silhouette emerges cell by cell.', image:5, caption:'Boat · building process'},
    {name:'Enjoy the moment', text:'The sail is raised and the last cells are in place. Enjoy seeing everything come together.', image:6, caption:'Boat · completed figure'}
  ];
  const figures = [
    {key:'boat', name:'Boat', number:'01', shot:6, caption:'Fair winds.', text:'A turquoise hull and a warm sail. A little journey begins with one cell.'},
    {key:'fox', name:'Fox on the move', number:'01', shot:7, caption:'Quiet, here comes the fox.', text:'Pointed ears, a long tail and a sunny orange coat. A few colors create a whole personality.'},
    {key:'kingfisher', name:'Kingfisher', number:'05', shot:8, caption:'On colorful wings.', text:'Green wings, a turquoise breast and an amber beak. A bird made from simple repetitions.'},
    {key:'mushroom', name:'Mushroom house', number:'06', shot:9, caption:'A cozy little place.', text:'A little window hides beneath a golden cap. Another story made of colored cells.'},
    {key:'crab', name:'Fiddler crab', number:'09', shot:10, caption:'Greetings from the shallows.', text:'Two claws, turquoise legs and a little mischief. Each new figure has its own mood.'}
  ];
  const project = {
    id:'fractal-puzzle', name:'Fractal Puzzle', short:'Game · calming puzzle', icon:mark, category:'GAMES / PUZZLE', custom:true,
    themeColor:'#142e3a', description:'Fractal Puzzle by boxtergames. Set a rule and let your thoughts drift. A calming puzzle where a whole world grows from one cell.', label:'PROJECT 03 / FRACTAL PUZZLE',
    mount(container, api) {
      const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
      container.innerHTML = `<article class="fp-page" aria-labelledby="fp-title">
        <section class="fp-hero" data-project-swipe>
          <div class="fp-night-sky" aria-hidden="true">${stars}</div><div class="fp-far-islands" aria-hidden="true"></div>
          <div class="fp-topline"><span>BOXTERGAMES / WORLD 03</span><span><i class="fp-status-light"></i> THE WIND IS QUIET. SO ARE YOUR THOUGHTS.</span></div>
          <div class="fp-hero-grid">
            <div class="fp-intro">
              <div class="fp-eyebrow"><span aria-hidden="true">✳</span> A LITTLE PUZZLE. A DEEP BREATH.</div>
              <h1 id="fp-title" aria-label="Fractal Puzzle"><span class="fp-pixel-word">${pixelWord('FRACTAL')}</span><span class="fp-pixel-word">${pixelWord('PUZZLE')}<i aria-hidden="true"></i></span></h1>
              <p class="fp-tagline">Set a rule.<br><span>Let your thoughts drift.</span></p>
              <p class="fp-description">One cell becomes a sail.<br>A few repetitions take you far<br>from the everyday rush.</p>
              <button class="fp-button" type="button" data-fp-beta-open><span aria-hidden="true">▷</span> JOIN THE TEST <span aria-hidden="true">↗</span></button>
              <span class="fp-small-note"><i></i> ROUTE: FROM NOISE TO CURIOSITY</span>
            </div>
            <div class="fp-hero-art">
              <div class="fp-pixel-sun" aria-hidden="true"></div><div class="fp-sun-trail" aria-hidden="true">${reflections}</div>
              <div class="fp-pixel-cloud fp-cloud-one" aria-hidden="true"></div><div class="fp-pixel-cloud fp-cloud-two" aria-hidden="true"></div>
              <span class="fp-art-note">SOMEWHERE BETWEEN<br>“WHAT IF” AND “I DID IT”</span>
              <div class="fp-boat" role="img" aria-label="Pixel boat with an amber sail and turquoise hull">${boat}</div>
              <svg class="fp-water" viewBox="0 0 500 70" fill="none" aria-hidden="true"><path d="M0 15h55v5h60v-5h50v5h80v-5h60v5h70v-5h65v5h60M30 40h70m30 0h110m35 0h80m30 0h55M110 60h70m25 0h80m30 0h30" stroke="currentColor" stroke-width="2"/></svg>
              <div class="fp-art-caption"><button class="fp-reassemble" aria-label="Rebuild the boat">↻ BUILD AGAIN</button></div>
            </div>
          </div>
          <div class="fp-hero-bottom"><span><b>01</b> CELL <i>→</i> <b>∞</b> POSSIBILITIES</span><a href="#fp-discover" data-fp-scroll>THERE IS MORE TO DISCOVER <span aria-hidden="true">↓</span></a></div>
        </section>

        <section class="fp-discover" id="fp-discover" aria-labelledby="fp-discover-title">
          <div class="fp-section-meta"><span>01 / HOW TO PLAY</span><span>SMALL RULES. LITTLE WONDERS.</span></div>
          <div class="fp-discover-grid"><div><div class="fp-rule-drawing" aria-hidden="true"><i></i><span>→</span><div><i></i><i></i><i></i></div><span>→</span>${mark}</div><h2 id="fp-discover-title">From rule<br><em>to figure.</em></h2></div><div><p class="fp-lead">Choose a rule and watch<br>the figure come together.</p><p>Each rule shows what a colored cell becomes. Choose a combination and start building: the rule repeats, gradually filling in the figure.</p><p>Try building a boat, a fox, a bird and other figures by choosing the right rules.</p></div></div>
          <div class="fp-principles"><span>${mark} THINK IN SQUARES</span><span><i class="fp-swatch fp-swatch-teal"></i><i class="fp-swatch fp-swatch-amber"></i><i class="fp-swatch fp-swatch-green"></i> FEEL IN COLOR</span><span>∞ <span>SEE WHAT EMERGES</span></span></div>
        </section>

        <section class="fp-process" aria-labelledby="fp-process-title">
          <div class="fp-process-copy"><div class="fp-section-meta">02 / THE GAME IN ACTION</div><h2 id="fp-process-title">From rule<br><em>to result.</em></h2><p class="fp-process-intro">Three game screenshots show how the boat comes together. Select a step to take a closer look.</p>
            <div class="fp-steps" role="group" aria-label="Steps to build the boat">${steps.map((s,i)=>`<button data-fp-step="${i}" aria-pressed="${i===0}" aria-controls="fp-process-frame"><span class="fp-step-number">0${i+1}</span><span><strong>${s.name}</strong><span>${s.text}</span></span><span class="fp-step-arrow" aria-hidden="true">↗</span></button>`).join('')}</div>
          </div>
          <div class="fp-process-visual"><span class="fp-capture-label">IN THE GAME / <span id="fp-step-counter">01</span></span><button id="fp-process-frame" class="fp-screen" aria-label="Enlarge: setting the rule">${image(3,steps[0].caption,'id="fp-process-image" loading="lazy"')}</button><span class="fp-screen-caption" id="fp-process-caption">${steps[0].caption}</span><span class="fp-visual-plus" aria-hidden="true">+</span></div>
        </section>

        <section class="fp-collection fp-tide-gallery" aria-labelledby="fp-collection-title">
          <div class="fp-section-meta"><span>03 / INHABITANTS OF QUIET WORLDS</span><span>FIVE LITTLE DISCOVERIES</span></div>
          <div class="fp-collection-heading"><h2 id="fp-collection-title">One world.<br><em>So many stories.</em></h2><div class="fp-figure-pagination"><button id="fp-figure-prev" aria-label="Previous figure">←</button><span id="fp-figure-counter" aria-live="polite">01 / 05</span><button id="fp-figure-next" aria-label="Next figure">→</button></div></div>
          <div class="fp-figure-preview" id="fp-figure-preview" data-figure="boat">
            <div class="fp-figure-art"><span class="fp-figure-index" aria-hidden="true">01</span><span class="fp-gallery-star fp-gallery-star-one" aria-hidden="true"></span><span class="fp-gallery-star fp-gallery-star-two" aria-hidden="true"></span><img id="fp-figure-image" src="${base}boat.svg" alt="Boat made of turquoise and amber cells" width="900" height="652" loading="lazy"><svg class="fp-gallery-ripples" viewBox="0 0 600 60" fill="none" aria-hidden="true"><path d="M50 10h80m50 0h90m60 0h125m30 0h65M95 28h55m55 0h155m45 0h70M190 48h60m45 0h80" stroke="currentColor" stroke-width="2"/></svg></div>
            <div class="fp-figure-copy"><span class="fp-eyebrow" id="fp-figure-label">DISCOVERY 01 / 05</span><h3 id="fp-figure-title">${figures[0].name}</h3><p id="fp-figure-description">${figures[0].text}</p><button class="fp-text-button" id="fp-figure-expand">View game screenshot <span aria-hidden="true">↗</span></button></div>
          </div>
          <div class="fp-figure-picker" role="group" aria-label="Fractal Puzzle figures">${figures.map((f,i)=>`<button data-fp-figure="${i}" aria-pressed="${i===0}" aria-controls="fp-figure-preview"><span class="fp-picker-number" aria-hidden="true">0${i+1}</span><span>${f.name}</span><i aria-hidden="true"></i></button>`).join('')}</div>
        </section>

        <section class="fp-project-details" aria-labelledby="fp-project-details-title">
          <div class="fp-section-meta"><span>04 / ABOUT THE PROJECT</span><span>FROM IDEA TO GAME</span></div>
          <div class="fp-project-details-grid"><div><h2 id="fp-project-details-title">A little world.<br><em>A personal project.</em></h2><p>Fractal Puzzle is an original puzzle game by Roman Karimov, created independently from scratch.</p><a href="about.html">More about the creator <span aria-hidden="true">↗</span></a></div><dl><div><dt>FORMAT</dt><dd>Mobile puzzle</dd></div><div><dt>PLATFORM</dt><dd>Android</dd></div><div><dt>STATUS</dt><dd>Closed testing</dd></div><div><dt>CREATOR</dt><dd>Roman Karimov / Boxter Games</dd></div></dl></div>
        </section>

        <section class="fp-outro"><div class="fp-outro-stars" aria-hidden="true">${stars}</div>${mark}<p>WHEREVER YOU ARE —</p><h2>Leave the rush<br><em>on the other shore.</em></h2><div class="fp-take-time" aria-hidden="true">${pixelWord('TAKE')}${pixelWord('YOUR')}${pixelWord('TIME')}</div><p class="fp-outro-description">Join the closed Android test and try the game.</p><button class="fp-outro-button" type="button" data-fp-beta-open>JOIN THE TEST <span aria-hidden="true">↗</span></button><span class="fp-outro-signature">FRACTAL PUZZLE / MADE OF LITTLE THINGS</span></section>
        <a class="fp-next" href="#project/${api.nextProject.id}"><span>A DIFFERENT MOOD</span><strong>${api.nextProject.name}</strong><span aria-hidden="true">↗</span></a>
        <dialog class="fp-beta-dialog" aria-labelledby="fp-beta-title">
          <div class="fp-beta-content">
            <button class="fp-beta-close" type="button" aria-label="Close dialog">×</button>
            <span class="fp-beta-kicker">BOXTERGAMES / CLOSED TEST</span>
            <h2 id="fp-beta-title">Let’s<br><em>test!</em></h2>
            <p class="fp-beta-label">HOW TO JOIN</p>
            <ol class="fp-beta-steps">
              <li><span>01</span><div><strong>Join the group</strong><p>Join the Google group using the account you use for Google Play.</p><a href="https://groups.google.com/g/boxter-games-testers" target="_blank" rel="noopener noreferrer">Google group ↗</a></div></li>
              <li><span>02</span><div><strong>Become a tester</strong><p>Open the testing page and confirm your participation.</p><a href="https://play.google.com/apps/testing/com.boxtergames.fractalpuzzle" target="_blank" rel="noopener noreferrer">Become a tester ↗</a></div></li>
              <li><span>03</span><div><strong>Install the game</strong><p>After registering, the game may take up to 15 minutes to appear on Google Play.</p><a href="https://play.google.com/store/apps/details?id=com.boxtergames.fractalpuzzle" target="_blank" rel="noopener noreferrer">Open in Google Play ↗</a></div></li>
            </ol>
            <p class="fp-beta-thanks">THANKS FOR YOUR HELP! ✦</p>
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
        api.openVisual(image(number,caption), 'Fractal Puzzle / '+caption, 'Game screenshot supplied by the creator.');
      }
      container.querySelectorAll('[data-fp-step]').forEach(button => button.addEventListener('click', () => {
        stepIndex = Number(button.dataset.fpStep);
        const step = steps[stepIndex];
        container.querySelectorAll('[data-fp-step]').forEach(b => b.setAttribute('aria-pressed',String(b===button)));
        q('#fp-process-image').src = base+`screen-${String(step.image).padStart(2,'0')}.webp`;
        q('#fp-process-image').alt = step.caption;
        q('#fp-process-caption').textContent = step.caption;
        q('#fp-step-counter').textContent = '0'+(stepIndex+1);
        q('#fp-process-frame').setAttribute('aria-label','Enlarge: '+step.caption);
      }));
      q('#fp-process-frame').addEventListener('click',()=>showShot(steps[stepIndex].image,steps[stepIndex].caption));
      function selectFigure(index) {
        figureIndex = (index+figures.length)%figures.length;
        const f = figures[figureIndex];
        q('#fp-figure-image').src = base+f.key+'.svg';
        q('#fp-figure-image').alt = f.name+' — pixel figure from the game';
        q('#fp-figure-preview').dataset.figure = f.key;
        q('#fp-figure-label').textContent = 'DISCOVERY '+String(figureIndex+1).padStart(2,'0')+' / 05';
        q('#fp-figure-title').textContent = f.name;
        q('#fp-figure-description').textContent = f.text;
        q('.fp-figure-index').textContent = String(figureIndex+1).padStart(2,'0');
        q('#fp-figure-counter').textContent = String(figureIndex+1).padStart(2,'0')+' / 05';
        q('#fp-figure-expand').setAttribute('aria-label','View in game: '+f.name);
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
