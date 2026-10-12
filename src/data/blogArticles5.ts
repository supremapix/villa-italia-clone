import blogVistaGeralReal from "@/assets/penha-vista-geral-real.jpg";
import blogArmacaoReal from "@/assets/penha-praia-armacao-real.jpg";
import blogBetoCarreroReal from "@/assets/beto-carrero-castelo-real.jpg";
import blogCamboriuNoiteReal from "@/assets/balneario-camboriu-noite-real.jpg";

export interface BlogPostData {
  id: string;
  title: string;
  date: string;
  dateISO: string;
  content: string;
  image: string;
  metaDescription: string;
  keywords: string;
  category: string;
}

const CTA_BLOCK = `
<div class="highlight" style="text-align:center; margin: 2rem 0;">
  <h3>🏨 Hospede-se na Pousada Vila D'Itália em Penha SC</h3>
  <p>A <strong>80 metros da Praia da Armação</strong> e a <strong>5 minutos do Beto Carrero World</strong>. Piscina, café da manhã incluído e 18 quartos para casais e famílias.</p>
  <p><a href="https://api.whatsapp.com/send?phone=5547992738090&text=Olá!%20Vim%20do%20blog%20e%20gostaria%20de%20fazer%20uma%20reserva" class="text-primary hover:text-primary/80 underline font-bold" target="_blank" rel="noopener noreferrer">👉 Consultar Disponibilidade via WhatsApp</a></p>
  <p>📞 <a href="https://wa.me/5547992738090" class="text-primary hover:text-primary/80 underline">WhatsApp (47) 99273-8090</a> — Rua Luís Vicente da Silva, 183, Penha–SC</p>
</div>`;

