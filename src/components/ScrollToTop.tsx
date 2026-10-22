import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
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
      behavior: "instant",
    });
  }, [location.pathname, location.hash]);

  return null;
};
export default ScrollToTop;
