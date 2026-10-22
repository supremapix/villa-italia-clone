import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-villa-ditalia-red.png";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const section = (id: string) => pathname === "/" ? `#${id}` : `/#${id}`;
  return <header className="villa-header">
    <a className="villa-skip" href="#main-content">Pular para o conteúdo</a>
    <div className="villa-header-inner">
      <Link to="/" className="villa-brand" aria-label="Pousada Vila D’Itália — início" onClick={() => setOpen(false)}><img src={logo} alt="Pousada Vila D’Itália" /><span>Vila D’Itália<small>POUSADA · PENHA / SC</small></span></Link>
      <button className="villa-menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="villa-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav id="villa-nav" aria-label="Navegação principal" className={open ? "villa-nav is-open" : "villa-nav"} onKeyDown={e => { if (e.key === "Escape") setOpen(false); }}>
        <a href={section("about")} onClick={() => setOpen(false)}>A pousada</a>
        <Link to="/acomodacoes" onClick={() => setOpen(false)}>Acomodações</Link>
        <a href={section("leisure")} onClick={() => setOpen(false)}>Lazer</a>
        <a href={section("location")} onClick={() => setOpen(false)}>Localização</a>
        <Link to="/faq" onClick={() => setOpen(false)}>Dúvidas</Link>
        <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <a className="villa-nav-reserve" href={section("contact")} onClick={() => setOpen(false)}><Phone size={17} /> Reservar</a>
      </nav>
    </div>
  </header>;
}
