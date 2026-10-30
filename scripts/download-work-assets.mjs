// Download official product artwork and record public sources for the author page.
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const folder=path.join(root,'assets/work');
await fs.mkdir(folder,{recursive:true});
const pages=[
  {id:'buddy',url:'https://play.google.com/store/apps/details?id=ai.mybuddy.talkingflashcards_new&hl=en'},
  {id:'brainwell',url:'https://play.google.com/store/apps/details?id=com.monclarity.brainwell&hl=en'},
  {id:'bluelight',url:'https://store.epicgames.com/en-US/p/bluelight-faq-53bfd1'},
  {id:'finch',url:'https://www.prnewswire.com/news-releases/finchshift-controllers-deliver-new-degrees-of-interaction-in-virtual-reality-300772207.html'},
  {id:'buddy-site',url:'https://buddy.ai/en/english-for-kids'},
  {id:'brainwell-site',url:'https://brainwell.com/'},
  {id:'bluelight-announcement',url:'https://www.globenewswire.com/news-release/2023/11/03/2773354/0/en/bluelight-inc-is-pumped-to-announce-the-open-beta-on-a-testnet.html'}
];
const clean=s=>s?.replaceAll('&amp;','&').replaceAll('\\u0026','&');
function attribute(tag,name){return clean(tag.match(new RegExp(`\\b${name}=["']([^"']+)["']`,'i'))?.[1]);}
async function save(url,id){
  const r=await fetch(url,{signal:AbortSignal.timeout(20000)});
  if(!r.ok)throw new Error(`Image HTTP ${r.status}`);
  const mime=r.headers.get('content-type')?.split(';')[0];
  const ext={'image/png':'png','image/jpeg':'jpg','image/webp':'webp','image/svg+xml':'svg'}[mime];
  if(!ext)throw new Error(`Unexpected media ${mime}`);
  const file=`assets/work/${id}.${ext}`;
  await fs.writeFile(path.join(root,file),new Uint8Array(await r.arrayBuffer()));
  return file;
}
const result=await Promise.all(pages.map(async page=>{
  try{
    const r=await fetch(page.url,{signal:AbortSignal.timeout(25000)});
    if(!r.ok)throw new Error(`Page HTTP ${r.status}`);
    const html=await r.text();
    const og=[...html.matchAll(/<meta\b[^>]+>/gi)].map(m=>m[0]).find(t=>attribute(t,'property')==='og:image');
    const image=attribute(og||'','content');
    const screenshot=[...html.matchAll(/<img\b[^>]+>/gi)].map(m=>m[0]).find(t=>attribute(t,'alt')==='Screenshot image');
    const screen=attribute(screenshot||'','src');
    const youtube=[...new Set([...html.matchAll(/https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)\/[^\s"'<>\\]+/gi)].map(m=>clean(m[0])))].filter(u=>!u.includes('youtube.com/t/'));
    const thumbnail=html.match(/https?:\/\/i\.ytimg\.com\/vi(?:_webp)?\/([A-Za-z0-9_-]{11})\//)?.[1];
    if(thumbnail)youtube.unshift(`https://www.youtube.com/watch?v=${thumbnail}`);
    const files={};
    if(image)try{files.image=await save(new URL(image,page.url).href,page.id);}catch(e){files.imageError=e.message;}
    if(screen)try{files.screenshot=await save(screen,page.id+'-screen');}catch(e){files.screenshotError=e.message;}
    const mediaImages=[...html.matchAll(/<img\b[^>]+>/gi)].map(m=>({alt:attribute(m[0],'alt'),src:attribute(m[0],'src')})).filter(i=>i.src&&!i.src.startsWith('data:')&&/finch|blue|buddy|brain|muffin/i.test((i.alt||'')+' '+i.src)).slice(0,6);
    return {...page,...files,youtube:youtube.slice(0,8),mediaImages};
  }catch(e){return {...page,error:e.message};}
}));
await fs.writeFile(path.join(folder,'sources.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
