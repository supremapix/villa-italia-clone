import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash === "#reservation" ? "reservation-form" : decodeURIComponent(location.hash.slice(1));
      const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <div
      className={`fixed left-4 bottom-4 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <Button
        aria-label="Voltar ao topo" tabIndex={isVisible ? 0 : -1} onClick={scrollToTop}
        size="icon"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="h-6 w-6 text-primary-foreground" />
      </Button>
    </div>
  );
};

export default ScrollToTop;
