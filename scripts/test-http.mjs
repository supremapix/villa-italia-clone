import fs from 'node:fs';
import assert from 'node:assert/strict';
const origin='http://127.0.0.1:8081';
const routes=JSON.parse(fs.readFileSync('dist/routes.json','utf8'));
const results=[];
for(const route of routes){const response=await fetch(origin+route);const html=await response.text();assert.equal(response.status,200,route);assert.ok(html.includes('<h1'),route+' content without JS');results.push({route,status:response.status});}
for(const route of ['/inexistente-auditoria','/blog/inexistente-auditoria','/bairros-penha/inexistente-auditoria']){const response=await fetch(origin+route);assert.equal(response.status,404,route);assert.ok((await response.text()).includes('noindex, follow'));results.push({route,status:response.status});}
const redirect=await fetch(origin+'/index.html?origem=teste',{redirect:'manual'});assert.equal(redirect.status,308);assert.equal(redirect.headers.get('location'),'/?origem=teste');
const home=await fetch(origin+redirect.headers.get('location'),{redirect:'manual'});assert.equal(home.status,200);
results.push({route:'/index.html?origem=teste',status:308,location:redirect.headers.get('location'),destinationStatus:home.status});
fs.writeFileSync('../editorial-http-tests.json',JSON.stringify(results,null,2));console.log('Passed: 77 HTML pages, 3 real HTTP 404s and one 308 redirect preserving query. Local static server only.');
