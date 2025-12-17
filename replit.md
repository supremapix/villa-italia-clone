# Pousada Vila D'Itália - Website

## Overview

This is a marketing and booking website for Pousada Vila D'Itália, a family-friendly hotel/guesthouse located in Penha, Santa Catarina, Brazil. The property is positioned near Beto Carrero World theme park and local beaches. The site serves as the primary digital presence for attracting guests, showcasing amenities, and facilitating reservations.

Key business features:
- Room and suite accommodations with various configurations
- Two swimming pools (outdoor and covered)
- On-site restaurant (Quiosque do Kaká)
- Apartment rental option for extended stays
- Proximity to Beto Carrero World (5 minutes) and Praia da Armação beach

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Routing**: React Router DOM for client-side navigation
- **Styling**: Tailwind CSS with custom design tokens defined in CSS variables
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state (currently minimal usage)

### Design System
The project uses a comprehensive CSS custom properties system defined in `src/index.css`:
- Primary color: Green brand color (Italian villa theme)
- Secondary/Accent: Terracotta red
- CTA buttons: Terracotta for action items
- Typography: Custom font display classes

### Component Architecture
- **Layout Components**: Navigation, Footer, FloatingButtons for consistent page structure
- **Section Components**: Hero, Welcome, Amenities, Gallery, etc. - each representing a homepage section
- **Page Components**: Index (homepage), Accommodations, BlogPost, Neighborhoods
- **Utility Components**: ScrollToTop, ImageLightbox for enhanced UX

### Routing Structure
- `/` - Main landing page with all marketing sections
- `/acomodacoes` - Dedicated accommodations page
- `/blog/:slug` - Dynamic blog post pages
- `/bairros-penha` and `/bairros-penha/:slug` - Neighborhood information pages
- `*` - 404 Not Found fallback

### Static Assets
Heavy use of local image assets stored in `src/assets/` for:
- Gallery images (31+ images)
- Room photos (70+ images)
- Beach/location photos (31+ images)
- Restaurant images
- Apartment rental images

### Deployment
- Configured for Vercel deployment with SPA rewrite rules
- Development server runs on port 5000 with host binding for Replit compatibility

## External Dependencies

### Third-Party Services
- **Booking System**: Omnibees integration (`book.omnibees.com/hotel/18988`) for reservations
- **WhatsApp Business**: Direct contact via WhatsApp API links
- **Google Maps**: Embedded location and route links
- **360° Virtual Tour**: Orbitpan integration for virtual property tour

### Social Media Integrations
- Instagram (@viladitaliapousada)
- Facebook
- TikTok
- YouTube
- Pinterest

### SEO & Structured Data
- **EnhancedSEO Component**: Centralized SEO management using react-helmet-async
- Schema.org JSON-LD markup for Hotel type, WebPage, Beach, and BreadcrumbList
- Open Graph and Twitter Card meta tags with dynamic page-specific content
- Comprehensive meta descriptions targeting local search terms
- Geo-location metadata for local SEO
- Resource hints (preconnect, dns-prefetch) for performance optimization
- Unique canonical URLs per page to prevent duplicate content issues
- Pre-rendering configuration (react-snap) for static HTML generation
- Complete sitemap.xml with all 25+ neighborhood/beach pages

### No Backend/Database
This is a static frontend application with no server-side logic or database. All data is hardcoded in component files. Contact forms redirect to WhatsApp rather than storing submissions.