export const blogArticles5: Record<string, BlogPostData> = {
  "trilhas-ecologicas-penha-sc": {
    id: "trilhas-ecologicas-penha-sc",
    title: "Trilhas Ecológicas em Penha SC: Onde Caminhar na Natureza",
    date: "1 de Outubro, 2026",
    dateISO: "2026-10-01",
    metaDescription: "Descubra as melhores trilhas ecológicas em Penha SC. Mirantes naturais, contato com a Mata Atlântica e dicas de segurança para sua aventura.",
    keywords: "trilhas Penha SC, trilhas ecológicas Santa Catarina, mirantes Penha, caminhada natureza Penha, turismo aventura Penha",
    category: "Guias",
    image: blogVistaGeralReal,
    content: `<div class="blog-content">
      <p class="lead">Penha, muito além de suas belas praias e do Beto Carrero World, esconde tesouros naturais em suas <strong>trilhas ecológicas</strong>. Explorar a <strong>Mata Atlântica</strong> que contorna nosso litoral é uma experiência revigorante que conecta você diretamente com a natureza.</p>
      
      <h2>Por que fazer trilhas em Penha SC?</h2>
      <p>As trilhas em Penha oferecem vistas panorâmicas de tirar o fôlego, acesso a praias desertas e a oportunidade de observar a fauna e flora locais. É a atividade perfeita para quem busca saúde, aventura e conexão.</p>
      
      <h2>Principais Trilhas</h2>
      <p>Destaque para o acesso a mirantes naturais que proporcionam uma visão única do litoral catarinense. Lembre-se de levar água, protetor solar e usar calçado adequado.</p>
      
      <p>Leia também nosso guia de <a href="/blog/praias-de-penha-sc-guia-completo" class="text-primary hover:text-primary/80 underline font-medium">praias de Penha</a> para descobrir trilhas que levam a praias escondidas.</p>

      ${CTA_BLOCK}
    </div>`
  },
  "o-que-fazer-em-dias-de-chuva-penha-sc": {
    id: "o-que-fazer-em-dias-de-chuva-penha-sc",
    title: "O Que Fazer em Dias de Chuva em Penha SC",
    date: "5 de Outubro, 2026",
    dateISO: "2026-10-05",
    metaDescription: "Não deixe a chuva estragar sua viagem! Confira opções cobertas e passeios imperdíveis em Penha SC e região para dias nublados.",
    keywords: "o que fazer em Penha SC com chuva, atrações cobertas Penha, passeios dia de chuva Santa Catarina, Beto Carrero chuva",
    category: "Guias",
    image: blogBetoCarreroReal,
    content: `<div class="blog-content">
      <p class="lead">O litoral de Santa Catarina pode ter dias nublados ou de chuva, mas isso não significa que suas férias precisam parar. Penha oferece excelentes opções para aproveitar mesmo com tempo fechado.</p>
      
      <h2>Atrações Cobertas</h2>
      <p>O próprio Beto Carrero World possui muitas atrações cobertas e shows em ambientes fechados (como o Excalibur), garantindo diversão. Além disso, a gastronomia local é um ótimo refúgio.</p>
      
      <h2>Passeios na Região</h2>
      <p>Aproveite para visitar museus ou fazer compras em Balneário Camboriú, que possui grandes shoppings e muitas opções indoor.</p>
      
      <p>Veja também nosso <a href="/blog/o-que-fazer-em-penha-sc" class="text-primary hover:text-primary/80 underline font-medium">guia completo de atrações em Penha</a> para outras ideias.</p>

      ${CTA_BLOCK}
    </div>`
  },
  "por-do-sol-penha-sc": {
    id: "por-do-sol-penha-sc",
    title: "Pôr do Sol em Penha SC: os Melhores Mirantes e Pontos para Fotos",
    date: "10 de Outubro, 2026",
    dateISO: "2026-10-10",
    metaDescription: "Encontre os melhores pontos para ver o pôr do sol em Penha SC. Dicas de fotografia e os mirantes mais lindos da cidade.",
    keywords: "pôr do sol Penha SC, melhores mirantes Penha, fotos pôr do sol Santa Catarina, onde ver pôr do sol Penha",
    category: "Turismo",
    image: blogArmacaoReal,
    content: `<div class="blog-content">
      <p class="lead">O espetáculo do pôr do sol em Penha é um dos momentos mais aguardados pelos visitantes. A posição geográfica da cidade proporciona ângulos privilegiados para contemplar o fechamento do dia.</p>
      
      <h2>Onde assistir</h2>
      <p>O <strong>Mirante da Praia Vermelha</strong> é sem dúvida o lugar mais famoso, mas existem cantinhos na Praia da Armação que oferecem um espetáculo particular, especialmente quando os barcos de pesca estão retornando.</p>
      
      <p>Para mais dicas, confira nosso artigo específico sobre o <a href="/blog/mirante-praia-vermelha-penha-vista" class="text-primary hover:text-primary/80 underline font-medium">Mirante da Praia Vermelha</a>.</p>

      ${CTA_BLOCK}
    </div>`
  },
  "penha-sc-para-casais": {
    id: "penha-sc-para-casais",
    title: "Penha SC para Casais: Roteiro Romântico de Fim de Semana",
    date: "15 de Outubro, 2026",
    dateISO: "2026-10-15",
    metaDescription: "Planeje um fim de semana romântico em Penha SC. Roteiro para casais com sugestões de restaurantes, passeios e hospedagem aconchegante.",
    keywords: "viagem romântica Penha SC, roteiro casais Penha, pousada romântica Penha SC, fim de semana casais Santa Catarina",
    category: "Guias",
    image: blogCamboriuNoiteReal,
    content: `<div class="blog-content">
      <p class="lead">Penha SC é um destino surpreendente para casais. Entre praias charmosas, gastronomia de primeira e a tranquilidade da Vila D'Itália, é possível criar memórias inesquecíveis.</p>
      
      <h2>Roteiro de 3 dias</h2>
      <p>Sugestão de roteiro: um dia para relaxar na praia, outro para passeios gastronômicos e um terceiro para conhecer o charme da região com um jantar romântico em Balneário Camboriú.</p>
      
      <p>Hospedar-se na Pousada Vila D'Itália, com nosso ambiente tranquilo e piscinas, é o complemento ideal para um roteiro romântico.</p>

      ${CTA_BLOCK}
    </div>`
  }
};
