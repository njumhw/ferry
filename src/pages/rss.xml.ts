import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const videos = await getCollection('videos');
  const sorted = videos.sort((a, b) =>
    b.data.metadata.published_at.localeCompare(a.data.metadata.published_at)
  );

  return rss({
    title: 'Ferry 渡',
    description: 'AI 访谈中文化',
    site: context.site!,
    items: sorted.map(video => ({
      title: video.data.metadata.title,
      description: video.data.summary_zh,
      link: `/v/${video.id}/`,
      pubDate: new Date(video.data.metadata.published_at),
    })),
  });
}
