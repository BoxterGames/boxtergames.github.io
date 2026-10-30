/* Self-contained project: local assets, no build step or external requests. */
(() => {
  const base = 'projects/squirreldefender/assets/';
  const acorn = `<svg viewBox="0 0 64 72" fill="none" aria-hidden="true"><path d="M35 16c-1-9 3-12 10-14" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M13 32c0 21 9 26 19 35 12-10 21-16 21-35" fill="currentColor"/><path d="M7 32c0-15 10-22 25-22s25 7 25 22Z" fill="currentColor"/><path d="m16 20 30 9M24 15l27 8M12 26l25 7" stroke="#172e24" stroke-width="2"/></svg>`;
  const image = (id, alt, attrs='') => `<img src="${base}screen-${String(id).padStart(2,'0')}.webp" alt="${alt}" width="1080" height="1920" ${attrs}>`;
  const groups = [
    {name:'On defense',note:'Wave after wave',copy:'The squirrel takes position as lumberjacks approach the tree.',shots:[14,11,12],labels:['Lumberjacks on the trail','Defending the tree','Battle at the tree']},
    {name:'A breather',note:'Time to prepare',copy:'Choose equipment between encounters and prepare for the next one.',shots:[10,13],labels:['Choosing equipment','Preparing for battle']},
    {name:'Forest world',note:'A place for a story',copy:'Explore the setting of the little defender’s story.',shots:[8,9],labels:['Forest clearing','Forest before battle']}
  ];
  const project = {
    id:'squirreldefender',name:'Squirrel Defender',short:'Game · forest defense',icon:acorn,category:'GAMES / FOREST DEFENSE',custom:true,
    themeColor:'#101e18',description:'Squirrel Defender by boxtergames: a small defender of a big forest. Battles, upgrades and a lively low-poly world.',label:'PROJECT 02 / SQUIRREL DEFENDER',
    mount(container,api){
      container.innerHTML=`<article class="sd-page" aria-labelledby="sd-title">
        <section class="sd-hero" data-project-swipe>
          <div class="sd-forest-backdrop" aria-hidden="true"></div>
          <div class="sd-topline"><span><i></i> BOXTERGAMES / GAME NO. 02</span><span>THE FOREST FIGHTS BACK</span></div>
          <div class="sd-hero-grid">
            <div class="sd-intro"><div class="sd-eyebrow"><span class="sd-rule"></span> THIS IS MY TREE. PERIOD.</div>
              <h1 id="sd-title"><span>SQUIRREL</span><span>DEFENDER</span></h1>
              <p class="sd-tagline">Little squirrel.<br><strong>Big trouble.</strong><span>For the lumberjacks, of course.</span></p>
              <p class="sd-description">They came for timber.<br>But they forgot someone with a fluffy tail<br>and a remarkably accurate acorn.</p>
              <button class="sd-button" type="button" data-sd-beta-open>JOIN BETATEST <span aria-hidden="true">↗</span></button>
              <div class="sd-hero-note">${acorn}<span>PLENTY OF ACORNS.<br>NO PATIENCE LEFT.</span></div>
            </div>
            <div class="sd-scene">
              <span class="sd-scene-word" aria-hidden="true">GO<br>NUTS!</span>
              <div class="sd-sunburst" aria-hidden="true"></div>
              <img class="sd-mascot" src="${base}hero-squirrel.png" alt="Squirrel defender in a green feathered hat" fetchpriority="high">
              <span class="sd-flying-acorn sd-acorn-one" aria-hidden="true">${acorn}</span><span class="sd-flying-acorn sd-acorn-two" aria-hidden="true">${acorn}</span>
              <svg class="sd-throw-path" viewBox="0 0 500 500" aria-hidden="true"><path d="M80 380C-70 90 460 10 445 180" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 12"/></svg>
              <div class="sd-warning"><span>WARNING!</span><strong>NO<br>LUMBERJACKS ALLOWED.</strong></div>
              <button class="sd-game-peek" data-sd-shot="14" data-caption="Defending the tree" aria-label="Enlarge screenshot: defending the tree">${image(14,'Squirrel on a branch defending the tree from lumberjacks')}<span>HERE THEY COME.<b>GAME SCREENSHOT ↗</b></span></button>
            </div>
          </div>
          <div class="sd-hero-bottom"><span>SMALL HERO / BIG PERSONALITY</span><a href="#sd-story" data-sd-scroll>WATCH OUT FOR ACORNS <span aria-hidden="true">↓</span></a></div>
          <div class="sd-treetops" aria-hidden="true"></div>
        </section>
        <div class="sd-ticker" aria-hidden="true"><div class="sd-ticker-track">${Array.from({length:2},()=>`<span class="sd-ticker-group"><span>HANDS OFF MY TREE!</span>${acorn}<span>PAWS OFF MY TREE!</span>${acorn}<span>HANDS OFF MY TREE!</span>${acorn}<span>PAWS OFF MY TREE!</span>${acorn}</span>`).join('')}</div></div>
        <section class="sd-story" id="sd-story">
          <div class="sd-section-meta"><span>01 / FOREST RULES</span><span>SIMPLE RULES. A WILD FOREST.</span></div>
          <div class="sd-story-grid"><div><h2>OUR FOREST.<br>YOUR<br><em>ACORN.</em></h2></div><div class="sd-story-copy"><p class="sd-lead">Axes versus acorns.<br>The forest is at stake.</p><p>Lumberjacks approach the tree as the squirrel takes up a defensive position. Waves of unwelcome guests, equipment and a fight for every part of the forest await.</p><p>Hold your ground, prepare for the next encounter and prove that even a small defender can have a big personality.</p><div class="sd-story-tags"><span>TREE DEFENSE</span><span>WAVES OF LUMBERJACKS</span><span>EQUIPMENT</span></div></div></div>
        </section>

        <section class="sd-fieldnotes" id="sd-fieldnotes" aria-labelledby="sd-gallery-title">
          <div class="sd-section-meta"><span>02 / GAMEPLAY</span><span>7 GAME SCREENSHOTS</span></div>
          <div class="sd-gallery-heading"><h2 id="sd-gallery-title">WAVE<br><em>AFTER WAVE.</em></h2><p>The lumberjacks will not leave on their own. Defend the tree, choose your equipment and prepare for new encounters on the forest path.</p></div>
          <div class="sd-tabs" role="group" aria-label="Gallery sections">${groups.map((g,i)=>`<button data-sd-group="${i}" aria-pressed="${i===0}"><span>0${i+1}</span>${g.name}<span aria-hidden="true">↗</span></button>`).join('')}</div>
          <div class="sd-explorer">
            <div class="sd-note"><span class="sd-note-overline">SECTION / <span id="sd-group-counter">01</span></span><h3 id="sd-note-title">${groups[0].name}</h3><p id="sd-note-copy">${groups[0].copy}</p><div class="sd-thumbnails" id="sd-thumbnails" role="group" aria-label="Screenshots in the selected section"></div><p class="sd-note-hint">Game screenshots · select one to see details.</p><div class="sd-pagination"><button id="sd-shot-prev" aria-label="Previous screenshot">←</button><span id="sd-shot-counter" aria-live="polite"></span><button id="sd-shot-next" aria-label="Next screenshot">→</button></div></div>
            <div class="sd-preview"><div class="sd-preview-caption"><span>GAME SCREENSHOT</span><span id="sd-preview-number">01 / 03</span></div><button class="sd-preview-image" id="sd-expand" aria-label="Enlarge selected screenshot">${image(14,groups[0].labels[0],'id="sd-active-image" loading="lazy"')}</button><span class="sd-preview-bottom" id="sd-preview-label">${groups[0].labels[0]}</span></div>
          </div>
        </section>
        <section class="sd-maker sd-maker-new" aria-labelledby="sd-maker-title">
          <div class="sd-maker-inner">
            <div class="sd-section-meta"><span>03 / MADE AT BOXTERGAMES</span><span>ONE INDEPENDENT PROJECT. A WHOLE FOREST.</span></div>
            <div class="sd-maker-layout">
              <div class="sd-maker-story"><span class="sd-maker-kicker">${acorn} A PERSONAL PROJECT</span><h2 id="sd-maker-title">MY FOREST.<br><em>MY RULES.</em></h2><p class="sd-maker-intro">Hi, I am Roman. Squirrel Defender is my independent game under the BoxterGames name.</p><p>I am building it in Unity and C#, working on gameplay, interface and builds. I wanted to create a world where a little squirrel can stand up to a crowd of lumberjacks.</p><a class="sd-maker-link" href="about.html">MORE ABOUT ME <span aria-hidden="true">↗</span></a></div>
              <div class="sd-maker-visual"><span class="sd-maker-bigword" aria-hidden="true">GO<br>NUTS!</span><figure class="sd-maker-photo">${image(14,'Game screenshot: squirrel defends the tree from lumberjacks','loading="lazy"')}<figcaption>FROM THE FOREST WITH LOVE <span>↗</span></figcaption></figure><div class="sd-maker-stamp"><span>PROJECT STATUS</span><strong>IN<br>TESTING!</strong><small>CLOSED TESTING</small></div></div>
            </div>
            <div class="sd-maker-facts"><div><span>01 / ENGINE</span><strong>UNITY <i>+</i> C#</strong></div><div><span>02 / CREATOR</span><strong>ROMAN KARIMOV</strong></div><div><span>03 / MISSION</span><strong>DEFEND THE FOREST ${acorn}</strong></div></div>
            <p class="sd-maker-credit">Game screenshots supplied by the creator. The character on the first screen is a promotional adaptation of the game hero.</p>
          </div>
        </section>
        <section class="sd-development" aria-labelledby="sd-development-title">
          <div class="sd-section-meta"><span>04 / DEVELOPMENT</span><span>FROM IDEA TO GAME WORLD</span></div>
          <div class="sd-development-grid"><h2 id="sd-development-title">IDEA.<br><em>FOREST. SQUIRREL.</em></h2><div><p class="sd-dev-lead">From idea to game world.</p><p>I wanted to create a game with a simple, memorable conflict: a squirrel defends its home from those who came for timber.</p><p>Squirrel Defender brings tree defense, waves of enemies and equipment together in one game world. The project is still in development and testing.</p></div></div>
        </section>
        <section class="sd-outro"><div class="sd-outro-inner"><div class="sd-outro-message"><div class="sd-outro-acorn">${acorn}</div><p>NOT ALL HEROES WEAR CAPES.</p><h2>OURS HAS A<br><em>TAIL.</em></h2></div><div class="sd-outro-actions"><button class="sd-outro-cta" type="button" data-sd-beta-open>JOIN THE TEST <span aria-hidden="true">↗</span></button><a href="about.html" class="sd-about-link">ABOUT ME ↗</a><span class="sd-outro-mark" aria-hidden="true">SQUIRREL DEFENDER / BOXTERGAMES</span></div></div></section>
        <a class="sd-next" href="#project/${api.nextProject.id}"><span>NEXT PROJECT</span><strong>${api.nextProject.name}</strong><span aria-hidden="true">↗</span></a>
        <dialog class="sd-beta-dialog" aria-labelledby="sd-beta-title">
          <div class="sd-beta-content">
            <button class="sd-beta-close" type="button" aria-label="Close dialog">×</button>
            <span class="sd-beta-kicker">BOXTERGAMES / CLOSED TEST</span>
            <h2 id="sd-beta-title">LET’S<br><em>TEST!</em></h2>
            <p class="sd-beta-label">PROJECT STATUS</p>
            <p>Squirrel Defender is currently in closed testing. Participation details and a public sign-up link have not yet been confirmed here.</p>
            <p class="sd-beta-thanks">THANKS FOR YOUR INTEREST! ${acorn}</p>
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
        q('#sd-expand').setAttribute('aria-label','Enlarge: '+group.labels[shotIndex]);
        container.querySelectorAll('[data-sd-thumb]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.sdThumb)===shotIndex)));
      }
      function selectGroup(index){
        groupIndex=index;const group=groups[index];
        container.querySelectorAll('[data-sd-group]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.sdGroup)===index)));
        q('#sd-group-counter').textContent='0'+(index+1);q('#sd-note-title').textContent=group.name;q('#sd-note-copy').textContent=group.copy;
        q('#sd-thumbnails').innerHTML=group.shots.map((id,i)=>`<button data-sd-thumb="${i}" aria-pressed="${i===0}" aria-label="Show: ${group.labels[i]}">${image(id,group.labels[i],'loading="lazy"')}<span>${String(i+1).padStart(2,'0')}</span></button>`).join('');
        selectShot(0);
      }
      q('#sd-thumbnails').addEventListener('click',e=>{const button=e.target.closest('[data-sd-thumb]');if(button)selectShot(Number(button.dataset.sdThumb));});
      container.querySelectorAll('[data-sd-group]').forEach(b=>b.addEventListener('click',()=>selectGroup(Number(b.dataset.sdGroup))));
      q('#sd-shot-prev').addEventListener('click',()=>selectShot(shotIndex-1));q('#sd-shot-next').addEventListener('click',()=>selectShot(shotIndex+1));
      q('#sd-expand').addEventListener('click',()=>{const group=groups[groupIndex];api.openVisual(image(group.shots[shotIndex],group.labels[shotIndex]),'Squirrel Defender / '+group.labels[shotIndex],'Game screenshot supplied by the creator.');});
      container.querySelectorAll('[data-sd-shot]').forEach(b=>b.addEventListener('click',()=>api.openVisual(image(Number(b.dataset.sdShot),b.dataset.caption),'Squirrel Defender / '+b.dataset.caption,'Game screenshot supplied by the creator.')));
      container.querySelectorAll('[data-sd-scroll]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();q(a.getAttribute('href')).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
      selectGroup(0);
    }
  };
  window.PortfolioProjects=window.PortfolioProjects||{};
  window.PortfolioProjects[project.id]=project;
})();
