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
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
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
            <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button
                size="lg"
                className="w-full bg-white text-foreground border-2 border-foreground hover:bg-foreground hover:text-white font-bold"
              >
                Reserve Agora
              </Button>
            </a>
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
