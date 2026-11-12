import fs from 'node:fs';
import assert from 'node:assert/strict';
const routes=JSON.parse(fs.readFileSync('dist/routes.json','utf8'));
const titles=new Set(),intro=new Set();
for(const route of routes){
 const html=fs.readFileSync('dist/'+(route==='/'?'index':route.slice(1))+'.html','utf8');
 assert.equal((html.match(/data-travel-planning/g)||[]).length,1,route);
 assert.equal((html.match(/<h1\b/g)||[]).length,1,route);
 const section=html.split('data-travel-planning')[1].split('</section>')[0];
 const title=section.match(/id="travel-planning-title"[^>]*>(.*?)<\/h2>/)[1];assert(!titles.has(title)); titles.add(title);
 for(const match of section.matchAll(/href="(\/[^"#]*)(?:#[^"]*)?"/g)){assert(routes.includes(match[1]||'/'),'Missing '+match[1]);}
 assert(html.includes('rel="canonical"'),'Canonical '+route);
}
assert.equal(routes.length,78);
assert(!fs.readFileSync('dist/404.html','utf8').includes('data-travel-planning'));
console.log('PASS: 78 route-specific sections, unique headings, one H1, canonical and internal links, absent on 404.');
