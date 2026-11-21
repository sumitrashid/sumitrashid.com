import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

const names = ['perspectives', 'journal', 'travel', 'photography', 'culture'];

export async function GET(context) {
  const items = [];
  for (const name of names) {
    const entries = await getCollection(name, ({ data }) => !data.draft);
    for (const e of entries) {
      items.push({
        title: e.data.title,
        pubDate: e.data.date,
        description: e.data.summary,
        link: `/${name}/${e.id}/`,
      });
    }
  }
  items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
  return rss({
    title: site.name,
    description: site.description,
    site: context.site,
    items,
  });
}
