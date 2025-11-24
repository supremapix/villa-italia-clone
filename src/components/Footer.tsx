import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-display font-bold text-primary mb-4">
              Villa D'Itália
            </h3>
            <p className="text-background/80 mb-6">
              Seu refúgio perfeito entre o mar e a diversão no litoral norte de Santa Catarina.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-dark transition-smooth"
              >
                <Instagram className="w-5 h-5 text-secondary-foreground" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-smooth"
              >
                <Facebook className="w-5 h-5 text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-xl font-display font-bold mb-4 text-primary">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("accommodations")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Acomodações
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("leisure")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Lazer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Localização
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-display font-bold mb-4 text-primary">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80">(47) 9999-9999</p>
                  <p className="text-sm text-background/60">WhatsApp disponível</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80 break-all">contato@viladitalia.com.br</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cta mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80">Praia da Armação</p>
                  <p className="text-background/80">Penha - Santa Catarina</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="text-xl font-display font-bold mb-4 text-primary">Horário de Atendimento</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <span className="font-semibold text-background">Segunda a Sexta:</span>
                <br />8h às 20h
              </li>
              <li>
                <span className="font-semibold text-background">Sábado:</span>
                <br />9h às 18h
              </li>
              <li>
                <span className="font-semibold text-background">Domingo:</span>
                <br />9h às 17h
              </li>
            </ul>
            <p className="text-sm text-background/60 mt-4">
              Check-in: 14h | Check-out: 12h
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} Pousada Vila D'Itália. Todos os direitos reservados.
          </p>
          <p className="text-background/40 text-sm mt-2">
            Desenvolvido com carinho para proporcionar a melhor experiência aos nossos hóspedes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
