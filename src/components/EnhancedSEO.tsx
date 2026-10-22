import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import photo from '@/assets/gallery-6.jpg';
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "place";
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: object;
  noIndex?: boolean;
  breadcrumbs?: { name: string; url: string }[];
  articleSection?: string;
  articleTags?: string[];
}


const BASE_URL='https://www.pousadaviladitalia.com.br';
const SITE_NAME="Pousada Vila D'Italia";
export default function EnhancedSEO({title,description,canonical,image='/og-pousada.jpg',imageAlt,type='website',keywords,author=SITE_NAME,publishedTime,modifiedTime,structuredData,noIndex=false,breadcrumbs,articleSection,articleTags}:SEOProps){
 const location=useLocation();
 const url=new URL(canonical || location.pathname,BASE_URL).href;
 const imageUrl=new URL(image,BASE_URL).href;
 const fullTitle=title.includes(SITE_NAME)?title:title+' | '+SITE_NAME;
 const hotel={'@context':'https://schema.org','@type':'LodgingBusiness','@id':BASE_URL+'/#hotel',name:SITE_NAME,url:BASE_URL+'/',image:new URL(photo,BASE_URL).href,telephone:['+5547992045122','+5547992738090'],email:'contato@viladitalia.com.br',address:{'@type':'PostalAddress',streetAddress:'R. Luís Vicente da Silva, 183',addressLocality:'Penha',addressRegion:'SC',postalCode:'88385-000',addressCountry:'BR'}};
 const page={'@context':'https://schema.org','@type':'WebPage',name:title,description,url,inLanguage:'pt-BR',isPartOf:{'@type':'WebSite',name:SITE_NAME,url:BASE_URL+'/'}};
 const crumbs=breadcrumbs&&{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:breadcrumbs.map((b,i)=>({'@type':'ListItem',position:i+1,name:b.name,item:new URL(b.url,BASE_URL).href}))};
 const json=(data:object)=>JSON.stringify(data).replace(/</g,'\\u003c');
 return <Helmet><html lang="pt-BR"/><title>{fullTitle}</title><meta name="description" content={description}/>
 <meta name="robots" content={noIndex?'noindex, follow':'index, follow, max-image-preview:large'}/>
 {!noIndex&&<link rel="canonical" href={url}/>}{keywords&&<meta name="keywords" content={keywords}/>}<meta name="author" content={author}/>
 <meta property="og:title" content={fullTitle}/><meta property="og:description" content={description}/><meta property="og:type" content={type}/><meta property="og:url" content={url}/><meta property="og:image" content={imageUrl}/><meta property="og:image:alt" content={image==='/og-pousada.jpg'?"Pousada Vila D’Itália em Penha. Reservas: (47) 99273-8090":imageAlt || title}/>{image==='/og-pousada.jpg'&&<meta property="og:image:width" content="1200"/>}{image==='/og-pousada.jpg'&&<meta property="og:image:height" content="630"/>}<meta property="og:locale" content="pt_BR"/><meta property="og:site_name" content={SITE_NAME}/>
 <meta name="twitter:image:alt" content={image==='/og-pousada.jpg'?"Pousada Vila D’Itália em Penha. Reservas: (47) 99273-8090":imageAlt || title}/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content={fullTitle}/><meta name="twitter:description" content={description}/><meta name="twitter:image" content={imageUrl}/>
 {publishedTime&&<meta property="article:published_time" content={publishedTime}/>} {modifiedTime&&<meta property="article:modified_time" content={modifiedTime}/>} {articleSection&&<meta property="article:section" content={articleSection}/>} {articleTags?.map(tag=><meta key={tag} property="article:tag" content={tag}/>)}
 {!noIndex&&<script type="application/ld+json">{json(hotel)}</script>}{!noIndex&&<script type="application/ld+json">{json(structuredData||page)}</script>}{crumbs&&!noIndex&&<script type="application/ld+json">{json(crumbs)}</script>}
 </Helmet>;
}
