import { legacyBlogPosts } from './legacyBlogArticles';
import { blogArticles1 } from './blogArticles1';
import { blogArticles2 } from './blogArticles2';
import { blogArticles3 } from './blogArticles3';
import { blogArticles4 } from './blogArticles4';
import { blogArticles5 } from './blogArticles5';
import { editorialArticles } from './editorialArticles';
export interface Article { id:string; title:string; date:string; dateISO?:string; modifiedISO?:string; content:string; image:string; imageAlt?:string; metaDescription?:string; keywords?:string; category?:string; }
const previous: Record<string, Article> = {...legacyBlogPosts,...blogArticles1,...blogArticles2,...blogArticles3,...blogArticles4,...blogArticles5};
const revised = Object.fromEntries(Object.entries(editorialArticles).map(([id,post])=>[id,previous[id] ? {...post,date:previous[id].date,dateISO:previous[id].dateISO} : post]));
export const blogPosts: Record<string, Article> = {...previous,...revised};
// These pre-existing records had future publication dates at the audit on 2026-10-22.
// Keep their URLs and content, but do not present an unverified publication date.
for (const id of ['mirante-praia-vermelha-penha-vista','natal-2026-penha-balneario-camboriu-blumenau','festa-nacional-do-marisco-2027-penha-sc']) {
  blogPosts[id] = {...blogPosts[id], date:'Data de publicação em revisão', dateISO:undefined};
}
