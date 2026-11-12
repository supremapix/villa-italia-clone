import { Link, useLocation } from 'react-router-dom';
import { travelPlanning } from '@/data/travelPlanning';

/** Route-specific editorial help, rendered as text during SSR. No visibility promises. */
export default function TravelPlanning() {
  const { pathname } = useLocation();
  const guide = travelPlanning[pathname.replace(/\/$/, '') || '/'];
  if (!guide) return null;
  return (
    <section aria-labelledby="travel-planning-title" data-travel-planning className="border-t border-border bg-secondary/5 py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Planeje sua viagem</p>
        <h2 id="travel-planning-title" className="text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">{guide.title}</h2>
        <p className="text-lg leading-relaxed text-foreground/90 max-w-4xl">{guide.intro}</p>
        <div className="mt-7 rounded-xl border border-border bg-background p-5 sm:p-7">
          <h3 className="text-xl font-semibold text-foreground mb-3">{guide.question}</h3>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90">{guide.answer}</p>
        </div>
        <nav aria-label="Continue planejando sua viagem" className="mt-6 flex flex-wrap gap-3">
          {guide.links.map(([href,label]) => <Link key={href} to={href} className="inline-flex min-h-11 items-center rounded-lg border border-primary/25 bg-background px-4 py-2 text-primary font-medium underline underline-offset-4 hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{label}</Link>)}
        </nav>
        {guide.source && <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Para informações atualizadas, consulte: <a className="underline underline-offset-4" href={guide.source[0]}>{guide.source[1]}</a>.</p>}
        <p className="mt-3 text-sm text-muted-foreground">Orientações de planejamento acrescentadas em <time dateTime="2026-11-12">12/11/2026</time>. Serviços e condições devem ser confirmados com o responsável pela oferta.</p>
      </div>
    </section>
  );
}
