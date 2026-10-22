import { useEffect, useRef } from 'react';
import { Instagram as InstagramIcon, ArrowRight, ShieldCheck } from 'lucide-react';
import Navigation from '@/components/Navigation';
import EnhancedSEO from '@/components/EnhancedSEO';

const profile = 'https://www.instagram.com/viladitaliapousada/';
export default function Instagram() {
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = section.current;
    if (!element || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.add('instagram-in-view'); observer.disconnect(); }
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <>
    <EnhancedSEO title="Instagram da Pousada Vila D'Italia" description="Acompanhe novidades e o dia a dia da Pousada Vila D’Itália em Penha pelo perfil @viladitaliapousada no Instagram." canonical="/instagram" breadcrumbs={[{name:'Início',url:'/'},{name:'Instagram',url:'/instagram'}]} />
    <Navigation />
    <main id="main-content">
      <section ref={section} className="instagram-section">
        <div className="instagram-glow instagram-glow-pink" aria-hidden="true" /><div className="instagram-glow instagram-glow-gold" aria-hidden="true" />
        <div className="instagram-content">
          <p className="instagram-badge"><InstagramIcon aria-hidden="true" size={20} /> Social Real @viladitaliapousada</p>
          <h1>O dia a dia da nossa vila</h1>
          <h2 className="instagram-heading">Siga-nos no Instagram <span>• @viladitaliapousada</span></h2>
          <p>Conheça nossos cantinhos, acompanhe novidades e inspire-se para sua próxima viagem a Penha.</p>
          <div className="instagram-card"><iframe src="https://www.instagram.com/viladitaliapousada/embed" title="Publicações do Instagram da Pousada Vila D’Itália" loading="lazy" /></div>
          <p className="instagram-help">O Instagram pode solicitar login ou impedir a exibição aqui. Você também pode acessar nosso perfil diretamente.</p>
          <a href={profile} className="instagram-cta" target="_blank" rel="noopener noreferrer"><InstagramIcon aria-hidden="true" /> Abrir perfil no Instagram <ArrowRight aria-hidden="true" /></a>
          <p className="instagram-location"><ShieldCheck aria-hidden="true" size={20} /> Pousada Vila D’Itália · Penha, Santa Catarina</p>
        </div>
      </section>
    </main>
  </>;
}
