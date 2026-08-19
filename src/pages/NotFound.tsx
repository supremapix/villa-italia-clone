import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center gradient-warm">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-display font-bold text-secondary mb-4">404</h1>
          <div className="w-20 h-1 bg-cta rounded-full mx-auto mb-6" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Página não encontrada
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida para outro endereço.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <Button variant="cta" size="lg" className="text-lg px-8">
              <Home className="w-5 h-5" />
              Voltar para Início
            </Button>
          </Link>
          
          <a href="https://api.whatsapp.com/send?phone=5547992738090&text=Olá!%20Me%20perdi%20no%20site%20mas%20quero%20fazer%20uma%20reserva" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              <Search className="w-5 h-5" />
              Solicitar Reserva WhatsApp
            </Button>
          </a>
        </div>

        <div className="mt-12 p-6 bg-background rounded-xl shadow-soft">
          <p className="text-muted-foreground mb-4">
            Precisa de ajuda? Entre em contato conosco:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="tel:+5547992738090" className="text-secondary hover:text-secondary-dark transition-smooth font-semibold">
              📞 +55 47 99273-8090
            </a>
            <a href="mailto:contato@viladitalia.com.br" className="text-secondary hover:text-secondary-dark transition-smooth font-semibold">
              ✉️ contato@viladitalia.com.br
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
