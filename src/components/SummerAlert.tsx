import { Sun } from "lucide-react";
import { Button } from "./ui/button";

const SummerAlert = () => {
  return (
    <div className="bg-gradient-to-r from-cta via-primary to-cta py-4 px-4 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <Sun className="w-6 h-6 md:w-8 md:h-8 animate-pulse" />
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold">
                ALERTA DE VERÃO!
              </h3>
              <p className="text-sm md:text-base font-light">
                A temporada de sol e mar em Penha começou! Garanta sua reserva e viva o melhor do litoral catarinense.
              </p>
            </div>
          </div>
          <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-cta font-bold whitespace-nowrap"
            >
              Reserve Agora
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SummerAlert;
