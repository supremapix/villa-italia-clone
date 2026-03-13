import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle, BookOpen, MessageCircle, Phone, Mail } from "lucide-react";

const KnowledgeSection = () => {
  const navigate = useNavigate();

  return (
    <section id="conhecimento-section" className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #006994 0%, #004A70 100%)" }}>
      {/* Animated SVG Waves */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[200%] h-[60px] animate-wave" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,30 C300,60 600,0 900,30 C1200,60 1200,0 1200,30 L1200,0 L0,0 Z" fill="rgba(255,255,255,0.08)" />
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[200%] h-[40px] animate-wave" style={{ animationDelay: "-5s", animationDuration: "20s" }} viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0,20 C300,40 600,0 900,20 C1200,40 1200,0 1200,20 L1200,0 L0,0 Z" fill="rgba(255,255,255,0.05)" />
        </svg>
      </div>

      {/* Floating Bubbles CSS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${12 + i * 6}px`,
              height: `${12 + i * 6}px`,
              background: "rgba(255,255,255,0.06)",
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Planeje sua Viagem a Penha com Tranquilidade
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Respondemos tudo sobre a pousada, Beto Carrero World, praias e roteiros em Penha e região.
          </p>
        </div>

        {/* Grid 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* FAQ Card */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <HelpCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">Central de Dúvidas</h3>
            <p className="text-white/75 mb-4 leading-relaxed">
              42 perguntas respondidas sobre reservas, quartos, café da manhã, piscina e muito mais.
            </p>
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full mb-6">
              42 respostas
            </span>
            <div>
              <Button
                onClick={() => navigate("/faq")}
                className="bg-white text-[#006994] hover:bg-white/90 font-semibold gap-2"
              >
                Ver Perguntas Frequentes →
              </Button>
            </div>
          </div>

          {/* Blog Card */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">Blog da Pousada</h3>
            <p className="text-white/75 mb-4 leading-relaxed">
              Dicas de viagem, roteiros e guias completos sobre Penha, Beto Carrero e litoral norte SC.
            </p>
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full mb-6">
              Novos artigos
            </span>
            <div>
              <Button
                onClick={() => navigate("/blog")}
                className="bg-white text-[#006994] hover:bg-white/90 font-semibold gap-2"
              >
                Ler o Blog →
              </Button>
            </div>
          </div>
        </div>

        {/* Contact line */}
        <div className="text-center">
          <p className="text-white/70 mb-4 font-medium">Fale diretamente conosco:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/5547992738090?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20informações"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
            <a href="tel:+5547992738090">
              <Button size="sm" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-[#006994] gap-2">
                <Phone className="w-4 h-4" />
                (47) 99273-8090
              </Button>
            </a>
            <a href="mailto:contato@viladitalia.com.br">
              <Button size="sm" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-[#006994] gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-[200%] h-[40px] animate-wave" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0,20 C300,40 600,0 900,20 C1200,40 1200,0 1200,20 L1200,0 L0,0 Z" fill="rgba(255,255,255,0.05)" />
        </svg>
      </div>
    </section>
  );
};

export default KnowledgeSection;
