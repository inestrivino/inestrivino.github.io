import rss from '@astrojs/rss';
import {
    getLangFromUrl,
    useTranslations,
    getLocalizedBlog,
    getRssLang,
} from "../../i18n/utils";

export async function GET(context) {
    const url = new URL(context.request.url);
    const t = useTranslations(url);

    const currentLang = getLangFromUrl(url);
    const rssLang = getRssLang(currentLang);

    // we obtain the posts based on the current language
    const posts = await getLocalizedBlog(currentLang);

    return rss({
        title: t('rss.blog.title'),
        description: t('rss.blog.description'),
        site: context.site,
        items: posts.map((post) => {
            const cleanSlug = post.id;

            return {
                title: post.data.title,
                pubDate: post.data.date,
                description: post.data.description,
                link: `${cleanSlug}/`,
            };
        }),
        customData: `<language>${rssLang}</language>`,
    });
}