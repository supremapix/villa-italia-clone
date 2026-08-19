import { Sun, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const SummerAlert = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Popup is disabled as per user request
    setIsOpen(false);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl bg-white border-2 border-primary">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-foreground text-2xl">
            <Sun className="w-8 h-8 animate-pulse text-cta" />
            Reserve Agora e Garanta Sua Vaga!
          </DialogTitle>
        </DialogHeader>
        <div className="text-foreground space-y-4">
          <h3 className="text-xl font-bold">Vagas Limitadas para o Verão!</h3>
          <p className="text-lg">
            Aproveite nossas tarifas especiais e garanta os melhores dias de sol, praia e diversão em Penha!
          </p>
          <div className="flex gap-4">
            <div className="flex-1">
              <a href="https://api.whatsapp.com/send?phone=5547992738090&text=Olá!%20Vi%20o%20aviso%20de%20vagas%20no%20site%20e%20gostaria%20de%20reservar" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full bg-white text-foreground border-2 border-foreground hover:bg-foreground hover:text-white font-bold"
                >
                  Solicitar Reserva WhatsApp
                </Button>
              </a>
            </div>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-2 border-foreground text-foreground bg-transparent hover:bg-foreground/10"
            >
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SummerAlert;