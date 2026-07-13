import rss from '@astrojs/rss';
import {
    getLangFromUrl,
    useTranslations,
    getLocalizedProjects,
    getRssLang,
} from "../../i18n/utils"; 

export async function GET(context) {
    const url = new URL(context.request.url);
    const t = useTranslations(url);

    const currentLang = getLangFromUrl(url);
    const rssLang = getRssLang(currentLang);
    const projects = await getLocalizedProjects(currentLang);

    return rss({
        title: t('rss.projects.title'),
        description: t('rss.projects.description'),
        site: context.site,
        items: projects.map((project) => {
            const cleanSlug = project.id;

            return {
                title: project.data.title,
                pubDate: project.data.date,
                description: project.data.description,
                link: `${cleanSlug}/`,
            };
        }),
        customData: `<language>${rssLang}</language>`,
    });
}