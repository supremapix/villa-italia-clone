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
  articleSection?: string;
  articleTags?: string[];
}

const BASE_URL = "https://www.pousadaviladitalia.com.br";
const DEFAULT_IMAGE = "https://www.pousadaviladitalia.com.br/og-image.jpg";
const LOGO_URL = "https://storage.googleapis.com/gpt-engineer-file-uploads/z3uM9QrEiaZcmzxCWIVMCntcMQg2/uploads/1764018807406-pousada-vila-d-italia-perto-beto-carero-world-128x103.png";
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
  articleSection,
  articleTags,
}: SEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const canonicalUrl = `${BASE_URL}${canonical || currentPath}`;
  const currentDate = new Date().toISOString().split('T')[0];

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
    },
    "hasMap": "https://maps.google.com/?cid=pousadaviladitalia",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
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
    "dateModified": modifiedTime || currentDate,
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": image
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".lead", "p"]
    }
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": BASE_URL,
    "logo": LOGO_URL,
    "sameAs": [
      "https://www.instagram.com/pousadaviladitalia/",
      "https://www.facebook.com/pousadaviladitalia/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-47-99204-5122",
      "contactType": "reservations",
      "availableLanguage": ["Portuguese"]
    }
  };

  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": SITE_NAME,
    "image": DEFAULT_IMAGE,
    "url": BASE_URL,
    "telephone": "+55-47-99204-5122",
    "priceRange": "$$",
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
      "latitude": -26.7729,
      "longitude": -48.6412
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -26.7729,
        "longitude": -48.6412
      },
      "geoRadius": "50000"
    }
  };

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots e indexação avançada */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta name="bingbot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="google" content="notranslate" />
      <meta name="google-site-verification" content="" />
      
      {/* Geolocalização */}
      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content="Penha" />
      <meta name="geo.position" content="-26.7729;-48.6412" />
      <meta name="ICBM" content="-26.7729, -48.6412" />
      <meta name="place:location:latitude" content="-26.7729" />
      <meta name="place:location:longitude" content="-48.6412" />
      
      {/* Open Graph / Facebook */}
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
      {articleSection && <meta property="article:section" content={articleSection} />}
      {articleTags && articleTags.map((tag, i) => (
        <meta key={i} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:creator" content="@viladitalia" />
      <meta name="twitter:site" content="@viladitalia" />
      
      {/* Resource Hints - Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://book.omnibees.com" />
      <link rel="dns-prefetch" href="https://api.whatsapp.com" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap" as="style" />
      
      {/* PWA e Mobile */}
      <meta name="theme-color" content="#2d5a27" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="msapplication-TileColor" content="#2d5a27" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      
      {/* Verificação de Propriedade */}
      <meta name="facebook-domain-verification" content="" />
      <meta name="p:domain_verify" content="" />
      
      {/* Structured Data - Hotel Principal */}
      <script type="application/ld+json">
        {JSON.stringify(hotelStructuredData)}
      </script>
      
      {/* Structured Data - WebPage */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(webPageStructuredData)}
        </script>
      )}
      
      {/* Structured Data - Breadcrumbs */}
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
      
      {/* Structured Data - Custom (Beach, Article, etc) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {/* Structured Data - Local Business */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessStructuredData)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
