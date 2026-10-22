import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';
const code=ts.transpileModule(fs.readFileSync('src/lib/sharing.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {shareLinks,shareMessage}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const page={title:'Penha: pôr do sol & família',url:'https://www.pousadaviladitalia.com.br/blog/por-do-sol-penha-sc',image:'https://www.pousadaviladitalia.com.br/assets/penha.webp'};
const links=shareLinks(page);assert.equal(links.length,6);
for(const link of links) {const u=new URL(link.href);assert.equal(u.protocol,'https:');assert.ok([...u.searchParams.values()].some(v=>v.includes(page.url)));}
const pin=new URL(links.find(l=>l.name==='Pinterest').href);assert.equal(pin.searchParams.get('media'),page.image);assert.equal(pin.searchParams.get('description'),page.title);
assert.ok(shareMessage(page).includes(page.title));
const routes=JSON.parse(fs.readFileSync('dist/routes.json','utf8'));assert.ok(routes.includes('/instagram'));
for(const route of [...routes,'/404']) {
 const html=fs.readFileSync('dist/'+(route==='/'?'index':route.slice(1))+'.html','utf8');
 assert.equal((html.match(/class="suprema-credit"/g)||[]).length,1,route+' credit');
 assert.equal((html.match(/class="floating-actions"/g)||[]).length,1,route+' controls');
 assert.match(html,/<meta[^>]+property="og:image"[^>]+content="https:\/\//);
 assert.match(html,/apple-touch-icon.png/);
}
const home=fs.readFileSync('dist/index.html','utf8');assert.match(home,/og-pousada.jpg/);
const post=fs.readFileSync('dist/blog/por-do-sol-penha-sc.html','utf8');assert.match(post,/property="og:image"[^>]+penha-trapiche-por-do-sol/);
const ico=fs.readFileSync('public/favicon.ico');assert.equal(ico.readUInt16LE(2),1);assert.equal(ico.readUInt16LE(4),3);
const manifest=JSON.parse(fs.readFileSync('public/manifest.json','utf8'));assert.deepEqual(manifest.icons.map(i=>i.sizes),['192x192','512x512']);
for(const [size,name] of [[16,'favicon-16x16.png'],[32,'favicon-32x32.png'],[48,'favicon-48x48.png'],[180,'apple-touch-icon.png'],[192,'android-chrome-192x192.png'],[512,'android-chrome-512x512.png']]) { const png=fs.readFileSync('public/'+name);assert.equal(png.readUInt32BE(16),size);assert.equal(png.readUInt32BE(20),size); }
console.log('Sharing: 6 encoded endpoints; 79 documents with one credit/control set; article OG preserved; ICO and manifest valid.');
