import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo-villa-ditalia.gif";

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
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Pousada Villa D'Italia" 
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/80 mb-6">
              Seu refúgio perfeito entre o mar e a diversão no litoral norte de Santa Catarina.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/viladitaliapousada/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-dark transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-secondary-foreground" />
              </a>
              <a
                href="https://www.facebook.com/viladitalia/?ref=embed_page"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-accent-foreground" />
              </a>
              <a
                href="https://www.youtube.com/@POUSADAVILADITÁLIA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cta rounded-full flex items-center justify-center hover:bg-cta-dark transition-smooth"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-cta-foreground" />
              </a>
              <a
                href="https://www.tiktok.com/@pousadaviladitalia?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-smooth"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary-foreground">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://br.pinterest.com/pousadaviladitalia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-smooth"
                aria-label="Pinterest"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-muted-foreground">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.92-.19-2.32 0-3.32l1.34-5.67s-.34-.69-.34-1.7c0-1.59.92-2.78 2.07-2.78.98 0 1.45.73 1.45 1.61 0 .98-.63 2.45-.95 3.81-.27 1.14.57 2.07 1.69 2.07 2.03 0 3.59-2.14 3.59-5.23 0-2.73-1.96-4.64-4.76-4.64-3.24 0-5.14 2.43-5.14 4.94 0 .98.38 2.03.85 2.6a.36.36 0 0 1 .08.35c-.09.38-.3 1.21-.34 1.38-.05.22-.17.27-.39.16-1.42-.66-2.31-2.73-2.31-4.39 0-3.6 2.61-6.9 7.53-6.9 3.95 0 7.02 2.82 7.02 6.58 0 3.93-2.48 7.09-5.92 7.09-1.16 0-2.25-.6-2.62-1.31l-.71 2.71c-.26.99-.96 2.23-1.43 2.99A12 12 0 1 0 12 0z"/>
                </svg>
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
                  onClick={() => window.location.href = "/acomodacoes"}
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
                  <p className="text-background/80">+55 47 99273-8090</p>
                  <p className="text-sm text-background/60">WhatsApp disponível</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a 
                    href="mailto:contato@viladitalia.com.br"
                    className="text-background/80 break-all hover:text-primary transition-smooth block"
                  >
                    contato@viladitalia.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cta mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/90 font-semibold">R. Luís Vicente da Silva, 183</p>
                  <p className="text-background/80">Centro, Penha - SC</p>
                  <p className="text-background/80">CEP: 88385-000</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="text-xl font-display font-bold mb-4 text-primary">Horário da Recepção</h4>
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
        <div className="border-t border-background/20 pt-8 text-center space-y-3">
          <p className="text-background/60">
            © {currentYear} Pousada Vila D'Itália. Todos os direitos reservados.
          </p>
          <p className="text-background/80 flex items-center justify-center gap-2 text-base">
            Feito com <span className="text-red-500 text-2xl animate-pulse">❤️</span> 
            <a 
              href="https://supremamidia.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-primary-dark transition-smooth underline"
            >
              Suprema Midia Marketing Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
