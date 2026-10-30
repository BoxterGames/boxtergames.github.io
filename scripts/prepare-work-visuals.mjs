import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const sources=JSON.parse(await fs.readFile(path.join(root,'assets/work/sources.json'),'utf8'));
for(const source of sources) if(source.mediaImages)source.mediaImages=source.mediaImages.filter(i=>!i.src.startsWith('data:'));
const report=[];
async function download(url,file){
 const r=await fetch(url,{signal:AbortSignal.timeout(25000)});
 if(!r.ok)throw new Error(`HTTP ${r.status}`);
 await fs.writeFile(path.join(root,file),new Uint8Array(await r.arrayBuffer()));
 report.push({file,source:url});
}
await Promise.all([
 download('https://buddy.ai/_nuxt/buddy.DJZhI2Gc.webp','assets/work/buddy-character.webp'),
 download('https://mma.prnewswire.com/media/452361/Finch_Shift_Controller.jpg','assets/work/finch-controller.jpg'),
 download('https://mma.prnewswire.com/media/452362/Finch_Shift.jpg','assets/work/finch-demo.jpg'),
 ...['9JaY2QpjAI8','YfEPdo-ZQkk'].map(async id=>{
  try{const r=await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`,{signal:AbortSignal.timeout(20000)});report.push({video:id,status:r.status,...(r.ok?await r.json():{})});}catch(e){report.push({video:id,error:e.message});}
 }),
 (async()=>{
  const url='https://www.prnewswire.com/news-releases/virtual-reality-kit-finch-shift-is-launching-at-ces-2017-to-accelerate-the-mobile-vr-revolution-300383622.html';
  try{
   const r=await fetch(url,{signal:AbortSignal.timeout(20000)});const html=await r.text();
   report.push({page:'finch-2016',images:[...new Set([...html.matchAll(/https:\/\/mma\.prnewswire\.com\/media\/[^\s"'<>]+/g)].map(m=>m[0]))].slice(0,12),videos:[...new Set([...html.matchAll(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/g)].map(m=>m[1]))]});
  }catch(e){report.push({page:'finch-2016',error:e.message});}
 })()
].map(p=>p.catch(e=>report.push({error:e.message}))));
await fs.writeFile(path.join(root,'assets/work/sources.json'),JSON.stringify(sources,null,2)+'\n');
await fs.writeFile(path.join(root,'assets/work/visual-sources.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
