import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';
import { blogPosts } from './data/blogCatalog';
import { neighborhoods } from './pages/Neighborhoods';
export const routes=['/','/acomodacoes','/blog','/faq','/bairros-penha','/beto-carrero-world','/mapa-do-site',...Object.keys(blogPosts).map(id=>'/blog/'+id),...Object.keys(neighborhoods).map(id=>'/bairros-penha/'+id)];
export function render(url:string){
 const context={} as {helmet:HelmetServerState};
 const html=renderToString(<HelmetProvider context={context}><StaticRouter location={url}><App/></StaticRouter></HelmetProvider>);
 const h=context.helmet;
 return {html,head:h.title.toString()+h.meta.toString()+h.link.toString()+h.script.toString()};
}
