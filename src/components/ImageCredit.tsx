import type { Article } from '@/data/blogCatalog';

export default function ImageCredit({ credit }: { credit?: Article['imageCredit'] }) {
  if (!credit) return null;
  return <p className="text-sm text-muted-foreground leading-relaxed mb-4">
    {credit.kind === 'illustration' ? 'Imagem ilustrativa — ' : 'Foto: '}
    {credit.source ? <a href={credit.source} target="_blank" rel="noopener noreferrer" className="underline" onClick={e => e.stopPropagation()}>{credit.author}</a> : credit.author}.
    {credit.license && <> <a href={credit.license} target="_blank" rel="noopener noreferrer" className="underline" onClick={e => e.stopPropagation()}>{credit.licenseLabel || 'CC BY-SA 4.0'}</a>.</>}
    {' '}{credit.changes}
  </p>;
}
