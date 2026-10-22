import fs from 'node:fs';
import assert from 'node:assert/strict';
const routes=JSON.parse(fs.readFileSync('dist/routes.json','utf8'));
const issues=[];let images=0,links=0,schemas=0;
for(const route of routes){
 const html=fs.readFileSync('dist/'+(route==='/'?'index':route.slice(1))+'.html','utf8');
 assert.equal((html.match(/rel="canonical"/g)||[]).length,1,route+' canonical');
 assert.ok(html.includes('href="https://www.pousadaviladitalia.com.br'+route+'"'),route+' canonical URL');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,route+' H1');
 assert.ok(html.includes('<meta data-rh="true" name="description"'),route+' description');
 for(const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){JSON.parse(match[1]);schemas++;}
 for(const match of html.matchAll(/<img[^>]*src="([^"?#]+)"/g)){if(match[1].startsWith('/')){images++;if(!fs.existsSync('dist'+match[1]))issues.push({route,image:match[1]});}}
 for(const match of html.matchAll(/<a[^>]*href="(\/[^"?#]*)/g)){links++;if(!routes.includes(match[1])&&!fs.existsSync('dist'+match[1]))issues.push({route,link:match[1]});}
}
const error=fs.readFileSync('dist/404.html','utf8');assert.ok(error.includes('noindex, follow'));assert.ok(!error.includes('rel="canonical"'));
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,routes.length);
const result={routes:routes.length,schemas,images,links,issues};
fs.writeFileSync('../editorial-static-tests.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));assert.equal(issues.length,0,'broken references');
