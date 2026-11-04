import assert from 'node:assert/strict';
const base=process.env.TEST_BASE_URL || 'http://127.0.0.1:8081';
const targets={contato:'contact',fotos:'gallery',localiza:'location'};
for(const [legacy,id] of Object.entries(targets)){
 for(const suffix of ['', '.html']){
  const response=await fetch(`${base}/${legacy}${suffix}?origem=teste`,{redirect:'manual'});
  assert.equal(response.status,308,legacy+suffix);
  const destination=new URL(response.headers.get('location'),base);
  assert.equal(destination.pathname,'/');
  assert.equal(destination.hash,'#'+id);
  assert.equal(destination.searchParams.get('origem'),'teste');
  const page=await fetch(destination);
  assert.equal(page.status,200);
  assert.ok((await page.text()).includes(`id="${id}"`),`Missing destination section: ${id}`);
 }
}
assert.equal((await fetch(`${base}/nao-existe-auditoria-20261104`)).status,404);
assert.equal((await fetch(`${base}/pacotes`)).status,404);
console.log('6 legacy redirects reach their existing sections, preserve query strings; unknown and discontinued package URLs remain 404.');
