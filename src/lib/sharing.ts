export interface SharePage { title: string; url: string; image: string }
export const SITE_URL = 'https://www.pousadaviladitalia.com.br';
export const shareMessage = ({title,url}: SharePage) => `Estou indicando a melhor pousada Vila D’Italia: ${title} (${url})`;
export function shareLinks(page: SharePage) {
  const make = (base: string, params: Record<string,string>) => `${base}?${new URLSearchParams(params)}`;
  return [
    {name:'WhatsApp',href:make('https://wa.me/',{text:shareMessage(page)})},
    {name:'Facebook',href:make('https://www.facebook.com/sharer/sharer.php',{u:page.url})},
    {name:'X / Twitter',href:make('https://twitter.com/intent/tweet',{text:page.title,url:page.url})},
    {name:'Pinterest',href:make('https://www.pinterest.com/pin/create/button/',{url:page.url,media:page.image,description:page.title})},
    {name:'LinkedIn',href:make('https://www.linkedin.com/sharing/share-offsite/',{url:page.url})},
    {name:'Threads',href:make('https://www.threads.net/intent/post',{text:shareMessage(page)})},
  ];
}
