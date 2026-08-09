import rss from '@astrojs/rss';
import {
  useTranslations,
  getLocalizedProjects,
  getRssLang,
} from '../../i18n/utils';

const lang = 'es';

export async function GET(context) {
  const t = useTranslations(lang);
  const rssLang = getRssLang(lang);

  const projects = await getLocalizedProjects(lang);

  return rss({
    title: t('rss.projects.title'),
    description: t('rss.projects.description'),
    site: context.site,
    items: projects.map((project) => ({
      title: project.data.title,
      pubDate: project.data.date || new Date(),
      description: project.data.description,
      link: project.data.url,
    })),
    customData: `<language>${rssLang}</language>`,
  });
}