import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";

interface BlogPostData {
  id: string;
  title: string;
  date: string;
  content: string;
  image: string;
}

const blogPosts: Record<string, BlogPostData> = {
  "melhores-praias-penha": {
    id: "melhores-praias-penha",
    title: "As Melhores Praias de Penha para Visitar",
    date: "15 de Janeiro, 2025",
    content: `
      <p>Penha é um verdadeiro paraíso para os amantes de praia! Com suas 19 praias, a cidade oferece opções para todos os gostos.</p>
      
      <h2>Praia da Armação</h2>
      <p>A Praia da Armação é uma das mais procuradas, oferecendo águas calmas e cristalinas, perfeitas para famílias com crianças. Com sua areia branquinha e infraestrutura completa, é o local ideal para passar o dia inteiro.</p>
      
      <h2>Praia Grande</h2>
      <p>Para quem busca mais agitação, a Praia Grande oferece ondas perfeitas para surf e uma vida noturna vibrante com diversos bares e restaurantes.</p>
      
      <h2>Praia Alegre</h2>
      <p>Com um nome que traduz bem sua essência, a Praia Alegre é conhecida por sua beleza natural e águas mornas. É uma ótima opção para quem quer fugir das praias mais movimentadas.</p>
      
      <h2>Dicas Importantes</h2>
      <ul>
        <li>Use sempre protetor solar</li>
        <li>Chegue cedo para garantir um bom lugar</li>
        <li>Traga água e lanches</li>
        <li>Respeite a natureza e não deixe lixo na praia</li>
      </ul>
    `,
    image: "/src/assets/penha-beach-1.webp"
  },
  "roteiro-3-dias-penha": {
    id: "roteiro-3-dias-penha",
    title: "Roteiro de 3 Dias em Penha e Região",
    date: "10 de Janeiro, 2025",
    content: `
      <h2>Dia 1: Beto Carrero World</h2>
      <p>Comece sua viagem com um dia inteiro no maior parque temático da América Latina. O Beto Carrero World oferece atrações para todas as idades, desde montanhas-russas radicais até shows incríveis.</p>
      
      <h2>Dia 2: Praias de Penha</h2>
      <p>Dedique o segundo dia para conhecer as belas praias de Penha. Comece pela Praia da Armação de manhã, almoce em um restaurante de frutos do mar na orla e à tarde visite a Praia Grande.</p>
      
      <h2>Dia 3: Balneário Camboriú</h2>
      <p>No terceiro dia, faça um bate-volta para Balneário Camboriú (24km). Visite o Cristo Luz, passeie pelo Unipraias e aproveite a praia central da cidade.</p>
      
      <h2>Onde Ficar</h2>
      <p>A Pousada Vila D'Itália é a escolha perfeita! Localizada estrategicamente a 5 minutos do Beto Carrero e a poucos metros da Praia de Armação, você economiza tempo e aproveita mais seus dias de férias.</p>
    `,
    image: "/src/assets/penha-beach-2.webp"
  },
  "gastronomia-penha": {
    id: "gastronomia-penha",
    title: "Gastronomia em Penha: Sabores do Litoral",
    date: "5 de Janeiro, 2025",
    content: `
      <h2>Frutos do Mar Fresquinhos</h2>
      <p>Penha é famosa por seus restaurantes especializados em frutos do mar. O pescado fresco chega diariamente dos barcos de pesca locais, garantindo qualidade e sabor incomparáveis.</p>
      
      <h2>Pratos Típicos</h2>
      <p>Não deixe de experimentar:</p>
      <ul>
        <li>Sequência de camarão</li>
        <li>Moqueca capixaba</li>
        <li>Peixe na telha</li>
        <li>Caldeirada de frutos do mar</li>
        <li>Ostras gratinadas</li>
      </ul>
      
      <h2>Restaurantes Recomendados</h2>
      <p>A região da Praia da Armação concentra excelentes restaurantes com vista para o mar. Muitos oferecem música ao vivo nos finais de semana.</p>
      
      <h2>Café da Manhã na Pousada</h2>
      <p>Na Pousada Vila D'Itália, servimos um delicioso café da manhã com produtos frescos e regionais, incluindo frutas da estação, pães artesanais e queijos locais.</p>
    `,
    image: "/src/assets/breakfast.jpg"
  },
  "dicas-beto-carrero": {
    id: "dicas-beto-carrero",
    title: "Dicas Essenciais para Aproveitar o Beto Carrero World",
    date: "28 de Dezembro, 2024",
    content: `
      <h2>Planeje com Antecedência</h2>
      <p>O Beto Carrero World é enorme! Para aproveitar ao máximo, chegue cedo (assim que o parque abrir) e baixe o aplicativo oficial para ver os horários dos shows.</p>
      
      <h2>O Que Não Pode Faltar</h2>
      <ul>
        <li>Protetor solar e boné</li>
        <li>Roupa confortável e tênis</li>
        <li>Garrafinha de água (há bebedouros no parque)</li>
        <li>Carregador portátil para celular</li>
      </ul>
      
      <h2>Atrações Imperdíveis</h2>
      <ul>
        <li>FireWhip - A montanha-russa mais radical</li>
        <li>Big Tower - Vista panorâmica de 100 metros</li>
        <li>Show do Madagascar</li>
        <li>Vila Germânica - Perfeita para fotos</li>
      </ul>
      
      <h2>Hospede-se Perto</h2>
      <p>A Pousada Vila D'Itália fica a apenas 5 minutos do parque! Isso significa que você pode voltar para almoçar, descansar na piscina e retornar ao parque à tarde com energia renovada.</p>
    `,
    image: "/src/assets/penha-beach-3.jpg"
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

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <time>{post.date}</time>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-accent/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Gostou do conteúdo?</h3>
              <p className="text-lg mb-6">
                Venha conhecer Penha e hospede-se na Pousada Vila D'Itália!
              </p>
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
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;
