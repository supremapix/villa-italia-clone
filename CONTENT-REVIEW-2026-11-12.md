# Conteúdo de planejamento por página — 12/11/2026

## Escopo
78 URLs do sitemap público auditadas. 78 blocos editoriais individualizados,
com cerca de 6.018 palavras novas, perguntas diretas, respostas visíveis em HTML
prerenderizado e links internos relevantes. Conteúdo anterior e funcionalidades
preservados. Não foram criadas páginas concorrentes para intenções já cobertas.

## Pesquisa e limites
- Google Trends: consulta Brasil, últimos 12 meses, termos Beto Carrero,
  pousada em Penha e Penha SC. Interface indisponível na consulta web e endpoint
  retornou 429. Nenhum volume, índice de interesse ou ranking foi obtido. Não
  chamar os temas de 'mais buscados' com base neste trabalho.
- Intenções editoriais: escolha de quarto, reserva, parque com crianças, chegada,
  roteiros, praias, chuva, gastronomia, acessibilidade, eventos e temporadas.
- Google Search Central: https://developers.google.com/search/docs/appearance/ai-features?hl=pt-br
  recomenda fundamentos de SEO, indexabilidade e conteúdo útil; não há marcação
  especial obrigatória para AI Overviews. Não há garantia de aparição/citação.
- Bing: https://blogs.bing.com/webmaster/2025/12/Does-Duplicate-Content-Hurt-SEO-and-AI-Search-Visibility/
  orienta diferenciar intenções e evitar duplicações.
- Fontes públicas direcionadas nos blocos: FAQ oficial Beto Carrero, IMA,
  Turismo de Penha, Defesa Civil SC, Arteris, Motiva Navegantes, Oktoberfest.
- Não foram obtidos dados privados de Search Console/Bing; não são relatórios
  de posição, impressões ou demanda. Google Trends não mede volume absoluto.

## Fatos e segurança
Não adicionados preços, descontos, pacotes, refeições inclusas ou infraestrutura
não confirmados. Mantida a política de não aceitar pets. Eventos futuros são
condicionados à confirmação do organizador, e artigos de períodos passados
recebem orientação temporal explícita. Locais informais recebem ressalva de
localização/acesso. Não se presume segurança do banho por aparência da água.

O conteúdo anterior não foi integralmente reescrito nem certificado: existem
alegações antigas sobre praias, distâncias e estrutura que merecem auditoria
separada. Este lote acrescenta orientação de planejamento, não valida essas
alegações. Não alterei políticas comerciais da pousada.

## Validação
- npm run build: passou, 78 rotas; aviso de chunk grande preexistente.
- TypeScript: passou.
- ESLint: 0 erros, 9 avisos preexistentes.
- test-static: 78 rotas, 261 schemas, 429 imagens, 1871 links, sem problemas.
- test-travel-planning: 78 blocos, títulos únicos, um H1, canonicals e links.
- test-sharing e test-latest-articles: passaram.
- test-public-facts: causa identificada e corrigida no teste. Ele congelava a FAQ,
  rodapé e número de rotas no snapshot de 22/10, anterior a commits legítimos
  7ff9d33 (política pets/acessibilidade) e 9b7fd1a (Instagram/compartilhamento).
  Atualizei a base de preservação para a versão publicada d70e316 e 78 rotas.
  Mantidos todos os asserts factuais; suíte passou. FAQ/rodapé não alterados.
- QA visual: navegador local não iniciou (restrição de socket); navegador cloud
  não acessou localhost (connection refused). Prévia estática via data URL
  recusada pela política de protocolos do browser. Não declarar visual aprovado.

## Publicação
Não publicada. O pedido foi gerar material; autorização explícita de publicação
precisa ser confirmada antes de atualizar o repositório/produção.

## Conferência complementar
- /index.html redireciona permanentemente à home; canonical da home preservado.
- Home: bloco sobre pousada com piscina em Penha, diferenciando coberta de
  aquecida sem prometer aquecimento.
- Cinco artigos de períodos encerrados receberam aviso antes da imagem/conteúdo,
  inclusive Réveillon 2026 e verão 2025/2026. Não alterei o slug histórico.
- Dados históricos de Search Console foram comunicados pelo coordenador, não
  medidos pelo Trends: 180 cliques/17,6 mil impressões em outubro, 23 cliques
  para 'pousada com piscina na penha sc' e 131 cliques em celular. Não são
  estimativa de volume de mercado nem garantia de ranking.
