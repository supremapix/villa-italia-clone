import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUp, Copy, MessageCircle, Phone, Share2, X } from 'lucide-react';
import { shareLinks, shareMessage, SITE_URL, type SharePage } from '@/lib/sharing';

export default function FloatingActions() {
  const location = useLocation();
  const [open,setOpen] = useState(false);
  const [top,setTop] = useState(false);
  const [editing,setEditing] = useState(false);
  const [status,setStatus] = useState('');
  const [fallback,setFallback] = useState(false);
  const fallbackRef = useRef<HTMLTextAreaElement>(null);
  const [page,setPage] = useState<SharePage>({title:'Pousada Vila D’Itália',url:SITE_URL+'/',image:SITE_URL+'/og-pousada.jpg'});
  const readPage = () => setPage({
    title: document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content || document.title,
    url: new URL(document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href || window.location.pathname,SITE_URL).href,
    image: new URL(document.querySelector<HTMLMetaElement>('meta[property="og:image"]')?.content || '/og-pousada.jpg',SITE_URL).href,
  });
  useEffect(() => {
    setOpen(false); setStatus(''); setFallback(false);
    const frame = requestAnimationFrame(readPage);
    const observer = new MutationObserver(readPage);
    observer.observe(document.head,{subtree:true,childList:true,attributes:true,characterData:true});
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [location.pathname,location.search]);
  useEffect(() => {
    const scroll = () => setTop(window.scrollY > 300);
    const focus = () => setEditing(Boolean(document.activeElement?.closest('input,textarea,select,[contenteditable="true"]')));
    scroll(); window.addEventListener('scroll',scroll,{passive:true}); document.addEventListener('focusin',focus); document.addEventListener('focusout',focus);
    return () => {window.removeEventListener('scroll',scroll);document.removeEventListener('focusin',focus);document.removeEventListener('focusout',focus);};
  }, []);
  useEffect(() => { if(fallback) {fallbackRef.current?.focus();fallbackRef.current?.select();} }, [fallback]);
  async function copy() {
    setStatus('');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(shareMessage(page));
      setStatus('Mensagem copiada. Agora você pode colar onde preferir.');
    } catch { setFallback(true); setStatus('Não foi possível copiar automaticamente. Selecione e copie a mensagem abaixo.'); }
  }
  return <div className={`floating-actions${editing && !open ? ' floating-actions-editing' : ''}`}>
    <Dialog.Root open={open} onOpenChange={value=>{setOpen(value);setStatus('');setFallback(false);if(value)readPage();}}>
      <Dialog.Trigger className="floating-share"><Share2 size={20} aria-hidden="true" /><span>Compartilhar</span></Dialog.Trigger>
      <Dialog.Portal><Dialog.Overlay className="share-overlay" /><Dialog.Content className="share-dialog" aria-describedby="share-description">
        <div className="share-heading"><Dialog.Title>Compartilhar esta página</Dialog.Title><Dialog.Close className="share-close"><X aria-hidden="true" size={20} /> Fechar</Dialog.Close></div>
        <Dialog.Description id="share-description">Escolha uma rede. Você revisa a publicação antes de enviar.</Dialog.Description>
        <p className="share-page-title">{page.title}</p>
        <div className="share-options">{shareLinks(page).map(link=><a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">{link.name}<span className="sr-only"> (abre em outra aba)</span></a>)}</div>
        <button className="share-copy" onClick={copy}><Copy size={20} aria-hidden="true" /> Copiar mensagem e link</button>
        <p role="status" aria-live="polite">{status}</p>
        {fallback && <label className="share-fallback">Mensagem para copiar<textarea ref={fallbackRef} readOnly value={shareMessage(page)} onFocus={e=>e.currentTarget.select()} /></label>}
      </Dialog.Content></Dialog.Portal>
    </Dialog.Root>
    <div className="floating-contact">
      {top && <button className="floating-top" onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}><ArrowUp size={20} aria-hidden="true" /> Topo</button>}
      <a href="tel:+5547992738090"><Phone size={20} aria-hidden="true" /> Ligar</a>
      <a href="https://wa.me/5547992738090" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} aria-hidden="true" /> WhatsApp</a>
    </div>
  </div>;
}
