import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
const {redirects=[]}=JSON.parse(fs.readFileSync('vercel.json','utf8'));
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.xml':'application/xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2','.txt':'text/plain'};
http.createServer((req,res)=>{
 const url=new URL(req.url,'http://localhost');
 const redirect=redirects.find(rule=>rule.source===url.pathname);
 if(redirect){const target=new URL(redirect.destination,url);target.search=url.search;res.writeHead(redirect.permanent?308:307,{Location:target.pathname+target.search+target.hash});res.end();return;}
 let file=path.resolve(root,'.'+decodeURIComponent(url.pathname));
 if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(400);res.end();return;}
 if(url.pathname==='/')file=path.join(root,'index.html');
 else if(!path.extname(file))file+='.html';
 let status=200;if(!fs.existsSync(file)||!fs.statSync(file).isFile()){file=path.join(root,'404.html');status=404;}
 res.writeHead(status,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res);
}).listen(8081,'127.0.0.1',()=>console.log('Static preview: http://127.0.0.1:8081'));
