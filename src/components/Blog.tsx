import ImageCredit from '@/components/ImageCredit';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogCatalog';
import { latestPublishedArticles } from '@/data/latestArticles';

const posts = latestPublishedArticles(blogPosts, __PUBLICATION_DATE__);

export default function Blog() {
  return <section id="home-blog" aria-labelledby="home-blog-title" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="home-blog-title" className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">Últimas do blog</h2>
        <p className="text-xl text-foreground max-w-3xl mx-auto">Os artigos mais recentes para planejar sua viagem a Penha.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => <article key={post.id} className="overflow-hidden bg-background border border-stone-200 shadow-soft rounded-xl flex flex-col">
          <img src={post.image} alt={post.imageAlt || post.title} loading="lazy" width="640" height="400" className="w-full h-52 object-cover" />
          <div className="p-6 flex flex-col flex-1">
            <ImageCredit credit={post.imageCredit} />
            <time dateTime={post.dateISO} className="text-base text-muted-foreground mb-3">{post.dateISO!.split('-').reverse().join('/')}</time>
            <h3 className="font-display font-bold text-xl md:text-2xl text-foreground leading-snug mb-3">{post.title}</h3>
            <p className="text-muted-foreground mb-5 leading-relaxed line-clamp-3">{post.metaDescription || post.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160)}</p>
            <Link to={`/blog/${post.id}`} aria-label={`Ler artigo: ${post.title}`} className="mt-auto min-h-12 inline-flex items-center justify-between gap-3 border border-secondary rounded-md px-4 py-3 text-secondary font-semibold hover:bg-secondary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Ler artigo <ArrowRight aria-hidden="true" className="w-5 h-5 shrink-0" /></Link>
          </div>
        </article>)}
      </div>
      <div className="text-center mt-10"><Link to="/blog" className="inline-flex min-h-12 items-center gap-3 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Ver todos os artigos <ArrowRight aria-hidden="true" className="w-5 h-5" /></Link></div>
    </div>
  </section>;
}
