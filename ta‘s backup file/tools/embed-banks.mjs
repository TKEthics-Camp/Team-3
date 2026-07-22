import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(toolsDir, '..');
const bankFiles = [
  'math.json',
  'english.json',
  'science.json',
  'math-extension.json',
  'vocabulary-extension.json',
];

const entries = await Promise.all(bankFiles.map(async file => {
  const value = JSON.parse(await readFile(path.join(root, 'data', file), 'utf8'));
  return [file, value];
}));

const payload = JSON.stringify(Object.fromEntries(entries)).replaceAll('<', '\\u003c');
const block = `<script id="embeddedBanks" type="application/json">${payload}</script>`;
const indexPath = path.join(root, 'html', 'index.html');
let html = await readFile(indexPath, 'utf8');
const existing = /<script id="embeddedBanks" type="application\/json">[\s\S]*?<\/script>\s*/;

if (existing.test(html)) {
  html = html.replace(existing, `${block}\n`);
} else {
  const marker = /<script>\r?\nconst TOTAL=/;
  if (!marker.test(html)) throw new Error('Main script marker not found in index.html');
  html = html.replace(marker, `${block}\n<script>\nconst TOTAL=`);
}

await writeFile(indexPath, html, 'utf8');
console.log(`Embedded ${bankFiles.length} banks into index.html (${payload.length} bytes).`);
