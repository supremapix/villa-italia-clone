import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-villa-ditalia.gif";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) { window.location.href = `/#${id}`; return; }
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1c1917] text-stone-100 py-16 border-t-4 border-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Brand Header */}
        <div className="text-center mb-12">
          <img
            src={logo}
            alt="Pousada Vila D'Itália"
            className="h-24 w-auto mx-auto brightness-0 invert opacity-95"
          />
          <p className="text-xl md:text-2xl mt-4 text-stone-300 font-display">
            Seu refúgio acolhedor entre o mar e a diversão em Penha – Santa Catarina
          </p>
          <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-4" />

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://www.instagram.com/viladitaliapousada/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary/80 hover:bg-secondary rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/viladitalia/?ref=embed_page"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@POUSADAVILADITÁLIA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-cta/80 hover:bg-cta rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Main Content Grid: Contacts (Priority) & Quick Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contato (Destaque e Acessibilidade para Idosos) */}
          <div className="bg-[#292524] p-6 md:p-8 rounded-2xl border border-stone-700/80 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-700">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-display font-bold text-white">Central de Atendimento</h4>
                  <p className="text-stone-300 text-sm">Fale diretamente com nossa equipe</p>
                </div>
              </div>

              {/* Central de Reservas */}
              <div className="bg-[#1c1917]/80 p-5 rounded-xl border border-stone-700/60 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-white">Central de Reservas</span>
                  <span className="flex items-center gap-1.5 text-xs text-stone-300 bg-stone-800 px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    7:30 às 21h
                  </span>
                </div>
                <a
                  href="tel:+5547992738090"
                  className="block text-3xl md:text-4xl font-extrabold text-white hover:text-secondary transition-colors my-2"
                >
                  (47) 99273-8090
                </a>
                <a
                  href="https://wa.me/5547992738090?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20uma%20reserva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xl font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-7 h-7 flex-shrink-0" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>

              {/* Recepção Pousada */}
              <div className="bg-[#1c1917]/80 p-5 rounded-xl border border-stone-700/60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-white">Recepção da Pousada</span>
                  <span className="flex items-center gap-1.5 text-xs text-stone-300 bg-stone-800 px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    8:00 às 22h
                  </span>
                </div>
                <a
                  href="tel:+5547992045122"
                  className="block text-3xl md:text-4xl font-extrabold text-white hover:text-primary transition-colors my-2"
                >
                  (47) 99204-5122
                </a>
                <a
                  href="https://wa.me/5547992045122?text=Olá!%20Vim%20do%20site%20e%20preciso%20de%20atendimento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full bg-primary hover:bg-primary-dark text-white text-lg font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-6 h-6 flex-shrink-0" />
                  <span>WhatsApp da Recepção</span>
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div className="mt-6 pt-4 border-t border-stone-700 flex items-center gap-3 text-stone-300">
              <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
              <a
                href="mailto:contato@viladitalia.com.br"
                className="text-base md:text-lg font-medium hover:text-white underline transition-colors"
              >
                contato@viladitalia.com.br
              </a>
            </div>
          </div>

          {/* Links Rápidos e Endereço */}
          <div className="flex flex-col gap-8">
            {/* Links de Navegação Rápidos e Acessíveis */}
            <div className="bg-[#292524] p-6 md:p-8 rounded-2xl border border-stone-700/80 shadow-lg">
              <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 pb-3 border-b border-stone-700">
                Páginas do Site
              </h4>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  { label: "Início", id: "hero", type: "scroll" as const },
                  { label: "Sobre a Pousada", id: "about", type: "scroll" as const },
                  { label: "Acomodações", id: "/acomodacoes", type: "route" as const },
                  { label: "Área de Lazer", id: "leisure", type: "scroll" as const },
                  { label: "Localização", id: "location", type: "scroll" as const },
                  { label: "Blog de Dicas", id: "/blog", type: "route" as const },
                  { label: "Dúvidas Frequentes", id: "/faq", type: "route" as const },
                  { label: "Beto Carrero", id: "/beto-carrero-world", type: "route" as const },
                  { label: "Praias de Penha", id: "/blog/praias-penha-sc-litoral-norte", type: "route" as const },
                  { label: "Fale Conosco", id: "contact", type: "scroll" as const },
                ].map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => link.type === "route" ? (window.location.href = link.id) : scrollToSection(link.id)}
                      className="text-left w-full py-3.5 px-4 bg-[#1c1917]/70 hover:bg-secondary/30 hover:border-secondary border border-stone-700 rounded-xl text-base md:text-lg font-semibold text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Localização / Endereço */}
            <div className="bg-[#292524] p-6 md:p-8 rounded-2xl border border-stone-700/80 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Onde Estamos</h4>
                  <p className="text-lg text-stone-200 font-medium">Rua Luís Vicente da Silva, 183</p>
                  <p className="text-base text-stone-300">Praia da Armação – Centro, Penha – SC</p>
                  <p className="text-sm text-stone-400 mt-1">CEP: 88385-000 • A 80m da Praia da Armação</p>
                  <p className="text-xs text-primary font-semibold mt-2">
                    Check-in: 14h | Check-out: 11:30h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="border-t border-stone-800 pt-8 mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl font-display italic mb-4">
            "A energia que você espalha é a mesma que você recebe"
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mb-4">
            {["PAZ", "LUZ", "CARIDADE", "GRATIDÃO", "AMOR", "ESPERANÇA"].map((value) => (
              <span
                key={value}
                className="px-3.5 py-1.5 bg-secondary/20 border border-secondary/40 text-orange-200 rounded-full text-xs md:text-sm font-bold tracking-wider"
              >
                {value}
              </span>
            ))}
          </div>
          <p className="text-stone-400 text-sm">
            Deus abençoe sempre estas famílias
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 text-center space-y-2">
          <p className="text-stone-400 text-sm">
            © {currentYear} Pousada Vila D'Itália. Todos os direitos reservados.
          </p>
          <p className="text-stone-300 flex items-center justify-center gap-2 text-base">
            Feito com <Heart className="w-5 h-5 text-secondary fill-secondary inline" />
            <a
              href="https://supremamidia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-secondary hover:text-white transition-colors underline"
            >
              Suprema Mídia Marketing Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
