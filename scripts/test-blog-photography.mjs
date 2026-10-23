import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import ts from 'typescript';
import {createHash} from 'node:crypto';
const cache=new Map();
function load(file) {
 file=path.resolve(file); if(cache.has(file))return cache.get(file);
 const module={exports:{}};cache.set(file,module.exports);
 const js=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
 new Function('require','module','exports',js)(id=>id.startsWith('@/assets/')?{default:id.replace('@/', 'src/')}:load(path.resolve(path.dirname(file),id+'.ts')),module,module.exports);
 return module.exports;
}
const {blogPosts}=load('src/data/blogCatalog.ts');
const old={};for(const [file,key] of [['legacyBlogArticles','legacyBlogPosts'],...Array.from({length:5},(_,i)=>['blogArticles'+(i+1),'blogArticles'+(i+1)]),['editorialArticles','editorialArticles']])Object.assign(old,load('src/data/'+file+'.ts')[key]);
const allowed=Object.values(blogPosts).map(p=>p.image);
assert.equal(new Set(allowed).size,Object.keys(blogPosts).length,'Cover paths must be unique');
assert.equal(new Set(allowed.map(f=>createHash('sha256').update(fs.readFileSync(f)).digest('hex'))).size,allowed.length,'Cover bytes must be unique');
const inventory=Object.values(blogPosts).map(p=>{
 assert.ok(p.imageAlt&&p.imageCredit,p.id);
 if(p.imageCredit.kind==='illustration')assert.ok(p.imageAlt.startsWith('Imagem ilustrativa: '),p.id);
 assert.equal(p.content,old[p.id].content,'Article text changed: '+p.id);
 assert.ok(!/<img\b/i.test(p.content),'Untracked inline image: '+p.id);
 if(p.id==='por-do-sol-penha-sc')assert.equal(p.image,old[p.id].image);
 return {article:'/blog/'+p.id,title:p.title,kind:p.imageCredit.kind||'photograph',previousImage:old[p.id].image,image:p.image,alt:p.imageAlt,author:p.imageCredit.author,source:p.imageCredit.source,license:p.imageCredit.license||p.imageCredit.licenseLabel,application:['article','blog index','home when selected by publication date','Open Graph','Twitter','sharing'],locationNote:p.imageCredit.changes};
});
if(process.argv.includes('--inventory'))fs.writeFileSync('BLOG-PHOTO-INVENTORY.json',JSON.stringify(inventory,null,2)+'\n');
else if(!process.argv.includes('--catalog')) for(const p of Object.values(blogPosts)) {
 const html=fs.readFileSync('dist/blog/'+p.id+'.html','utf8');
 const image=html.match(/property="og:image"[^>]*content="([^"]+)"/)?.[1];assert.ok(image);
 // Vite deduplicates identical photos under another existing asset name.
 assert.ok(fs.readFileSync('dist'+new URL(image).pathname).equals(fs.readFileSync(p.image)),p.id+' asset bytes');
 assert.ok(html.includes(p.imageAlt),p.id+' alt');
 assert.ok(html.includes(p.imageCredit.author.replaceAll('&','&amp;')),p.id+' credit');
 if(p.imageCredit.kind==='illustration')assert.ok(html.includes('Imagem ilustrativa'),p.id+' visible disclosure');
}
if(!process.argv.includes('--inventory')&&!process.argv.includes('--catalog')) {
 const home=fs.readFileSync('dist/index.html','utf8').match(/<section id="home-blog"[\s\S]*?<\/section>/)?.[0];
 const index=fs.readFileSync('dist/blog.html','utf8').match(/<main[\s\S]*?<\/main>/)?.[0];
 assert.ok(home&&index);
 for(const html of [home,index])for(const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
   const data=fs.readFileSync('dist'+match[1]);assert.ok(allowed.some(f=>data.equals(fs.readFileSync(f))),'Unapproved card image: '+match[1]);
 }
}
console.log(JSON.stringify({articles:inventory.length,uniqueCovers:allowed.length,photographs:inventory.filter(p=>p.kind==='photograph').length,illustrations:inventory.filter(p=>p.kind==='illustration').length,articleTextUnchanged:true,sunsetPreserved:true}));
