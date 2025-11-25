import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-villa-ditalia.gif";
import logoRed from "@/assets/logo-villa-ditalia-red.png";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Início", id: "hero", type: "scroll" as const },
    { label: "Sobre", id: "about", type: "scroll" as const },
    { label: "Acomodações", id: "/acomodacoes", type: "route" as const },
    { label: "Lazer", id: "leisure", type: "scroll" as const },
    { label: "Localização", id: "location", type: "scroll" as const },
    { label: "Contato", id: "contact", type: "scroll" as const },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-smooth"
          >
            <img 
              src={isScrolled ? logoRed : logo}
              alt="Pousada Villa D'Italia" 
              className="h-14 md:h-20 w-auto transition-all duration-500"
              style={{
                filter: isScrolled 
                  ? "none" 
                  : "brightness(1.3) contrast(1.1) drop-shadow(0 2px 8px rgba(0,0,0,0.8))"
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => link.type === "route" ? handleNavigate(link.id) : scrollToSection(link.id)}
                className="text-foreground hover:text-secondary transition-smooth font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button variant="cta" size="lg" onClick={() => scrollToSection("contact")}>
              <Phone className="w-4 h-4" />
              Reserve Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-secondary transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-background border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => link.type === "route" ? handleNavigate(link.id) : scrollToSection(link.id)}
                  className="text-left px-4 py-2 text-foreground hover:text-secondary hover:bg-muted transition-smooth font-medium rounded-md"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  <Phone className="w-4 h-4" />
                  Reserve Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
