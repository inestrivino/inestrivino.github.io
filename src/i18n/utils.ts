import { ui, defaultLang, routes } from './ui'; // Importamos routes
import { getCollection } from 'astro:content';
import { getRelativeLocaleUrl } from 'astro:i18n';

export type Locale = keyof typeof ui;
const supportedLocales = Object.keys(ui);
const localePrefixRegex = new RegExp(`^\\/(${supportedLocales.join('|')})(\\/|$)`);

//translates routes that appear in ui.ts/routes
function getTranslatedRoute(path: string, currentLang: Locale, targetLang: Locale): string {
  const cleanPath = path.replace(/^\/|\/$/g, '');
  
  if (!cleanPath) return '';

  const routeKey = (Object.keys(routes[currentLang]) as Array<keyof typeof routes[typeof currentLang]>).find(
    (key) => routes[currentLang][key] === cleanPath
  ) || cleanPath;

  if (routes[targetLang] && routeKey in routes[targetLang]) {
    return routes[targetLang][routeKey as keyof typeof routes[typeof targetLang]];
  }

  return cleanPath;
}

// RSS language detection
export function getRssLang(lang: Locale = defaultLang): string {
  return lang === 'en' ? 'en-us' : 'es-es';
}

// UI text translation
export function useTranslations(lang: Locale) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}

// Translate URLs depending on the language used
export function useLocalizedPath(currentLang: Locale) {
  return function translatePath(path: string, targetLang: Locale = currentLang) {
    let cleanPath = path.replace(/^\/|\/$/g, '');
    cleanPath = cleanPath.replace(new RegExp(`^${currentLang}/`), '');

    // Static assets (files with extensions like .pdf) bypass route translations
    // and must have their trailing slashes stripped.
    if (/\.[a-z0-9]+$/i.test(cleanPath)) {
      const url = getRelativeLocaleUrl(targetLang, cleanPath);
      return url.replace(/\/$/, '');
    }

    const translatedSegment = getTranslatedRoute(cleanPath, currentLang, targetLang);
    return getRelativeLocaleUrl(targetLang, translatedSegment);
  };
}

// Language selector
export function getTargetRef(currentUrl: URL, currentLang: Locale) {
  return function getHrefForLang(targetLang: Locale): string {
    if (targetLang === currentLang) return '#';
    const currentPath = currentUrl.pathname.replace(localePrefixRegex, '');
    const translatedPath = getTranslatedRoute(currentPath, currentLang, targetLang);
    return getRelativeLocaleUrl(targetLang, translatedPath);
  };
}

// Content collections filtering based on language
export async function getLocalizedBlog(lang: Locale = defaultLang) {
  const allPosts = await getCollection('blog');
  return allPosts
    .filter((post) => post.id.startsWith(`${lang}/`))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getLocalizedProjects(lang: Locale = defaultLang) {
  const allProjects = await getCollection('projects');
  return allProjects.filter((project) => project.id.startsWith(`${lang}/`));
}