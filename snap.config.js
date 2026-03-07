module.exports = {
  source: "dist",
  destination: "dist",
  include: [
    "/",
    "/faq",
    "/acomodacoes",
    "/bairros-penha",
    // Praias oficiais (19)
    "/bairros-penha/armacao",
    "/bairros-penha/praia-alegre",
    "/bairros-penha/praia-grande",
    "/bairros-penha/quilombo",
    "/bairros-penha/praia-vermelha",
    "/bairros-penha/poa",
    "/bairros-penha/cancela",
    "/bairros-penha/cascalho",
    "/bairros-penha/saudade",
    "/bairros-penha/bacia-da-vovo",
    "/bairros-penha/fortaleza",
    "/bairros-penha/manguinho",
    "/bairros-penha/monge",
    "/bairros-penha/lucas",
    "/bairros-penha/sao-miguel",
    "/bairros-penha/gravata",
    "/bairros-penha/paciencia",
    "/bairros-penha/cordas",
    // Enseadas e trechos locais (6)
    "/bairros-penha/retiro",
    "/bairros-penha/farol",
    "/bairros-penha/pescadores",
    "/bairros-penha/fundinho",
    "/bairros-penha/mirante",
    "/bairros-penha/costao-quilombo",
    "/bairros-penha/canto-armacao",
    // Blog posts
    "/blog/ferias-verao-janeiro-fevereiro-marco-2026-penha-balneario-camboriu",
    "/blog/cuidados-pele-verao-guia-protecao-ferias-praia",
    "/blog/temporada-verao-2025-2026-penha-sc",
    "/blog/reveillon-2025-2026-penha-sc"
  ],
  skipThirdPartyRequests: true,
  headless: true,
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  inlineCss: true,
  saveAs: "html",
  crawl: false,
  minifyHtml: {
    collapseWhitespace: true,
    removeComments: true
  }
};
