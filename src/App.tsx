import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Instagram from './pages/Instagram';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Accommodations from "./pages/Accommodations";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Neighborhoods from "./pages/Neighborhoods";
import FAQ from "./pages/FAQ";
import BetoCarreroWorld from "./pages/BetoCarreroWorld";
import SiteMap from "./pages/SiteMap";
import NotFound from "./pages/NotFound";

function LegacyIndexRedirect() {
  const { search, hash } = useLocation();
  return <Navigate to={`/${search}${hash}`} replace />;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index.html" element={<LegacyIndexRedirect />} />
          <Route path="/acomodacoes" element={<Accommodations />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/bairros-penha" element={<Neighborhoods />} />
          <Route path="/bairros-penha/:slug" element={<Neighborhoods />} />
          <Route path="/beto-carrero-world" element={<BetoCarreroWorld />} />
          <Route path="/mapa-do-site" element={<SiteMap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingActions />
      </>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
