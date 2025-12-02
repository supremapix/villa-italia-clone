import { MapPin, MessageCircle, Mail, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const FloatingButtons = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5547992738090&text=Ol%C3%A1!%20Estou%20no%20site:%20*Site:%20Pousada%20Villa%20D%27Italia*%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20e%20reservas";
  const mapsUrl = "https://goo.gl/maps/uDdApnDSJKVc2EJN7";
  const emailUrl = "mailto:contato@viladitalia.com.br";
  const bookingUrl = "https://book.omnibees.com/hotel/18988";

  return (
    <div className="fixed right-2 md:right-4 bottom-2 md:bottom-4 z-50 flex flex-col gap-2 md:gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Button
          size="icon"
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
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
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-cta hover:bg-cta-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </Button>
      </a>

      {/* Email Button */}
      <a
        href={emailUrl}
        className="group"
      >
        <Button
          size="icon"
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-secondary hover:bg-secondary-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </Button>
      </a>

      {/* Booking Button */}
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Button
          size="icon"
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Calendar className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingButtons;
