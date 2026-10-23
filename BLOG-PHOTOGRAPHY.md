# Capas distintas e procedência do blog

Regra editorial de 23/10/2026: cada matéria deve ter capa visualmente distinta e pertinente. Priorizar fotografias reais próprias ou licenciadas. O cliente permite ilustrações realistas originais para temas genéricos, sempre identificadas como **Imagem ilustrativa**. Nunca apresentar geração como fotografia documental de destinos, parques, quartos, piscinas, serviços ou eventos reais. Não resolver repetição com recortes da mesma foto.

## Registro
BLOG-PHOTO-INVENTORY.json registra 45 URLs, títulos, arquivos, autoria, fonte, licença e aplicação: seis fotografias reais e 39 ilustrações. BLOG-ILLUSTRATION-PROMPTS.json registra pedidos de geração. Ilustrações criadas na ferramenta integrada OpenAI ImageGen, sem contratação externa; nenhuma licença aberta é atribuída.

src/data/blogPhotography.ts associa cada artigo a uma capa. O pôr do sol mantém seu registro original. Home, índice, artigo e OG/Twitter usam o catálogo único. Novas matérias exigem capa revisada e rebuild/deploy. O catálogo falha se faltar capa; o teste impede arquivos e bytes repetidos. Adequação e diferença visual também exigem revisão humana.

## Fotografias reais
- room-1.jpg, gallery-6.jpg e gallery-1.jpg: quarto, piscina e varanda do acervo próprio confirmado, anteriormente publicados na galeria/acomodações. Reutilização no site autorizada pelo cliente; fotógrafo não identificado e sem licença aberta declarada. Não inventar autoria nem redistribuir como banco de imagens.
- Pôr do sol no Trapiche: Bruno Rodrigues dos santos, https://commons.wikimedia.org/wiki/File:Por_do_Sol-Penha_SC.jpg, CC BY-SA 4.0. Preservado. Ver SUNSET-IMAGE-LICENSE.txt.
- Praia Vermelha: crédito obrigatório Renato Soares - MTUR, 18/03/2018. https://commons.wikimedia.org/wiki/File:RenatoSoares_PraiaVermelha_Penha_SC_(40434982784).jpg. A fonte registra Public Domain Mark aplicado por MTur Destinos e revisado no Commons. PDM é marcação de domínio público, não licença Creative Commons. Crédito preservado; recorte 16:9 e conversão WebP.
- Castelo das Nações: HVL, 19/12/2018. https://commons.wikimedia.org/wiki/File:Castelo_das_Na%C3%A7%C3%B5es_no_Beto_Carrero_World,_Penha_SC.JPG. CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Recorte 16:9 e conversão WebP indicados na legenda.

## Ilustrações e manutenção
As outras capas mostram planejamento, bagagem, alimentação ou lazer genérico, sem documentar atrações e serviços. Alt e legenda explicitam essa natureza. Imagens antigas sem documentação permanecem desativadas no blog, sem afirmar que sejam falsas; arquivos legados podem ser usados em outras páginas.

Novos arquivos WebP 1200×675. Cards preservam lazy loading e enquadramento responsivo; hero do artigo carrega imediatamente. Revisar cada imagem, alt, legenda e título. Verificar fonte e direitos para fotos reais. Rodar node scripts/test-blog-photography.mjs --inventory, npm run build, npx tsc --noEmit, node scripts/test-blog-photography.mjs e npm run test:static; conferir produção após deploy.
