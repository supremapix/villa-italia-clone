# Fotografias reais no blog

Regra editorial: novas matérias usam somente fotografias reais. Não gerar imagens com IA, não usar nomes de arquivo como prova de autenticidade e não identificar foto de outro lugar como Penha ou Beto Carrero. Registrar fonte, autor, direito de uso, local retratado e alterações antes de aprovar uma fotografia.

## Acervo reutilizado

`src/assets/gallery-1.jpg` (varanda), `gallery-6.jpg` (piscina) e `room-1.jpg` (quarto) integram o acervo próprio confirmado da pousada, já exibido na home/galeria/acomodações antes desta revisão. Origem de manutenção: repositório do cliente, estado anterior `19289ef8cbe8080c8fe8558a99a88df5e3a37846`; referência pública: https://www.pousadaviladitalia.com.br/#gallery e /acomodacoes.

Direito utilizado: reutilização no próprio site autorizada pelo cliente nesta tarefa. Não há licença aberta declarada nem nome de fotógrafo documentado; não atribuir autoria pessoal, inventar CC ou redistribuir como banco de imagens. O registro não substitui contratos de cessão que o proprietário mantenha fora do projeto. As legendas identificam a hospedagem explicitamente; essas fotos não documentam praias, parques, festas ou roteiros citados nos artigos.

## Trapiche de Penha

`src/assets/penha-trapiche-por-do-sol.webp`: fotografia de Bruno Rodrigues dos santos, [fonte Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Por_do_Sol-Penha_SC.jpg), CC BY-SA 4.0. A fonte identifica Trapiche, Penha, em 11/06/2018. Mantida sem alteração; detalhes de conversão e licença em `SUNSET-IMAGE-LICENSE.txt`. Crédito, fonte, licença e indicação de recorte permanecem visíveis.

## Aplicação e lacunas

`BLOG-PHOTO-INVENTORY.json` registra as 45 URLs, imagem anterior, substituta, fonte, autoria conhecida, direito de uso e aplicações. `src/data/blogPhotography.ts` define o acervo permitido, aplicado no catálogo único. Home, índice, artigo e compartilhamento derivam dele; o alt de OG/Twitter também descreve a fotografia, não o destino do título. Recomendações textuais de PenhaNews não contêm fotos.

As imagens antigas sem documentação foram desativadas no blog; não afirmamos que sejam falsas ou geradas por IA. Permanecem no repositório porque outras páginas podem utilizá-las e não fazem parte desta alteração. Faltam fotografias específicas com procedência/licença documentadas de Beto Carrero, praias, trilhas, passeios e eventos. Até sua obtenção, as fotos de hospedagem são contextuais e claramente legendadas. Nenhuma nova fotografia externa foi copiada.

Para aprovar novo acervo: conferir visualmente o original, verificar local e licença/consentimento, registrar autor e fonte, preservar atribuição exigida e então adicionar ao registro. Nunca contornar o catálogo com fotos manuais nos cards. Executar `npm run build`, `node scripts/test-blog-photography.mjs` e `npm run test:static`. Para atualizar o inventário após uma revisão autorizada: `node scripts/test-blog-photography.mjs --inventory`.
