import { useParams, useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import PenhaNews from "@/components/PenhaNews";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";

import blogTemporadaVerao from "@/assets/blog-temporada-verao-penha.jpg";
import blogReveillon from "@/assets/blog-reveillon-penha-2025.jpg";
import blogVeraoJaneiro2026 from "@/assets/blog-verao-janeiro-2026.jpg";
import blogCuidadosPele from "@/assets/blog-cuidados-pele-verao.jpg";
import penhaBeach1 from "@/assets/penha-beach-1.webp";
import penhaBeach2 from "@/assets/penha-beach-2.webp";
import penhaBeach3 from "@/assets/penha-beach-3.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
interface BlogPostData {
  id: string;
  title: string;
  date: string;
  content: string;
  image: string;
}

const blogPosts: Record<string, BlogPostData> = {
  "ferias-verao-janeiro-fevereiro-marco-2026-penha-balneario-camboriu": {
    id: "ferias-verao-janeiro-fevereiro-marco-2026-penha-balneario-camboriu",
    title: "Férias de Verão Janeiro, Fevereiro e Março 2026: Guia Completo de Penha, Balneário Camboriú e Praias da Região",
    date: "3 de Janeiro, 2026",
    content: `
      <div class="blog-content">
        <p class="lead">O <strong>verão 2026</strong> chegou com toda força ao <strong>litoral catarinense</strong>! Se você está planejando suas <strong>férias de janeiro, fevereiro ou março</strong>, este guia completo vai ajudá-lo a descobrir os melhores destinos, passeios imperdíveis e dicas essenciais para aproveitar ao máximo sua estadia na <strong>região de Penha</strong> e arredores. Das praias paradisíacas até as atrações urbanas de <strong>Balneário Camboriú</strong>, prepare-se para viver experiências inesquecíveis!</p>

        <h2>Por Que Escolher a Região de Penha Para Suas Férias?</h2>

        <p>A <strong>região de Penha</strong>, no litoral norte de Santa Catarina, é um verdadeiro tesouro para os turistas que buscam a <strong>combinação perfeita</strong> entre natureza exuberante, entretenimento de qualidade e infraestrutura turística completa. Com mais de <strong>25 praias catalogadas</strong>, desde pequenas enseadas secretas até extensas faixas de areia com ondas perfeitas para surf, a região oferece opções para todos os perfis de viajantes.</p>

        <p>O que torna Penha ainda mais especial é sua <strong>localização estratégica</strong>. Hospedando-se na <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a>, você estará a poucos metros da <strong>Praia da Armação</strong>, a apenas <strong>5 minutos do Beto Carrero World</strong> e com fácil acesso a dezenas de praias e atrações num raio de <strong>50 km</strong>. Isso significa que cada dia de férias pode ser uma nova aventura!</p>

        <h2>Praias Imperdíveis Num Raio de 50 km da Pousada</h2>

        <h3>Em Penha (0 a 10 km)</h3>
        <p>A cidade de <strong>Penha</strong> é um verdadeiro paraíso com suas <strong>25 praias</strong>, cada uma com personalidade única:</p>
        <ul>
          <li><strong>Praia da Armação do Itapocorói</strong>: A poucos metros da pousada, águas calmas ideais para famílias e crianças</li>
          <li><strong>Praia Grande</strong>: Ondas perfeitas para surf e bodyboard, vida noturna animada</li>
          <li><strong>Praia Alegre</strong>: Tranquilidade e beleza natural preservada</li>
          <li><strong>Praia do Quilombo</strong>: Águas cristalinas, perfeita para snorkeling</li>
          <li><strong>Praia Vermelha</strong>: Areia avermelhada única, cercada de vegetação nativa</li>
          <li><strong>Praia do Poá</strong>: Pequena e aconchegante, ideal para relaxar</li>
          <li><strong>Praia da Paciência</strong>: Ondas fortes, point dos surfistas locais</li>
          <li><strong>Praia de São Miguel</strong>: Vista panorâmica espetacular</li>
        </ul>

        <p>Para conhecer todas as praias em detalhes, visite nossa página sobre os <a href="/bairros-penha" class="text-primary hover:text-primary/80 underline font-medium">bairros e praias de Penha</a>.</p>

        <h3>Em Piçarras (10 a 15 km)</h3>
        <ul>
          <li><strong>Praia Central de Piçarras</strong>: Extensa faixa de areia com boa estrutura de quiosques</li>
          <li><strong>Praia de Itajuba</strong>: Mais preservada, ideal para famílias</li>
        </ul>

        <h3>Em Navegantes (15 a 25 km)</h3>
        <ul>
          <li><strong>Praia de Navegantes</strong>: Extensa e com ótima estrutura turística</li>
          <li><strong>Praia do Gravatá</strong>: Mais tranquila, águas cristalinas</li>
        </ul>

        <h3>Em Balneário Camboriú (24 km)</h3>
        <p><strong>Balneário Camboriú</strong>, conhecida como a "<strong>Dubai Brasileira</strong>", oferece uma experiência urbana sofisticada:</p>
        <ul>
          <li><strong>Praia Central</strong>: A mais famosa, com arranha-céus imponentes e vida noturna agitada</li>
          <li><strong>Praia de Laranjeiras</strong>: Acessível pelo teleférico Unipraias, beleza natural preservada</li>
          <li><strong>Praia de Taquaras</strong>: Mais tranquila, perfeita para famílias</li>
          <li><strong>Praia de Estaleiro</strong>: Sossego e natureza intocada</li>
          <li><strong>Praia de Estaleirinho</strong>: Point dos surfistas, ondas consistentes</li>
        </ul>

        <h3>Em Bombinhas e Porto Belo (35 a 50 km)</h3>
        <ul>
          <li><strong>Praia de Bombinhas</strong>: Uma das mais belas de Santa Catarina</li>
          <li><strong>Praia de 4 Ilhas</strong>: Paisagem paradisíaca com ilhas no horizonte</li>
          <li><strong>Praia de Mariscal</strong>: Ondas perfeitas, competições de surf</li>
          <li><strong>Praia de Porto Belo</strong>: Águas calmas e passeios de barco para a Ilha de Porto Belo</li>
        </ul>

        <h2>Passeios Imperdíveis Para Janeiro, Fevereiro e Março 2026</h2>

        <h3>Beto Carrero World</h3>
        <p>O <strong>maior parque temático da América Latina</strong> está localizado em Penha, a apenas <strong>5 minutos da Pousada Vila D'Itália</strong>. Durante o verão, o parque oferece <strong>horários estendidos</strong> e shows especiais. Com mais de <strong>100 atrações</strong>, é diversão garantida para toda a família. Reserve pelo menos <strong>2 dias</strong> para aproveitar tudo!</p>

        <h3>Teleférico Unipraias</h3>
        <p>Em <strong>Balneário Camboriú</strong>, o teleférico Unipraias oferece uma <strong>vista espetacular</strong> do litoral. A estação do Morro da Aguada conta com tirolesa e mirantes panorâmicos. A descida para a <strong>Praia de Laranjeiras</strong> é obrigatória!</p>

        <h3>Cristo Luz</h3>
        <p>Também em Balneário, o <strong>Cristo Luz</strong> é um dos pontos turísticos mais visitados do sul do Brasil. À noite, o monumento ganha iluminação especial e o show de luzes é imperdível.</p>

        <h3>Passeio de Barco para a Ilha de Porto Belo</h3>
        <p>Saindo de <strong>Porto Belo</strong>, o passeio de escuna leva até a ilha, onde você pode fazer <strong>mergulho</strong>, <strong>snorkeling</strong> e apreciar a vida marinha em águas cristalinas.</p>

        <h3>Trilhas Ecológicas</h3>
        <p>A região oferece diversas <strong>trilhas ecológicas</strong> com níveis variados de dificuldade. Destaque para a trilha da <strong>Praia da Paciência</strong> em Penha e as trilhas de <strong>Bombinhas</strong>.</p>

        <h2>Roteiros Sugeridos Para Suas Férias</h2>

        <h3>Roteiro de 5 Dias</h3>
        <ul>
          <li><strong>Dia 1</strong>: Check-in na <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a>, relaxar na piscina e conhecer a Praia da Armação</li>
          <li><strong>Dia 2</strong>: Beto Carrero World (dia inteiro)</li>
          <li><strong>Dia 3</strong>: Praias de Penha (Praia Grande, Quilombo, Praia Alegre)</li>
          <li><strong>Dia 4</strong>: Bate-volta a Balneário Camboriú (Unipraias, Cristo Luz, praia central)</li>
          <li><strong>Dia 5</strong>: Passeio a Bombinhas ou Porto Belo</li>
        </ul>

        <h3>Roteiro de 7 Dias</h3>
        <p>Adicione aos 5 dias acima:</p>
        <ul>
          <li><strong>Dia 6</strong>: Segundo dia no Beto Carrero World (há muito para explorar!)</li>
          <li><strong>Dia 7</strong>: Dia livre para revisitar seus lugares favoritos ou simplesmente relaxar</li>
        </ul>

        <h2>Eventos e Programação Cultural</h2>

        <p>O <strong>verão catarinense</strong> é repleto de eventos especiais:</p>
        <ul>
          <li><strong>Janeiro</strong>: Festival de Verão de Penha, shows musicais nas praias</li>
          <li><strong>Fevereiro</strong>: Carnaval com blocos de rua em Balneário Camboriú</li>
          <li><strong>Março</strong>: Campeonatos de surf em Praia Grande e Mariscal</li>
        </ul>

        <h2>Gastronomia de Verão</h2>

        <p>A <strong>culinária da região</strong> é um capítulo à parte. Os <strong>frutos do mar fresquíssimos</strong> são pescados diariamente e servidos nos melhores restaurantes:</p>
        <ul>
          <li><strong>Sequência de camarão</strong>: Um clássico imperdível</li>
          <li><strong>Peixe na telha</strong>: Especialidade regional</li>
          <li><strong>Ostras de Penha</strong>: Cultivadas na região, frescas e saborosas</li>
          <li><strong>Açaí na praia</strong>: Perfeito para refrescar nos dias quentes</li>
        </ul>

        <p>Visite também nosso <a href="/#restaurant" class="text-primary hover:text-primary/80 underline font-medium">Quiosque do Kaká</a> para petiscos deliciosos!</p>

        <h2>Dicas Para Aproveitar Melhor Suas Férias</h2>

        <ul>
          <li><strong>Reserve com antecedência</strong>: A alta temporada tem grande demanda por hospedagem</li>
          <li><strong>Chegue cedo às praias</strong>: Principalmente nos finais de semana</li>
          <li><strong>Use protetor solar</strong>: O sol do verão é intenso (veja nossas dicas de cuidados com a pele)</li>
          <li><strong>Hidrate-se constantemente</strong>: Leve sempre água</li>
          <li><strong>Planeje os passeios mais distantes</strong>: Saia cedo para aproveitar melhor</li>
          <li><strong>Respeite a natureza</strong>: Não deixe lixo nas praias</li>
        </ul>

        <h2>Por Que Escolher a Pousada Vila D'Itália?</h2>

        <p>A <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a> é a escolha ideal para suas férias de verão:</p>
        <ul>
          <li><strong>Localização perfeita</strong>: A poucos metros da Praia da Armação e 5 minutos do Beto Carrero</li>
          <li><strong>Piscina ao ar livre</strong>: Perfeita para relaxar após os passeios</li>
          <li><strong>Café da manhã completo</strong>: Incluso na diária</li>
          <li><strong>Estacionamento gratuito</strong>: Comodidade para quem viaja de carro</li>
          <li><strong>Wi-Fi em todas as áreas</strong>: Mantenha-se conectado</li>
          <li><strong>Ambiente familiar</strong>: Acolhedor e seguro</li>
        </ul>

        <p>Entre em <a href="/#contact" class="text-primary hover:text-primary/80 underline font-medium">contato conosco</a> para verificar disponibilidade e fazer sua reserva!</p>

        <p class="highlight"><strong>Janeiro, fevereiro e março são os meses mais procurados do verão catarinense! Reserve agora sua estadia na Pousada Vila D'Itália e garanta férias inesquecíveis em uma das regiões mais bonitas do Brasil. Praias paradisíacas, o maior parque temático da América Latina e a melhor hospitalidade esperam por você!</strong></p>
      </div>
    `,
    image: blogVeraoJaneiro2026
  },
  "cuidados-pele-verao-dicas-saude-praia-penha": {
    id: "cuidados-pele-verao-dicas-saude-praia-penha",
    title: "Cuidados com a Pele no Verão: Guia Completo de Saúde e Proteção Para Suas Férias na Praia",
    date: "2 de Janeiro, 2026",
    content: `
      <div class="blog-content">
        <p class="lead">O <strong>verão 2026</strong> chegou e com ele a vontade de curtir as <strong>praias paradisíacas de Penha</strong> e região! Mas para aproveitar ao máximo suas férias, é fundamental cuidar da <strong>saúde da pele</strong>. Neste guia completo, você vai aprender tudo sobre <strong>proteção solar</strong>, <strong>hidratação</strong> e <strong>cuidados essenciais</strong> para manter a pele saudável e bonita durante toda a temporada de praia.</p>

        <h2>Por Que os Cuidados com a Pele São Tão Importantes no Verão?</h2>

        <p>O <strong>sol do litoral catarinense</strong> é intenso, especialmente durante os meses de janeiro, fevereiro e março. A <strong>radiação ultravioleta (UV)</strong> atinge níveis elevados, podendo causar <strong>queimaduras solares</strong>, <strong>envelhecimento precoce</strong> e, em casos mais graves, problemas de saúde sérios. Por isso, a proteção adequada não é apenas uma questão estética, mas de <strong>saúde e bem-estar</strong>.</p>

        <p>Quando você está curtindo as belas praias de <strong>Penha</strong>, como a <strong>Praia da Armação</strong> (que fica a poucos metros da <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a>), a <strong>Praia Grande</strong> ou explorando as praias de <strong>Balneário Camboriú</strong>, a exposição solar é intensa. Por isso, preparamos este guia completo para você!</p>

        <h2>Protetor Solar: Seu Melhor Amigo no Verão</h2>

        <h3>Escolhendo o Protetor Ideal</h3>
        <p>O <strong>protetor solar</strong> é o item mais importante da sua mala de férias. Veja como escolher:</p>
        <ul>
          <li><strong>FPS mínimo 30</strong>: Para o dia a dia com exposição moderada</li>
          <li><strong>FPS 50 ou mais</strong>: Para exposição prolongada nas praias</li>
          <li><strong>Amplo espectro</strong>: Protege contra raios UVA e UVB</li>
          <li><strong>Resistente à água</strong>: Essencial para banhos de mar e piscina</li>
        </ul>

        <h3>Como Aplicar Corretamente</h3>
        <p>A <strong>aplicação correta</strong> faz toda diferença na proteção:</p>
        <ul>
          <li><strong>Quantidade adequada</strong>: Use cerca de 2mg por cm² de pele (uma colher de sopa para o corpo todo)</li>
          <li><strong>30 minutos antes</strong>: Aplique antes da exposição solar para melhor absorção</li>
          <li><strong>Reaplicação</strong>: A cada 2 horas ou após banhos e sudorese</li>
          <li><strong>Áreas esquecidas</strong>: Não esqueça orelhas, nuca, pés, mãos e lábios (use protetor labial com FPS)</li>
        </ul>

        <h3>Protetor Solar Para Crianças</h3>
        <p>Os <strong>pequenos veranistas</strong> precisam de atenção especial:</p>
        <ul>
          <li><strong>FPS 50 ou superior</strong>: A pele infantil é mais sensível</li>
          <li><strong>Fórmulas específicas</strong>: Use produtos desenvolvidos para crianças</li>
          <li><strong>Proteção física</strong>: Combine com chapéus, roupas UV e guarda-sol</li>
          <li><strong>Evite horários críticos</strong>: Entre 10h e 16h o sol é mais intenso</li>
        </ul>

        <h2>Hidratação: Por Dentro e Por Fora</h2>

        <h3>Hidratação Interna</h3>
        <p>A <strong>hidratação adequada</strong> começa de dentro para fora:</p>
        <ul>
          <li><strong>Água</strong>: Beba pelo menos 2 a 3 litros por dia (mais se estiver na praia)</li>
          <li><strong>Água de coco</strong>: Rica em eletrólitos, perfeita para repor minerais</li>
          <li><strong>Frutas da estação</strong>: Melancia, melão, abacaxi são ótimas opções</li>
          <li><strong>Sucos naturais</strong>: Evite bebidas muito açucaradas</li>
          <li><strong>Evite álcool em excesso</strong>: Desidrata o corpo</li>
        </ul>

        <h3>Hidratação Externa</h3>
        <p>A pele precisa de <strong>hidratação tópica</strong> diária:</p>
        <ul>
          <li><strong>Após o banho</strong>: Use hidratante corporal com a pele ainda úmida</li>
          <li><strong>Produtos com aloe vera</strong>: Excelentes para peles expostas ao sol</li>
          <li><strong>Máscaras faciais</strong>: Uma ou duas vezes por semana para hidratação profunda</li>
          <li><strong>Produtos com ácido hialurônico</strong>: Ótimos para retenção de água na pele</li>
        </ul>

        <p>Dica especial: Na <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a>, você pode relaxar na <strong>piscina coberta com hidromassagem</strong> após um dia de praia – perfeito para descansar a pele!</p>

        <h2>Alimentação Para Uma Pele Saudável</h2>

        <p>O que você come influencia diretamente a <strong>saúde da sua pele</strong>. Durante suas férias em Penha, aproveite para consumir:</p>

        <h3>Alimentos Ricos em Antioxidantes</h3>
        <ul>
          <li><strong>Frutas vermelhas</strong>: Morango, framboesa, amora</li>
          <li><strong>Tomate</strong>: Rico em licopeno, protetor natural</li>
          <li><strong>Cenoura</strong>: Betacaroteno que protege a pele</li>
          <li><strong>Uva</strong>: Resveratrol com ação antioxidante</li>
        </ul>

        <h3>Alimentos Ricos em Ômega-3</h3>
        <p>Perfeitos para a saúde da pele e fáceis de encontrar na região:</p>
        <ul>
          <li><strong>Peixes frescos</strong>: Salmão, atum, sardinha (muito frescos em Penha!)</li>
          <li><strong>Castanhas</strong>: Do Pará, nozes, amêndoas</li>
          <li><strong>Abacate</strong>: Gorduras saudáveis para a pele</li>
        </ul>

        <p>Visite nosso <a href="/#restaurant" class="text-primary hover:text-primary/80 underline font-medium">Quiosque do Kaká</a> para provar petiscos deliciosos e saudáveis!</p>

        <h2>Cuidados Especiais Após a Exposição Solar</h2>

        <h3>Banho Pós-Praia</h3>
        <ul>
          <li><strong>Água morna ou fria</strong>: Evite água muito quente que resseca a pele</li>
          <li><strong>Sabonetes suaves</strong>: Prefira produtos sem perfumes fortes</li>
          <li><strong>Esfoliação gentil</strong>: Apenas 1-2 vezes por semana para remover pele morta</li>
          <li><strong>Lave bem os cabelos</strong>: Remova sal e areia completamente</li>
        </ul>

        <h3>Se Você Pegou Muito Sol</h3>
        <p>Caso tenha exagerado na exposição:</p>
        <ul>
          <li><strong>Compressas frias</strong>: Aliviam a sensação de queimação</li>
          <li><strong>Aloe vera puro</strong>: Cicatrizante e calmante natural</li>
          <li><strong>Hidratantes intensivos</strong>: Produtos com pantenol e vitamina E</li>
          <li><strong>Beba muita água</strong>: Hidratação interna é fundamental</li>
          <li><strong>Evite mais sol</strong>: Deixe a pele recuperar antes de nova exposição</li>
        </ul>

        <h2>Proteção Além do Protetor Solar</h2>

        <h3>Acessórios Indispensáveis</h3>
        <ul>
          <li><strong>Chapéu ou boné</strong>: Protege rosto, orelhas e nuca</li>
          <li><strong>Óculos de sol</strong>: Com proteção UV certificada</li>
          <li><strong>Roupas com proteção UV</strong>: Camisetas, saídas de praia</li>
          <li><strong>Guarda-sol</strong>: Sombra é fundamental nas horas mais quentes</li>
        </ul>

        <h3>Horários Estratégicos</h3>
        <p>Planeje suas atividades de praia considerando o <strong>índice UV</strong>:</p>
        <ul>
          <li><strong>Manhã (até 10h)</strong>: Sol mais ameno, ideal para caminhadas na praia</li>
          <li><strong>Meio-dia (10h às 16h)</strong>: Evite exposição direta, hora de almoçar e descansar</li>
          <li><strong>Fim de tarde (após 16h)</strong>: Sol mais suave, perfeito para banho de mar</li>
        </ul>

        <p>Durante o horário de pico solar, aproveite para conhecer o <strong>Beto Carrero World</strong> (muitas atrações são cobertas) ou relaxar na <strong>piscina da pousada</strong>!</p>

        <h2>Cuidados Especiais Para Diferentes Tipos de Pele</h2>

        <h3>Pele Oleosa</h3>
        <ul>
          <li><strong>Protetor oil-free</strong>: Em gel ou toque seco</li>
          <li><strong>Limpeza frequente</strong>: Lave o rosto de manhã e à noite</li>
          <li><strong>Hidratantes leves</strong>: Em sérum ou loção fluida</li>
        </ul>

        <h3>Pele Seca</h3>
        <ul>
          <li><strong>Protetor em creme</strong>: Mais hidratante</li>
          <li><strong>Hidratação reforçada</strong>: Cremes mais densos</li>
          <li><strong>Evite produtos com álcool</strong>: Ressecam ainda mais</li>
        </ul>

        <h3>Pele Sensível</h3>
        <ul>
          <li><strong>Protetores físicos/minerais</strong>: Óxido de zinco, dióxido de titânio</li>
          <li><strong>Produtos hipoalergênicos</strong>: Sem fragrâncias e parabenos</li>
          <li><strong>Teste antes</strong>: Faça teste de sensibilidade antes de usar produtos novos</li>
        </ul>

        <h2>O Bronzeado Saudável Existe?</h2>

        <p>Todos queremos voltar das férias com aquele <strong>bronze dourado</strong>, mas é importante entender:</p>
        <ul>
          <li><strong>O bronzeado é uma defesa</strong>: A pele escurece para se proteger da radiação</li>
          <li><strong>Bronze gradual é mais seguro</strong>: Exposições curtas e progressivas</li>
          <li><strong>Use protetor sempre</strong>: Mesmo buscando bronzear, a proteção é essencial</li>
          <li><strong>Autobronzeadores</strong>: Alternativa segura para quem quer cor sem exposição</li>
        </ul>

        <h2>Praias de Penha: Dicas Específicas</h2>

        <p>Cada praia da região tem suas características. Veja dicas específicas:</p>

        <h3>Praia da Armação</h3>
        <p><strong>Águas calmas</strong>, ideal para crianças. Há boa sombra nos quiosques. Fica a poucos metros da <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a> – você pode voltar facilmente para reaplicar protetor e se hidratar!</p>

        <h3>Praia Grande</h3>
        <p><strong>Mais extensa</strong>, com menos sombra natural. Leve guarda-sol e reaplique protetor com frequência. As ondas são mais fortes – atenção redobrada com crianças.</p>

        <h3>Balneário Camboriú</h3>
        <p>Os <strong>prédios fazem sombra</strong> à tarde, mas a praia lota no verão. Chegue cedo e escolha um local com guarda-sol. O calçadão tem várias opções para se hidratar.</p>

        <p>Conheça mais sobre as praias em nossa página de <a href="/bairros-penha" class="text-primary hover:text-primary/80 underline font-medium">bairros e praias de Penha</a>.</p>

        <h2>Kit de Cuidados Para Suas Férias</h2>

        <p>Monte seu <strong>kit de cuidados com a pele</strong> para trazer nas férias:</p>
        <ul>
          <li><strong>Protetor solar facial</strong> FPS 50+</li>
          <li><strong>Protetor solar corporal</strong> resistente à água</li>
          <li><strong>Protetor labial</strong> com FPS</li>
          <li><strong>Hidratante pós-sol</strong> com aloe vera</li>
          <li><strong>Água termal</strong> para refrescar durante o dia</li>
          <li><strong>Sérum vitamina C</strong> para usar à noite</li>
          <li><strong>Gel de aloe vera puro</strong> para emergências</li>
        </ul>

        <h2>Reserve Suas Férias na Pousada Vila D'Itália</h2>

        <p>Para aproveitar todas essas dicas e viver <strong>férias inesquecíveis</strong> com a pele saudável, hospede-se na <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a>:</p>
        <ul>
          <li><strong>Localização privilegiada</strong>: A poucos metros da praia</li>
          <li><strong>Piscina coberta com hidromassagem</strong>: Perfeita para relaxar a pele após o sol</li>
          <li><strong>Café da manhã completo</strong>: Com frutas frescas para nutrir a pele de dentro para fora</li>
          <li><strong>Próximo ao Beto Carrero</strong>: Opção de lazer para os horários de sol intenso</li>
        </ul>

        <p>Entre em <a href="/#contact" class="text-primary hover:text-primary/80 underline font-medium">contato conosco</a> para fazer sua reserva!</p>

        <p class="highlight"><strong>Suas férias de verão 2026 em Penha podem ser inesquecíveis E saudáveis! Com os cuidados certos, você aproveita as praias paradisíacas, volta com um bronze bonito e mantém a pele protegida e hidratada. Reserve sua estadia na Pousada Vila D'Itália e venha viver o melhor do litoral catarinense!</strong></p>
      </div>
    `,
    image: blogCuidadosPele
  },
  "temporada-verao-2025-2026-penha-sc": {
    id: "temporada-verao-2025-2026-penha-sc",
    title: "Temporada de Verão 2025/2026 em Penha-SC: O Guia Completo para Suas Férias Perfeitas no Litoral Catarinense",
    date: "22 de Dezembro, 2025",
    content: `
      <div class="blog-content">
        <p class="lead"><strong>A temporada de verão 2025/2026</strong> chegou em <strong>Penha, Santa Catarina</strong>, e a cidade está pronta para receber milhares de turistas que buscam <strong>praias paradisíacas</strong>, <strong>diversão garantida</strong> e uma <strong>infraestrutura turística de primeira qualidade</strong>. Se você está planejando suas férias de final de ano, este é o momento ideal para descobrir tudo o que essa joia do litoral catarinense tem a oferecer.</p>

        <h2>Por Que Escolher Penha Para Suas Férias de Verão?</h2>
        
        <p>Localizada no litoral norte de Santa Catarina, <strong>Penha</strong> se destaca como um dos destinos turísticos mais procurados do sul do Brasil. A cidade oferece uma <strong>combinação única</strong> de belezas naturais, entretenimento de classe mundial e uma atmosfera acolhedora que encanta visitantes de todas as idades. Com mais de <strong>25 praias diferentes</strong>, desde pequenas enseadas tranquilas até extensas faixas de areia com ondas perfeitas para surf, há opções para todos os gostos e estilos de viagem.</p>

        <p>A <strong>temperatura média</strong> durante a temporada de verão varia entre 25°C e 32°C, com águas que podem chegar a agradáveis 24°C, proporcionando o cenário perfeito para banhos de mar prolongados e atividades aquáticas diversas. A <strong>infraestrutura turística</strong> da cidade evoluiu significativamente nos últimos anos, oferecendo desde restaurantes sofisticados até quiosques pé na areia que servem os melhores <strong>frutos do mar frescos</strong> da região.</p>

        <h2>As Praias Mais Procuradas Nesta Temporada</h2>

        <h3>Praia da Armação</h3>
        <p>Considerada a <strong>principal praia de Penha</strong>, a Praia da Armação oferece cerca de 3 quilômetros de areia clara e águas calmas, ideais para famílias com crianças. A orla conta com diversos restaurantes, sorveterias e lojas de artesanato local. Durante a temporada, a praia recebe estrutura especial com <strong>guarda-vidas</strong>, banheiros públicos e área de estacionamento organizada. Para quem busca <a href="/" class="text-primary hover:text-primary/80 underline font-medium">hospedagem de qualidade</a> próxima à praia, a região oferece excelentes opções.</p>

        <h3>Praia Grande</h3>
        <p>Para os amantes de <strong>esportes aquáticos</strong>, a Praia Grande é o destino certo. Com ondas consistentes durante todo o verão, a praia atrai surfistas de todo o Brasil. À noite, os bares e restaurantes da orla ganham vida com música ao vivo e uma <strong>vida noturna animada</strong>. A praia também é palco de diversos eventos esportivos e culturais durante a temporada.</p>

        <h3>Praia do Quilombo</h3>
        <p>Para quem busca <strong>tranquilidade</strong> e contato mais íntimo com a natureza, a Praia do Quilombo oferece um ambiente mais reservado e águas cristalinas. É o local perfeito para snorkeling e observação da vida marinha local.</p>

        <h2>O Beto Carrero World: O Grande Diferencial de Penha</h2>

        <p>Não há como falar de <strong>Penha</strong> sem mencionar o <strong>Beto Carrero World</strong>, o maior parque temático da América Latina. Durante a temporada de verão, o parque opera em horário estendido e apresenta <strong>programação especial de fim de ano</strong>, incluindo shows exclusivos, decoração temática e atrações sazonais que encantam visitantes de todas as idades.</p>

        <p>O parque oferece mais de <strong>100 atrações</strong>, divididas em áreas temáticas que vão desde a Vila Germânica até a Área Radical, passando pelo mundo encantado da DreamWorks e suas atrações do Madagascar, Shrek e Kung Fu Panda. Para <strong>2025/2026</strong>, o parque promete novidades exclusivas e experiências ainda mais imersivas.</p>

        <p>Uma dica valiosa para os visitantes: <strong>hospede-se próximo ao parque</strong> para otimizar seu tempo e energia. A <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a> está localizada a apenas <strong>5 minutos do Beto Carrero World</strong>, permitindo que você aproveite ao máximo seu dia no parque e ainda tenha tempo para relaxar na piscina ou aproveitar a praia.</p>

        <h2>Gastronomia de Primeira: Sabores do Mar</h2>

        <p>A <strong>culinária de Penha</strong> é um capítulo à parte. A cidade é famosa por seus <strong>frutos do mar fresquíssimos</strong>, pescados diariamente por pescadores locais que mantêm viva uma tradição centenária. Os restaurantes da região oferecem desde pratos simples e saborosos até experiências gastronômicas sofisticadas.</p>

        <p>Entre os <strong>pratos imperdíveis</strong>, destacam-se:</p>
        <ul>
          <li><strong>Sequência de camarão</strong> com variações que incluem camarão na moranga, empanado, ao alho e óleo</li>
          <li><strong>Peixe na telha</strong>, uma especialidade regional servida com pirão e arroz</li>
          <li><strong>Caldeirada de frutos do mar</strong>, perfeita para os dias mais frescos</li>
          <li><strong>Ostras frescas</strong> cultivadas na região, servidas ao natural ou gratinadas</li>
        </ul>

        <p>Para conhecer mais sobre a gastronomia local, visite nossa seção de <a href="/#restaurant" class="text-primary hover:text-primary/80 underline font-medium">Quiosque do Kaká</a>, onde servimos petiscos deliciosos em ambiente aconchegante.</p>

        <h2>Eventos e Festividades da Temporada</h2>

        <p>A <strong>programação cultural</strong> de Penha durante a temporada de verão é rica e diversificada. Entre os principais eventos, destacam-se:</p>

        <ul>
          <li><strong>Réveillon nas Praias</strong>: Queima de fogos e festas em diversos pontos da cidade</li>
          <li><strong>Festival de Verão</strong>: Shows musicais e apresentações artísticas ao longo de janeiro</li>
          <li><strong>Feira de Artesanato</strong>: Produtos locais e souvenirs autênticos</li>
          <li><strong>Campeonatos de Surf</strong>: Competições que atraem atletas de todo o Brasil</li>
        </ul>

        <h2>Dicas Essenciais Para Aproveitar a Temporada</h2>

        <h3>Planejamento Antecipado</h3>
        <p>A <strong>alta temporada</strong> significa maior demanda por hospedagem, restaurantes e atrações. Recomendamos <strong>reservar sua acomodação com antecedência</strong> para garantir as melhores opções e preços. A <a href="/#contact" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a> oferece condições especiais para reservas antecipadas e pacotes especiais para famílias.</p>

        <h3>O Que Trazer na Mala</h3>
        <ul>
          <li><strong>Protetor solar</strong> de alto fator (mínimo FPS 30)</li>
          <li><strong>Roupas leves</strong> e confortáveis</li>
          <li><strong>Calçados para caminhada</strong> e chinelos de praia</li>
          <li><strong>Repelente</strong> para os passeios ao entardecer</li>
          <li><strong>Capa de chuva ou guarda-chuva</strong> (chuvas de verão são comuns)</li>
        </ul>

        <h3>Horários Estratégicos</h3>
        <p>Para evitar o sol mais forte, planeje suas atividades de praia para o <strong>período da manhã (até 10h)</strong> e <strong>final da tarde (após 16h)</strong>. O meio do dia é perfeito para almoçar com calma, descansar na pousada ou visitar atrações cobertas como o Beto Carrero World.</p>

        <h2>Hospedagem: O Diferencial da Sua Viagem</h2>

        <p>A escolha da <strong>hospedagem certa</strong> pode transformar completamente sua experiência de férias. Em Penha, você encontra opções que vão desde campings e hostels até pousadas charmosas e hotéis de luxo.</p>

        <p>A <strong>Pousada Vila D'Itália</strong> se destaca como uma das melhores opções da região, oferecendo:</p>
        <ul>
          <li><strong>Localização privilegiada</strong>: A poucos metros da Praia da Armação e 5 minutos do Beto Carrero</li>
          <li><strong>Piscina ao ar livre</strong> para relaxar após um dia de passeios</li>
          <li><strong>Café da manhã incluso</strong> com produtos frescos e regionais</li>
          <li><strong>Estacionamento gratuito</strong> para hóspedes</li>
          <li><strong>Wi-Fi</strong> em todas as áreas</li>
          <li><strong>Atendimento personalizado</strong> e dicas locais exclusivas</li>
        </ul>

        <h2>Explorando os Arredores</h2>

        <p>Penha está estrategicamente localizada, permitindo passeios bate-volta para diversas atrações regionais:</p>

        <ul>
          <li><strong>Balneário Camboriú</strong> (24 km): A "Dubai brasileira" com praias urbanas, teleférico e vida noturna agitada</li>
          <li><strong>Bombinhas</strong> (45 km): Praias paradisíacas e mergulho</li>
          <li><strong>Blumenau</strong> (70 km): Arquitetura germânica e cervejarias artesanais</li>
          <li><strong>Florianópolis</strong> (120 km): A Ilha da Magia com suas 42 praias</li>
        </ul>

        <p>Para mais informações sobre a região de Penha e seus bairros, confira nossa página sobre os <a href="/bairros-penha" class="text-primary hover:text-primary/80 underline font-medium">Bairros de Penha</a>.</p>

        <h2>Reserve Sua Estadia Agora</h2>

        <p>Não deixe para última hora! A <strong>temporada de verão 2025/2026</strong> promete ser uma das mais movimentadas dos últimos anos. A demanda por hospedagem de qualidade cresce a cada dia, e as melhores opções são reservadas rapidamente.</p>

        <p>Entre em <a href="/#contact" class="text-primary hover:text-primary/80 underline font-medium">contato conosco</a> para verificar disponibilidade e fazer sua reserva. Nossa equipe está pronta para ajudá-lo a planejar as <strong>férias perfeitas em Penha</strong>!</p>

        <p class="highlight"><strong>Venha descobrir por que milhares de turistas escolhem Penha como seu destino de férias preferido. Praias incríveis, o melhor parque temático da América Latina e uma hospitalidade calorosa esperam por você!</strong></p>
      </div>
    `,
    image: blogTemporadaVerao
  },
  "reveillon-2026-penha-santa-catarina": {
    id: "reveillon-2026-penha-santa-catarina",
    title: "Réveillon 2026 em Penha-SC: Celebre a Virada do Ano no Paraíso do Litoral Catarinense",
    date: "22 de Dezembro, 2025",
    content: `
      <div class="blog-content">
        <p class="lead">O <strong>Réveillon 2026 em Penha, Santa Catarina</strong>, promete ser uma das celebrações mais <strong>memoráveis</strong> do litoral brasileiro. Com praias deslumbrantes como cenário, <strong>queima de fogos espetacular</strong> e uma atmosfera festiva única, a cidade se prepara para receber visitantes de todo o Brasil e do mundo para celebrar a chegada do novo ano de forma inesquecível.</p>

        <h2>Por Que Celebrar o Réveillon em Penha?</h2>

        <p><strong>Penha</strong> oferece uma combinação perfeita para quem deseja passar a virada do ano em grande estilo: <strong>belezas naturais incomparáveis</strong>, infraestrutura turística de qualidade e uma programação especial que transforma a noite de 31 de dezembro em um verdadeiro espetáculo. Diferente de grandes capitais, Penha proporciona uma experiência mais <strong>intimista e acolhedora</strong>, sem abrir mão da animação e da magia que a data merece.</p>

        <p>A cidade, conhecida mundialmente por abrigar o <strong>Beto Carrero World</strong> – o maior parque temático da América Latina – se transforma durante o período de festas, oferecendo <strong>programação especial</strong> em diversos pontos turísticos. As praias ganham decoração festiva, os restaurantes preparam menus especiais e toda a comunidade se une para receber os turistas com o tradicional <strong>calor da hospitalidade catarinense</strong>.</p>

        <h2>Programação do Réveillon 2025</h2>

        <h3>Festa na Praia da Armação</h3>
        <p>A <strong>Praia da Armação</strong>, considerada a principal praia de Penha, será o palco central das celebrações. A festa começa no final da tarde do dia 31, com música ao vivo em diversos pontos da orla. À meia-noite, uma <strong>queima de fogos de artifício</strong> de aproximadamente 15 minutos ilumina o céu, criando um cenário mágico refletido nas águas calmas do mar.</p>

        <p>A programação inclui:</p>
        <ul>
          <li><strong>Shows musicais</strong> a partir das 21h com bandas locais e DJs</li>
          <li><strong>Queima de fogos</strong> sincronizada à meia-noite</li>
          <li>Barracas com <strong>comidas e bebidas típicas</strong></li>
          <li><strong>Área kids</strong> com atividades para crianças</li>
          <li>Apresentações de <strong>grupos folclóricos</strong> regionais</li>
        </ul>

        <h3>Festas Privadas e Restaurantes</h3>
        <p>Diversos estabelecimentos da cidade organizam <strong>festas de réveillon</strong> com pacotes que incluem jantar especial, open bar, música ao vivo e vista privilegiada para os fogos. Para quem busca <a href="/" class="text-primary hover:text-primary/80 underline font-medium">hospedagem com excelente localização</a>, é importante reservar com antecedência para garantir acesso aos melhores eventos.</p>

        <h3>Beto Carrero World Especial de Ano Novo</h3>
        <p>O <strong>Beto Carrero World</strong> oferece programação especial durante todo o período de festas, incluindo shows temáticos, decoração natalina até o início de janeiro e horários estendidos. É uma <strong>opção perfeita</strong> para famílias que desejam combinar a magia do parque com as festividades de fim de ano.</p>

        <h2>Tradições e Rituais de Ano Novo na Praia</h2>

        <p>O <strong>réveillon brasileiro</strong>, especialmente no litoral, é rico em tradições e superstições. Em Penha, você poderá participar de diversos rituais que prometem trazer sorte e boas energias para o novo ano:</p>

        <h3>A Cor da Roupa</h3>
        <p>A tradição mais conhecida é usar <strong>branco</strong> para atrair paz, mas muitos também escolhem cores específicas conforme seus desejos:</p>
        <ul>
          <li><strong>Branco</strong>: Paz e purificação</li>
          <li><strong>Amarelo</strong>: Prosperidade e dinheiro</li>
          <li><strong>Vermelho</strong>: Amor e paixão</li>
          <li><strong>Verde</strong>: Saúde e esperança</li>
          <li><strong>Azul</strong>: Tranquilidade e harmonia</li>
        </ul>

        <h3>Pular as Sete Ondas</h3>
        <p>Uma das tradições mais populares do <strong>réveillon na praia</strong>. À meia-noite, os banhistas entram no mar e pulam sete ondas, fazendo um pedido a cada salto. A lenda diz que Iemanjá, a rainha do mar, atenderá aos desejos de quem completar o ritual com fé.</p>

        <h3>Oferendas a Iemanjá</h3>
        <p>Flores brancas, especialmente rosas e palmas, são lançadas ao mar como <strong>oferenda a Iemanjá</strong>. É uma tradição respeitada e que faz parte da cultura litorânea brasileira. Muitos também deixam espelhos, perfumes e bijuterias em pequenas embarcações improvisadas.</p>

        <h2>Onde Se Hospedar Para o Réveillon</h2>

        <p>A escolha da <strong>hospedagem</strong> é fundamental para aproveitar ao máximo as festividades. A demanda durante o réveillon é altíssima, e as melhores opções são reservadas com meses de antecedência.</p>

        <p>A <strong>Pousada Vila D'Itália</strong> é a escolha ideal para quem busca:</p>
        <ul>
          <li><strong>Proximidade das praias</strong>: A poucos metros da Praia da Armação, onde acontecem as principais festividades</li>
          <li><strong>Conforto e tranquilidade</strong>: Ambiente familiar e acolhedor para descansar entre as celebrações</li>
          <li><strong>Café da manhã especial</strong>: Incluso na diária, perfeito para recuperar as energias após a festa</li>
          <li><strong>Piscina</strong>: Ideal para relaxar durante o dia</li>
          <li><strong>Localização estratégica</strong>: A 5 minutos do Beto Carrero World para passeios durante a estadia</li>
        </ul>

        <p>Entre em <a href="/#contact" class="text-primary hover:text-primary/80 underline font-medium">contato com nossa equipe</a> para verificar disponibilidade e fazer sua reserva para o réveillon.</p>

        <h2>Gastronomia Especial de Fim de Ano</h2>

        <p>A <strong>ceia de réveillon</strong> em Penha pode ser uma experiência gastronômica memorável. Os restaurantes locais preparam menus especiais que combinam a tradicional ceia brasileira com os frescos <strong>frutos do mar da região</strong>.</p>

        <h3>Pratos Típicos da Ceia Catarinense</h3>
        <ul>
          <li><strong>Peru recheado</strong> com farofa de frutas secas</li>
          <li><strong>Chester ao molho de maracujá</strong></li>
          <li><strong>Lagosta grelhada</strong> com manteiga de ervas</li>
          <li><strong>Camarões flambados</strong> ao champagne</li>
          <li><strong>Saladas tropicais</strong> com frutas da estação</li>
          <li><strong>Rabanada</strong> e <strong>pavê</strong> como sobremesa</li>
        </ul>

        <p>Visite também nosso <a href="/#restaurant" class="text-primary hover:text-primary/80 underline font-medium">Quiosque do Kaká</a>, que preparará petiscos especiais durante o período festivo.</p>

        <h2>Dicas Para Aproveitar ao Máximo</h2>

        <h3>Chegue Com Antecedência</h3>
        <p>Recomendamos chegar a Penha pelo menos <strong>2 ou 3 dias antes do réveillon</strong>. Isso permite que você conheça as praias, explore a região, visite o Beto Carrero World e chegue relaxado para as festividades. Além disso, as estradas ficam mais movimentadas nos dias 30 e 31.</p>

        <h3>Reserve Restaurantes</h3>
        <p>Os melhores restaurantes para a <strong>ceia de réveillon</strong> esgotam rapidamente. Se você deseja jantar em um local especial antes da festa na praia, faça sua reserva com antecedência.</p>

        <h3>Transporte e Estacionamento</h3>
        <p>Durante a noite de réveillon, as vias próximas às praias ficam fechadas para o trânsito de veículos. Planeje-se para ir <strong>a pé ou de transporte alternativo</strong>. Hospedando-se na <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a>, você estará a uma curta caminhada do local das festividades.</p>

        <h3>O Que Levar Para a Festa</h3>
        <ul>
          <li><strong>Roupa branca</strong> ou da cor do seu desejo para o novo ano</li>
          <li><strong>Chinelos confortáveis</strong> para caminhar na areia</li>
          <li><strong>Bolsa pequena</strong> para carregar documentos e dinheiro</li>
          <li><strong>Casaco leve</strong> (a brisa noturna pode refrescar)</li>
          <li><strong>Câmera ou celular</strong> carregado para registrar o momento</li>
          <li><strong>Flores brancas</strong> para as oferendas a Iemanjá</li>
        </ul>

        <h2>Programação Para os Dias Seguintes</h2>

        <p>Após as festividades do réveillon, Penha continua oferecendo <strong>ótimas opções de lazer</strong> para os primeiros dias de 2025:</p>

        <ul>
          <li><strong>1º de Janeiro</strong>: Dia de descanso e recuperação – aproveite a piscina da pousada e as praias mais tranquilas</li>
          <li><strong>2 de Janeiro em diante</strong>: Visite o Beto Carrero World, explore as trilhas ecológicas ou faça um bate-volta para Balneário Camboriú</li>
        </ul>

        <p>Para conhecer mais sobre as opções de lazer na região, visite nossa página sobre os <a href="/bairros-penha" class="text-primary hover:text-primary/80 underline font-medium">bairros de Penha</a> e descubra lugares incríveis para explorar.</p>

        <h2>Segurança Durante as Festividades</h2>

        <p>A segurança é sempre uma prioridade durante grandes eventos. A prefeitura de Penha reforça o policiamento e disponibiliza <strong>postos de saúde</strong> com atendimento 24 horas durante o período de festas. Algumas dicas importantes:</p>

        <ul>
          <li><strong>Não deixe pertences sem vigilância</strong> na areia</li>
          <li><strong>Evite entrar no mar</strong> se tiver consumido bebidas alcoólicas</li>
          <li><strong>Mantenha crianças sempre por perto</strong> e combine um ponto de encontro em caso de separação</li>
          <li><strong>Hidrate-se</strong> ao longo da noite</li>
          <li><strong>Respeite a natureza</strong>: não solte balões e recolha seu lixo</li>
        </ul>

        <h2>Reserve Agora Suas Férias de Réveillon</h2>

        <p>O <strong>Réveillon 2025 em Penha</strong> está se aproximando, e as melhores hospedagens estão sendo reservadas rapidamente. Não deixe para última hora!</p>

        <p>A <strong>Pousada Vila D'Itália</strong> oferece:</p>
        <ul>
          <li>Pacotes especiais para o período de festas</li>
          <li>Localização privilegiada a passos da praia</li>
          <li>Ambiente familiar e seguro</li>
          <li>Café da manhã incluso</li>
          <li>Equipe pronta para tornar sua estadia inesquecível</li>
        </ul>

        <p>Entre em <a href="/#contact" class="text-primary hover:text-primary/80 underline font-medium">contato agora mesmo</a> e garanta seu lugar no paraíso para celebrar a chegada de 2026!</p>

        <p class="highlight"><strong>Venha viver a magia do réveillon à beira-mar em Penha! Praias paradisíacas, fogos de artifício espetaculares e a tradicional hospitalidade catarinense esperam por você. Faça de 2026 um ano inesquecível desde o primeiro segundo!</strong></p>
      </div>
    `,
    image: blogReveillon
  },
  "melhores-praias-penha": {
    id: "melhores-praias-penha",
    title: "As Melhores Praias de Penha para Visitar",
    date: "15 de Outubro, 2025",
    content: `
      <div class="blog-content">
        <p class="lead"><strong>Penha</strong> é um verdadeiro paraíso para os amantes de praia! Com suas <strong>25 praias</strong>, a cidade oferece opções para todos os gostos.</p>
        
        <h2>Praia da Armação</h2>
        <p>A <strong>Praia da Armação</strong> é uma das mais procuradas, oferecendo <strong>águas calmas e cristalinas</strong>, perfeitas para famílias com crianças. Com sua areia branquinha e infraestrutura completa, é o local ideal para passar o dia inteiro. Confira nossa <a href="/" class="text-primary hover:text-primary/80 underline font-medium">página inicial</a> para conhecer mais sobre a região.</p>
        
        <h2>Praia Grande</h2>
        <p>Para quem busca <strong>mais agitação</strong>, a Praia Grande oferece ondas perfeitas para surf e uma vida noturna vibrante com diversos bares e restaurantes.</p>
        
        <h2>Praia Alegre</h2>
        <p>Com um nome que traduz bem sua essência, a <strong>Praia Alegre</strong> é conhecida por sua beleza natural e <strong>águas mornas</strong>. É uma ótima opção para quem quer fugir das praias mais movimentadas.</p>
        
        <h2>Dicas Importantes</h2>
        <ul>
          <li><strong>Use sempre protetor solar</strong></li>
          <li><strong>Chegue cedo</strong> para garantir um bom lugar</li>
          <li><strong>Traga água e lanches</strong></li>
          <li><strong>Respeite a natureza</strong> e não deixe lixo na praia</li>
        </ul>
        
        <p>Para mais informações sobre hospedagem, entre em <a href="/#contact" class="text-primary hover:text-primary/80 underline font-medium">contato conosco</a>.</p>
      </div>
    `,
    image: penhaBeach1
  },
  "roteiro-3-dias-penha": {
    id: "roteiro-3-dias-penha",
    title: "Roteiro de 3 Dias em Penha e Região",
    date: "10 de Setembro, 2025",
    content: `
      <div class="blog-content">
        <h2>Dia 1: Beto Carrero World</h2>
        <p>Comece sua viagem com um dia inteiro no <strong>maior parque temático da América Latina</strong>. O Beto Carrero World oferece atrações para todas as idades, desde <strong>montanhas-russas radicais</strong> até shows incríveis.</p>
        
        <h2>Dia 2: Praias de Penha</h2>
        <p>Dedique o segundo dia para conhecer as belas <strong>praias de Penha</strong>. Comece pela <strong>Praia da Armação</strong> de manhã, almoce em um restaurante de frutos do mar na orla e à tarde visite a <strong>Praia Grande</strong>.</p>
        
        <h2>Dia 3: Balneário Camboriú</h2>
        <p>No terceiro dia, faça um bate-volta para <strong>Balneário Camboriú</strong> (24km). Visite o Cristo Luz, passeie pelo Unipraias e aproveite a praia central da cidade.</p>
        
        <h2>Onde Ficar</h2>
        <p>A <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a> é a escolha perfeita! Localizada <strong>estrategicamente a 5 minutos do Beto Carrero</strong> e a poucos metros da Praia de Armação, você economiza tempo e aproveita mais seus dias de férias.</p>
        
        <p>Entre em <a href="/#contact" class="text-primary hover:text-primary/80 underline font-medium">contato</a> para fazer sua reserva.</p>
      </div>
    `,
    image: penhaBeach2
  },
  "gastronomia-penha": {
    id: "gastronomia-penha",
    title: "Gastronomia em Penha: Sabores do Litoral",
    date: "5 de Agosto, 2025",
    content: `
      <div class="blog-content">
        <h2>Frutos do Mar Fresquinhos</h2>
        <p><strong>Penha</strong> é famosa por seus restaurantes especializados em <strong>frutos do mar</strong>. O pescado fresco chega diariamente dos barcos de pesca locais, garantindo <strong>qualidade e sabor incomparáveis</strong>.</p>
        
        <h2>Pratos Típicos</h2>
        <p><strong>Não deixe de experimentar:</strong></p>
        <ul>
          <li><strong>Sequência de camarão</strong></li>
          <li><strong>Moqueca capixaba</strong></li>
          <li><strong>Peixe na telha</strong></li>
          <li><strong>Caldeirada de frutos do mar</strong></li>
          <li><strong>Ostras gratinadas</strong></li>
        </ul>
        
        <h2>Restaurantes Recomendados</h2>
        <p>A região da <strong>Praia da Armação</strong> concentra excelentes restaurantes com vista para o mar. Muitos oferecem <strong>música ao vivo</strong> nos finais de semana. Conheça também nosso <a href="/#restaurant" class="text-primary hover:text-primary/80 underline font-medium">Quiosque do Kaká</a>.</p>
        
        <h2>Café da Manhã na Pousada</h2>
        <p>Na <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a>, servimos um delicioso <strong>café da manhã</strong> com produtos frescos e regionais, incluindo frutas da estação, pães artesanais e queijos locais.</p>
      </div>
    `,
    image: breakfastImg
  },
  "dicas-beto-carrero": {
    id: "dicas-beto-carrero",
    title: "Dicas Essenciais para Aproveitar o Beto Carrero World",
    date: "20 de Abril, 2025",
    content: `
      <div class="blog-content">
        <h2>Planeje com Antecedência</h2>
        <p>O <strong>Beto Carrero World</strong> é enorme! Para aproveitar ao máximo, <strong>chegue cedo</strong> (assim que o parque abrir) e baixe o aplicativo oficial para ver os horários dos shows.</p>
        
        <h2>O Que Não Pode Faltar</h2>
        <ul>
          <li><strong>Protetor solar e boné</strong></li>
          <li><strong>Roupa confortável e tênis</strong></li>
          <li><strong>Garrafinha de água</strong> (há bebedouros no parque)</li>
          <li><strong>Carregador portátil</strong> para celular</li>
        </ul>
        
        <h2>Atrações Imperdíveis</h2>
        <ul>
          <li><strong>FireWhip</strong> - A montanha-russa mais radical</li>
          <li><strong>Big Tower</strong> - Vista panorâmica de 100 metros</li>
          <li><strong>Show do Madagascar</strong></li>
          <li><strong>Vila Germânica</strong> - Perfeita para fotos</li>
        </ul>
        
        <h2>Hospede-se Perto</h2>
        <p>A <a href="/" class="text-primary hover:text-primary/80 underline font-medium">Pousada Vila D'Itália</a> fica a apenas <strong>5 minutos do parque</strong>! Isso significa que você pode voltar para almoçar, descansar na piscina e retornar ao parque à tarde com energia renovada.</p>
        
        <p>Faça sua reserva pelo nosso <a href="/#contact" class="text-primary hover:text-primary/80 underline font-medium">formulário de contato</a>.</p>
      </div>
    `,
    image: penhaBeach3
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <Button onClick={() => navigate("/")}>Voltar para Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Blog
          </Button>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <time>{post.date}</time>
            </div>
          </div>

          <div 
            className="prose prose-lg lg:prose-xl max-w-none text-foreground
              prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
              prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:border-b prose-h2:border-border prose-h2:pb-2
              prose-h3:text-xl md:prose-h3:text-2xl prose-h3:text-secondary
              prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed prose-p:mb-4 prose-p:text-foreground/90
              prose-li:text-base md:prose-li:text-lg prose-li:leading-relaxed prose-li:text-foreground/90
              prose-ul:my-4 prose-ul:pl-6
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              [&_.lead]:text-lg md:[&_.lead]:text-xl [&_.lead]:leading-relaxed [&_.lead]:text-foreground/90 [&_.lead]:mb-6 [&_.lead]:font-medium
              [&_.highlight]:bg-primary/10 [&_.highlight]:p-6 [&_.highlight]:rounded-lg [&_.highlight]:border-l-4 [&_.highlight]:border-primary [&_.highlight]:my-8
              [&_.blog-content]:space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-accent/10 rounded-lg p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Gostou do conteúdo?</h3>
              <p className="text-base md:text-lg mb-6">
                Venha conhecer Penha e hospede-se na Pousada Vila D'Itália!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="cta"
                  asChild
                >
                  <a
                    href="https://book.omnibees.com/hotel/18988"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reserve sua Estadia
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link to="/#contact">
                    Entre em Contato
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <PenhaNews />
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;
