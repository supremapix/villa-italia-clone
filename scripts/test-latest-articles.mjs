import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';
const js = ts.transpileModule(fs.readFileSync('src/data/latestArticles.ts','utf8'), {compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {latestPublishedArticles:latest} = await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));
const fixture = (id,dateISO,extra={}) => ({id,dateISO,...extra});
const catalog = {z:fixture('z','2026-10-20'),a:fixture('a','2026-10-20'),old:fixture('old','2026-10-01',{modifiedISO:'2026-10-22'}),future:fixture('future','2026-10-23'),draft:fixture('draft','2026-10-22',{status:'draft'}),invalid:fixture('invalid','2026-02-30'),missing:fixture('missing'),malformed:fixture('malformed','22/10/2026')};
assert.deepEqual(latest(catalog,'2026-10-22').map(p=>p.id),['a','z','old']);
assert.deepEqual(latest(Object.fromEntries(Object.entries(catalog).reverse()),'2026-10-22').map(p=>p.id),['a','z','old']);
// Temporary in-memory new article: never enters the production catalog.
catalog.newArticle=fixture('newArticle','2026-10-22',{status:'published'});
assert.deepEqual(latest(catalog,'2026-10-22',2).map(p=>p.id),['newArticle','a']);
delete catalog.newArticle;
assert.equal(latest(catalog,'2026-10-22')[0].id,'a');
assert.equal(latest(catalog,'2026-10-23')[0].id,'future');
console.log('PASS: publication order, stable ties, draft/future/invalid exclusions, limit, new-article insertion and fixture cleanup.');
