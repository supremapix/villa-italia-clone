import fs from 'node:fs';
import path from 'node:path';
import {render,routes} from '../dist-ssr/entry-server.js';
const template=fs.readFileSync('dist/index.html','utf8');
for(const route of [...routes,'/404']){
 const {html,head}=render(route);
 const file=path.join('dist',route==='/'?'index.html':route.slice(1)+'.html');
 fs.mkdirSync(path.dirname(file),{recursive:true});
 fs.writeFileSync(file,template.replace('<!--app-head-->',head).replace('<!--app-html-->',html));
}
const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+routes.map(route=>'<url><loc>https://www.pousadaviladitalia.com.br'+route+'</loc></url>').join('')+'</urlset>';
fs.writeFileSync('dist/sitemap.xml',xml);
fs.writeFileSync('dist/routes.json',JSON.stringify(routes));
console.log('Rendered '+routes.length+' indexable routes and a noindex 404.');
