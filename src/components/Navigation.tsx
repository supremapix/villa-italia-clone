import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo-villa-ditalia-red.png';
export default function Navigation() {
 const [open,setOpen]=useState(false);
 const {pathname}=useLocation();
 const section=(id:string)=>pathname==='/'?`#${id}`:`/#${id}`;
 useEffect(()=>{ const wide=window.matchMedia('(min-width:1101px)'); const close=()=>{if(wide.matches)setOpen(false)}; wide.addEventListener('change',close); return()=>wide.removeEventListener('change',close); },[]);
 const links=<><Link to='/acomodacoes'>Acomodações</Link><a href={section('location')}>Localização e como chegar</a><Link to='/faq'>Informações da estadia</Link><a href={section('about')}>Conheça a pousada</a><a href={section('leisure')}>Lazer</a><Link to='/blog'>Dicas de viagem</Link><a href={section('contact')}>Reservas e contatos</a></>;
 return <header className='villa-header'><a className='villa-skip' href='#main-content'>Pular para o conteúdo</a><div className='villa-header-inner'>
 <Link to='/' className='villa-brand' aria-label="Pousada Vila D'Itália — início"><img src={logo} alt=''/><span>Vila D'Itália<small>POUSADA · PENHA / SC</small></span></Link>
 <nav aria-label='Navegação principal' className='villa-nav'>{links}</nav>
 <Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Trigger className='villa-menu-toggle'><Menu aria-hidden='true'/> Abrir menu</Dialog.Trigger><Dialog.Portal><Dialog.Overlay className='villa-menu-overlay'/><Dialog.Content className='villa-mobile-menu' aria-describedby='menu-help'>
 <div className='villa-menu-heading'><Dialog.Title>Menu da pousada</Dialog.Title><Dialog.Close className='villa-menu-close'><X aria-hidden='true'/> Fechar menu</Dialog.Close></div>
 <div className='villa-menu-scroll'><Dialog.Description id='menu-help'>Escolha uma informação ou fale com a equipe.</Dialog.Description>
 <div className='villa-menu-contact'><a href='https://wa.me/5547992738090' className='villa-contact-primary'><MessageCircle aria-hidden='true'/> WhatsApp de reservas</a><a href='tel:+5547992738090'><Phone aria-hidden='true'/> Ligar: (47) 99273-8090</a></div>
 <nav aria-label='Menu mobile' onClick={e=>{if((e.target as HTMLElement).closest('a'))setOpen(false)}}>{links}</nav><p className='villa-menu-note'>Não aceitamos pets (animais de estimação).</p></div>
 </Dialog.Content></Dialog.Portal></Dialog.Root></div></header>;
}
