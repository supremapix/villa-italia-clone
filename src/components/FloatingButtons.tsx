import { MapPin, MessageCircle, Mail } from "lucide-react";
import { Button } from "./ui/button";

const FloatingButtons = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5547992738090&text=Ol%C3%A1!%20Estou%20no%20site:%20*Site:%20Pousada%20Villa%20D%27Italia*%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20e%20reservas";
  const mapsUrl = "https://goo.gl/maps/uDdApnDSJKVc2EJN7";
  const emailUrl = "mailto:contato@pousadaviladitalia.com.br";

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </a>

      {/* Maps/Route Button */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-cta hover:bg-cta-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MapPin className="h-6 w-6 text-white" />
        </Button>
      </a>

      {/* Email Button */}
      <a
        href={emailUrl}
        className="group"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-secondary hover:bg-secondary-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Mail className="h-6 w-6 text-white" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingButtons;
