import rss from '@astrojs/rss';
import {
  useTranslations,
  getLocalizedBlog,
  getRssLang,
  useLocalizedPath,
} from '../../i18n/utils';

const lang = 'es';

export async function GET(context) {
  const t = useTranslations(lang);
  const rssLang = getRssLang(lang);
  const translatePath = useLocalizedPath(lang);

  const posts = await getLocalizedBlog(lang);

  return rss({
    title: t('rss.blog.title'),
    description: t('rss.blog.description'),
    site: context.site,
    items: posts.map((post) => {
      const cleanSlug = post.id.replace(new RegExp(`^${lang}/`), '');

      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: translatePath(cleanSlug),
      };
    }),
    customData: `<language>${rssLang}</language>`,
  });
}