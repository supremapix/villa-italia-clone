import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article" | "place";
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: object;
  noIndex?: boolean;
  breadcrumbs?: { name: string; url: string }[];
}

const BASE_URL = "https://www.pousadaviladitalia.com.br";
const DEFAULT_IMAGE = "https://www.pousadaviladitalia.com.br/og-image.jpg";
const SITE_NAME = "Pousada Vila D'Italia";

const EnhancedSEO = ({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = "website",
  keywords,
  author = "Pousada Vila D'Italia",
  publishedTime,
  modifiedTime,
  structuredData,
  noIndex = false,
  breadcrumbs,
}: SEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const canonicalUrl = `${BASE_URL}${canonical || currentPath}`;

  const hotelStructuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Pousada Vila D'Italia",
    "description": "Pousada com piscina e cafe da manha completo em Penha/SC. A poucos passos da Praia de Armacao e 5 minutos do Beto Carrero World.",
    "image": DEFAULT_IMAGE,
    "url": BASE_URL,
    "@id": `${BASE_URL}/#hotel`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Luis Vicente da Silva, 183",
      "addressLocality": "Penha",
      "addressRegion": "SC",
      "postalCode": "88385-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-26.7729",
      "longitude": "-48.6412"
    },
    "telephone": ["+55-47-99204-5122", "+55-47-99273-8090"],
    "email": "contato@pousadaviladitalia.com.br",
    "priceRange": "R$ 149 - R$ 350",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "checkinTime": "14:00",
    "checkoutTime": "11:30",
    "numberOfRooms": "30",
    "petsAllowed": false,
    "amenityFeature": [
      {"@type": "LocationFeatureSpecification", "name": "Piscina ao ar livre"},
      {"@type": "LocationFeatureSpecification", "name": "Piscina coberta com hidromassagem"},
      {"@type": "LocationFeatureSpecification", "name": "Cafe da Manha Incluso"},
      {"@type": "LocationFeatureSpecification", "name": "Wi-Fi Gratuito"},
      {"@type": "LocationFeatureSpecification", "name": "Estacionamento Gratuito"},
      {"@type": "LocationFeatureSpecification", "name": "Ar-condicionado"},
      {"@type": "LocationFeatureSpecification", "name": "TV a Cabo"},
      {"@type": "LocationFeatureSpecification", "name": "Area de Lazer"}
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "247"
    }
  };

  const breadcrumbStructuredData = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${BASE_URL}${item.url}`
    }))
  } : null;

  const webPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonicalUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": SITE_NAME,
      "url": BASE_URL
    },
    "about": {
      "@type": "Hotel",
      "name": SITE_NAME
    },
    "inLanguage": "pt-BR",
    "datePublished": publishedTime || "2024-01-01",
    "dateModified": modifiedTime || new Date().toISOString().split('T')[0]
  };

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="bingbot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content="Penha" />
      <meta name="geo.position" content="-26.7729;-48.6412" />
      <meta name="ICBM" content="-26.7729, -48.6412" />
      
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE_NAME} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://book.omnibees.com" />
      
      <meta name="theme-color" content="#2d5a27" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      <script type="application/ld+json">
        {JSON.stringify(hotelStructuredData)}
      </script>
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(webPageStructuredData)}
        </script>
      )}
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;
