import type { Article } from './blogCatalog';

// Date-only publication values are compared lexically after strict validation.
export function latestPublishedArticles(catalog: Record<string, Article>, asOf: string, limit = 6) {
  return Object.values(catalog)
    .filter((post) => {
      const date = post.dateISO;
      if (post.status === 'draft' || !date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
      const parsed = new Date(`${date}T00:00:00Z`);
      return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date && date <= asOf;
    })
    .sort((a, b) => b.dateISO!.localeCompare(a.dateISO!) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0))
    .slice(0, limit);
}
