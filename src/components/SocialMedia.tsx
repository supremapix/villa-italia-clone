import { Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/viladitaliapousada/",
      color: "hover:bg-[#E1306C]"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/viladitalia/?ref=embed_page",
      color: "hover:bg-[#1877F2]"
    },
    {
      name: "TikTok",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: "https://www.tiktok.com/@pousadaviladitalia?is_from_webapp=1&sender_device=pc",
      color: "hover:bg-black"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@POUSADAVILADITÁLIA",
      color: "hover:bg-[#FF0000]"
    },
    {
      name: "Pinterest",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.92-.19-2.32 0-3.32l1.34-5.67s-.34-.69-.34-1.7c0-1.59.92-2.78 2.07-2.78.98 0 1.45.73 1.45 1.61 0 .98-.63 2.45-.95 3.81-.27 1.14.57 2.07 1.69 2.07 2.03 0 3.59-2.14 3.59-5.23 0-2.73-1.96-4.64-4.76-4.64-3.24 0-5.14 2.43-5.14 4.94 0 .98.38 2.03.85 2.6a.36.36 0 0 1 .08.35c-.09.38-.3 1.21-.34 1.38-.05.22-.17.27-.39.16-1.42-.66-2.31-2.73-2.31-4.39 0-3.6 2.61-6.9 7.53-6.9 3.95 0 7.02 2.82 7.02 6.58 0 3.93-2.48 7.09-5.92 7.09-1.16 0-2.25-.6-2.62-1.31l-.71 2.71c-.26.99-.96 2.23-1.43 2.99A12 12 0 1 0 12 0z"/>
        </svg>
      ),
      url: "https://br.pinterest.com/pousadaviladitalia",
      color: "hover:bg-[#E60023]"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Siga-nos nas Redes Sociais
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Acompanhe nosso dia a dia, promoções exclusivas e novidades da pousada
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                onClick={() => window.open(social.url, "_blank")}
                className={`flex items-center gap-3 px-8 py-6 text-lg font-semibold bg-white text-secondary border-2 border-white hover:text-white transition-smooth w-full md:w-auto ${social.color}`}
              >
                <IconComponent className="w-6 h-6" />
                {social.name}
              </Button>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80 text-sm">
            Marque suas fotos com <span className="font-semibold text-white">@viladitaliapousada</span> para aparecer em nossas redes!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
