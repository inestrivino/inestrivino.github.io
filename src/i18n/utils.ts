import { ui, defaultLang, routes } from './ui';
type Locale = keyof typeof ui;
import { getCollection } from 'astro:content';

// Extracts the current language from the URL
export function getLangFromUrl(url: URL): Locale {
  const [, prefix] = url.pathname.split('/');
  if (prefix in ui) {
    return prefix as Locale;
  }
  return defaultLang;
}

export function getRssLang(lang: Locale = defaultLang): string {
  return lang === 'en' ? 'en-us' : 'es-es';
}

// Translates text keys based on URL
export function useTranslations(url: URL) {
  const lang = getLangFromUrl(url);

  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// Resolves the localized path name based on the target language dictionary
function getRouteTranslation(cleanPath: string, currentLang: Locale, targetLang: Locale): string {
  // Find the original key by looking up what the current URL segment means in English/Spanish/etc.
  const routeKey = Object.keys(routes[currentLang]).find(
    (key) => routes[currentLang][key as keyof typeof routes[typeof currentLang]] === cleanPath
  ) || cleanPath;

  // Grab the translation for the target language, or fallback to the base key
  if (routes[targetLang] && routeKey in routes[targetLang]) {
    return routes[targetLang][routeKey as keyof typeof routes[typeof targetLang]];
  }

  return routeKey;
}

// Hook to generate internal links for the current active language
export function useLocalizedPath(url: URL) {
  const currentLang = getLangFromUrl(url);

  return function translatePath(path: string, forceTargetLang?: Locale) {
    const targetLang = forceTargetLang || currentLang;
    const cleanPath = path.replace(/^\/|\/$/g, '');

    // Translate the path segment dynamically
    const targetPath = getRouteTranslation(cleanPath, currentLang, targetLang);

    // Build absolute URL string based on default routing rule
    if (targetLang === defaultLang) {
      return targetPath === '' ? '/' : `/${targetPath}`;
    }
    return `/${targetLang}${targetPath === '' ? '' : '/' + targetPath}`;
  };
}

// Universal language switcher for dropdown menu
export function getTargetRef(url: URL) {
  const currentLang = getLangFromUrl(url);
  const translatePath = useLocalizedPath(url);

  return function getHrefForLang(targetLang: Locale): string {
    if (targetLang === currentLang) return '#';

    const cleanPath = url.pathname.replace(/^\/|\/$/g, '');

    // If we are currently in a sub-language, drop the language prefix code from the segment lookup
    const pathWithoutLang = currentLang !== defaultLang
      ? cleanPath.replace(new RegExp(`^${currentLang}(\/|$)`), '')
      : cleanPath;

    // Use our enhanced translatePath, forcing it to calculate for the selected target language
    return translatePath(pathWithoutLang || '/', targetLang);
  };
}

// Helper to filter content by language based on its folder structure
export async function getLocalizedBlog(lang: Locale = defaultLang) {
  const allPosts = await getCollection('blog');

  return allPosts
    .filter((post) => {
      // If language is the default language, it shouldn't be inside any language subfolder
      if (lang === defaultLang) {
        return !post.id.includes('/');
      }
      // For other languages, the ID must start with the language code
      return post.id.startsWith(`${lang}/`);
    })
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()); // Newest first
}

export async function getLocalizedProjects(lang: Locale = defaultLang) {
  const allProjects = await getCollection('projects');

  return allProjects.filter((project) => {
    // If language is the default language, it shouldn't be inside any language subfolder
    if (lang === defaultLang) {
      return !project.id.includes('/');
    }
    // For other languages, the ID must start with the language code
    return project.id.startsWith(`${lang}/`);
  })
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()); // Newest first;
}