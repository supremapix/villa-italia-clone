import fs from 'node:fs';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const base='9d769f7cab10a614fea8c5281da6a12e0e1584a7';
for(const file of ['src/data/editorialArticles.ts','src/pages/FAQ.tsx','src/components/Footer.tsx','src/components/VillaIntroduction.tsx']){
 const old=execFileSync('git',['show',base+':'+file],{encoding:'utf8'}).replaceAll('\r','');
 assert.equal(fs.readFileSync(file,'utf8').replaceAll('\r',''),old,file+' must preserve previous editorial/property scope');
}
const html=id=>fs.readFileSync('dist/blog/'+id+'.html','utf8');
assert.ok(html('curitiba-ate-beto-carrero-world-quanto-tempo').includes('BR-376'));
assert.ok(!html('curitiba-ate-beto-carrero-world-quanto-tempo').includes('180 km'));
assert.ok(!html('roteiro-maringa-beto-carrero-world').includes('430 km'));
assert.ok(html('beto-carrero-world-dicas-guia-2026').includes('1 ano e 11 meses'));
for(const id of ['guia-completo-penha-sc-beto-carrero','beto-carrero-world-guia-completo-familias-2026'])assert.ok(!/até 1 metro.*(?:não pagam|gratuita)/i.test(html(id)));
assert.ok(!/R\$ (?:80|120|500)/.test(html('ilha-feia-penha-sc-passeio-barco')));
assert.ok(!html('gastronomia-penha-sc-frutos-do-mar').includes('colhidos no mesmo dia'));
assert.ok(html('feriados-prolongados-2026-penha-beto-carrero').includes('16 de novembro não aparece como feriado nacional'));
assert.ok(html('festa-nacional-do-marisco-2027-penha-sc').includes('não comprova datas, local, artistas ou gratuidade'));
assert.ok(!html('reveillon-2026-2027-penha-balneario-camboriu').includes('15 minutos'));
const routes=JSON.parse(fs.readFileSync('dist/routes.json','utf8'));assert.equal(routes.length,77);
console.log('Public-fact corrections and preservation checks passed. 77 routes; no new articles.');
