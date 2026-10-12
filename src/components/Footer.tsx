import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <img 
              src={logo} 
              alt="Pousada Vila D'Italia" 
              className="h-24 w-auto mx-auto brightness-0 invert"
            />
            <p className="text-xl mt-4 text-gray-200">
              Seu refúgio perfeito entre o mar e a diversão em Penha-SC.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contato (Prioridade Máxima) */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
            <h4 className="text-3xl font-bold mb-8 text-yellow-400">Entre em Contato</h4>
            <div className="space-y-8">
              <div className="flex flex-col gap-3">
                <p className="text-xl font-bold">Central de Reservas (7:30 às 21h)</p>
                <a href="tel:+5547992738090" className="text-4xl font-black text-white hover:text-yellow-400 underline">
                  (47) 99273-8090
                </a>
                <a
                  href="https://wa.me/5547992738090?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20uma%20reserva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white text-2xl font-bold py-6 px-4 rounded-xl flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-8 h-8" />
                  Chamar no WhatsApp
                </a>
              </div>
              
              <div className="flex flex-col gap-3 border-t border-gray-700 pt-8">
                <p className="text-xl font-bold">Recepção Pousada (8:00 às 22h)</p>
                <a href="tel:+5547992045122" className="text-4xl font-black text-white hover:text-yellow-400 underline">
                  (47) 99204-5122
                </a>
              </div>
            </div>
          </div>

          {/* Links e Localização */}
          <div className="space-y-12">
            <div>
                <h4 className="text-3xl font-bold mb-6 text-yellow-400">Links Rápidos</h4>
                <ul className="grid grid-cols-2 gap-4">
                  {[
                      {label: "Início", id: "hero", type: "scroll"},
                      {label: "Sobre", id: "about", type: "scroll"},
                      {label: "Acomodações", id: "/acomodacoes", type: "route"},
                      {label: "Lazer", id: "leisure", type: "scroll"},
                      {label: "Localização", id: "location", type: "scroll"},
                      {label: "Blog", id: "/blog", type: "route"},
                      {label: "FAQ", id: "/faq", type: "route"},
                      {label: "Contato", id: "contact", type: "scroll"}
                  ].map(link => (
                    <li key={link.label}>
                        <button
                          onClick={() => link.type === "route" ? window.location.href = link.id : scrollToSection(link.id)}
                          className="text-xl font-medium text-white hover:text-yellow-400 bg-gray-900 w-full py-4 px-2 rounded-lg"
                        >
                          {link.label}
                        </button>
                    </li>
                  ))}
                </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
                <h4 className="text-2xl font-bold mb-4 text-yellow-400">Endereço</h4>
                <div className="flex items-start gap-4 text-lg">
                    <MapPin className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                    <p>Rua Luís Vicente da Silva, 183<br/>Centro, Penha - SC<br/>CEP: 88385-000</p>
                </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="border-t border-gray-700 pt-8 mb-8 text-center">
          <p className="text-white text-lg font-display italic mb-4">
            "A energia que voce espalha e a mesma que voce recebe"
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {["PAZ", "LUZ", "CARIDADE", "GRATIDAO", "AMOR", "ESPERANCA"].map((value) => (
              <span
                key={value}
                className="px-3 py-1 bg-yellow-900 text-yellow-200 rounded-full text-sm font-semibold"
              >
                {value}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-sm">
            Deus abencoe sempre estas familias
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center space-y-3">
          <p className="text-gray-300">
            © {currentYear} Pousada Vila D'Italia. Todos os direitos reservados.
          </p>
          <p className="text-white flex items-center justify-center gap-2 text-base">
            Feito com <span className="text-red-500 text-2xl">&#10084;</span> 
            <a 
              href="https://supremamidia.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-yellow-400 hover:text-yellow-300 transition-colors duration-150 underline"
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