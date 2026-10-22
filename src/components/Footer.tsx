import { Phone, MessageCircle, MapPin } from 'lucide-react';
import logo from '@/assets/logo-villa-ditalia.gif';
export default function Footer() {
 return <footer className='villa-footer'><div className='villa-footer-inner'>
 <div className='villa-footer-brand'><img src={logo} alt="Pousada Vila D'Itália"/><p>Hospitalidade italiana em Penha, Santa Catarina.</p></div>
 <div className='villa-footer-grid'><section aria-labelledby='footer-contact'><h2 id='footer-contact'>Fale com a pousada</h2>
 <h3>Reservas</h3><p>Atendimento: 7:30 às 21h</p>
 <a className='villa-footer-action' href='https://wa.me/5547992738090?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20uma%20reserva'><MessageCircle aria-hidden='true'/> WhatsApp de reservas</a>
 <a className='villa-footer-action' href='tel:+5547992738090'><Phone aria-hidden='true'/> Ligar: (47) 99273-8090</a>
 <h3>Recepção</h3><p>Atendimento: 8:00 às 22h</p>
 <a className='villa-footer-action' href='https://wa.me/5547992045122?text=Ol%C3%A1!%20Vim%20do%20site%20e%20preciso%20de%20atendimento'><MessageCircle aria-hidden='true'/> WhatsApp da recepção</a>
 <a className='villa-footer-action' href='tel:+5547992045122'><Phone aria-hidden='true'/> Ligar: (47) 99204-5122</a>
 <a className='villa-footer-email' href='mailto:contato@viladitalia.com.br'>E-mail: contato@viladitalia.com.br</a></section>
 <section aria-labelledby='footer-stay'><h2 id='footer-stay'>Planeje sua estadia</h2><nav aria-label='Navegação do rodapé'>
 <a href='/acomodacoes'>Acomodações</a><a href='/#location'>Localização e como chegar</a><a href='/faq'>Informações da estadia e dúvidas</a><a href='/#contact'>Consultar reserva</a><a href='/blog'>Dicas de viagem em Penha</a></nav>
 <p className='villa-footer-policy'><strong>Não aceitamos pets</strong><br/>Animais de estimação não são permitidos na pousada.</p>
 <h3>Nosso endereço</h3><address>Rua Luís Vicente da Silva, 183<br/>Praia da Armação — Centro<br/>Penha — SC · CEP 88385-000</address>
 <a className='villa-footer-action' href='/#location'><MapPin aria-hidden='true'/> Ver localização e mapa</a><p>A 80m da Praia da Armação</p><p>Check-in: 14h | Check-out: 11:30h</p></section></div>
 <nav className='villa-footer-social' aria-label='Redes sociais'><a href='https://www.instagram.com/viladitaliapousada/' target='_blank' rel='noopener noreferrer'>Instagram</a><a href='https://www.facebook.com/viladitalia/?ref=embed_page' target='_blank' rel='noopener noreferrer'>Facebook</a><a href='https://www.youtube.com/@POUSADAVILADITÁLIA' target='_blank' rel='noopener noreferrer'>YouTube</a></nav>
 <div className='villa-footer-bottom'><p>“A energia que você espalha é a mesma que você recebe”</p><p>PAZ · LUZ · CARIDADE · GRATIDÃO · AMOR · ESPERANÇA</p><p>Deus abençoe sempre estas famílias</p><p>© {new Date().getFullYear()} Pousada Vila D'Itália. Todos os direitos reservados.</p><a href='https://supremamidia.com.br' target='_blank' rel='noopener noreferrer'>Feito com carinho por Suprema Mídia Marketing Digital</a></div>
 </div></footer>;
}
