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
      <DialogContent className="max-w-2xl bg-gradient-to-r from-cta via-primary to-cta border-none">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-white text-2xl">
            <Sun className="w-8 h-8 animate-pulse" />
            ALERTA DE VERÃO!
          </DialogTitle>
        </DialogHeader>
        <div className="text-white space-y-4">
          <p className="text-lg">
            A temporada de sol e mar em Penha começou! Garanta sua reserva e viva o melhor do litoral catarinense.
          </p>
          <div className="flex gap-4">
            <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button
                size="lg"
                className="w-full bg-white text-foreground hover:bg-white/90 font-bold"
              >
                Reserve Agora
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-2 border-white text-white bg-transparent hover:bg-white/10"
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
