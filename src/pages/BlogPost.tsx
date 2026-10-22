import { useParams, useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PenhaNews from "@/components/PenhaNews";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";

import { blogPosts } from "@/data/blogCatalog";
import NotFound from "./NotFound";
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? blogPosts[slug] : null;

  if (!post) return <NotFound />;

  // Generate structured data for blog post
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": new URL(post.image, "https://www.pousadaviladitalia.com.br").href,
    "datePublished": post.dateISO,
    "dateModified": post.modifiedISO || post.dateISO,
    "author": {
      "@type": "Organization",
      "name": "Pousada Vila D'Itália",
      "url": "https://www.pousadaviladitalia.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pousada Vila D'Itália",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.pousadaviladitalia.com.br/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.pousadaviladitalia.com.br/blog/${slug}`
    }
  };

  // Extract first 160 chars for meta description
  const cleanContent = post.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const metaDescription = post.metaDescription || cleanContent.substring(0, 157) + '...';

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title={post.title}
        description={metaDescription}
        canonical={`/blog/${slug}`}
        image={typeof post.image === 'string' ? post.image : undefined}
        type="article"
        keywords={post.keywords}
        publishedTime={post.dateISO}
        modifiedTime={post.modifiedISO || post.dateISO}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` }
        ]}
        structuredData={articleStructuredData}
        articleSection={post.category || "Turismo"}
        articleTags={["Penha SC", "Turismo", "Praias", "Beto Carrero World", "Hospedagem"]}
      />
      <Navigation />
      <main id="main-content" className="pt-24">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Button
            variant="outline"
            onClick={() => navigate("/blog")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Blog
          </Button>

          {/* Featured Image */}
          <div className="relative mb-4 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-full h-64 md:h-96 object-cover"
              width="1200"
              height="600"
              loading="eager"
            />
            <a
              href="https://wa.me/5547992738090"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm py-2 px-4 flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              📞 Reserva via WhatsApp: (47) 99273-8090
            </a>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.modifiedISO || post.dateISO}>{post.modifiedISO ? `Revisado em ${post.modifiedISO.split("-").reverse().join("/")}` : post.date}</time>
            </div>
          </div>

          <div 
            className="prose prose-lg lg:prose-xl max-w-none text-foreground
              prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
              prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:border-b prose-h2:border-border prose-h2:pb-2
              prose-h3:text-xl md:prose-h3:text-2xl prose-h3:text-secondary
              prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed prose-p:mb-4 prose-p:text-foreground/90
              prose-li:text-base md:prose-li:text-lg prose-li:leading-relaxed prose-li:text-foreground/90
              prose-ul:my-4 prose-ul:pl-6
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              [&_.lead]:text-lg md:[&_.lead]:text-xl [&_.lead]:leading-relaxed [&_.lead]:text-foreground/90 [&_.lead]:mb-6 [&_.lead]:font-medium
              [&_.highlight]:bg-primary/10 [&_.highlight]:p-6 [&_.highlight]:rounded-lg [&_.highlight]:border-l-4 [&_.highlight]:border-primary [&_.highlight]:my-8
              [&_.blog-content]:space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-accent/10 rounded-lg p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Gostou do conteúdo?</h3>
              <p className="text-base md:text-lg mb-6">
                Venha conhecer Penha e hospede-se na Pousada Vila D'Itália!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="cta"
                  asChild
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=5547992738090&text=Olá!%20Vim%20do%20blog%20e%20gostaria%20de%20fazer%20uma%20reserva"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Reserva WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link to="/#contact">
                    Entre em Contato
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <PenhaNews />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogPost;
