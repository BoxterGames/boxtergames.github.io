// Refresh public app icons from the Google Play pages listed in the local manifest.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = path.join(root, 'assets/saygames/games.json');
const games = JSON.parse(await fs.readFile(manifest, 'utf8'));
const failures = [];
let cursor = 0;
await Promise.all(Array.from({length:4}, async () => {
  while (cursor < games.length) {
    const game = games[cursor++];
    try {
      const response = await fetch(game.href, {signal:AbortSignal.timeout(25000)});
      if (!response.ok) throw new Error(`Google Play HTTP ${response.status}`);
      const html = await response.text();
      const tag = html.match(/<meta\b[^>]*property=["']og:image["'][^>]*>/i)?.[0];
      const imageUrl = tag?.match(/content=["']([^"']+)["']/i)?.[1]?.replaceAll('&amp;', '&');
      if (!imageUrl || new URL(imageUrl).hostname !== 'play-lh.googleusercontent.com') throw new Error('Missing official icon');
      const imageResponse = await fetch(imageUrl, {signal:AbortSignal.timeout(25000)});
      if (!imageResponse.ok) throw new Error(`Icon HTTP ${imageResponse.status}`);
      const mime = imageResponse.headers.get('content-type')?.split(';')[0];
      const ext = {'image/png':'png','image/webp':'webp','image/jpeg':'jpg'}[mime];
      if (!ext) throw new Error(`Unexpected image type ${mime}`);
      game.icon = `assets/saygames/${game.id.replaceAll('.', '-')}.${ext}`;
      await fs.writeFile(path.join(root, game.icon), new Uint8Array(await imageResponse.arrayBuffer()));
      console.log(`Saved ${game.name}`);
    } catch (error) {
      failures.push(`${game.name}: ${error.message}`);
    }
  }
}));
await fs.writeFile(manifest, JSON.stringify(games, null, 2)+'\n');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
}
