export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.inicio': 'inicio',
    'nav.sobremi': 'sobre mí',
    'nav.proyectos': 'proyectos',

    'tooltip.sonido': 'Sonido',
    'tooltip.idioma': 'Idioma',
    'tooltip.tema': 'Tema',
    'tooltip.menu': 'Menú',
    'tooltip.cv': 'VER CV',

    'home.proyectos_recientes': 'Proyectos recientes',
    'home.posts_recientes': 'Entradas recientes',
    'home.ver_todos': 'Ver todos',
    'home.descripcion':
      'Ingeniera de Software. Estudiante del Máster de Letras Digitales en la Universidad Complutense de Madrid. Disfruto diseñando e implementando proyectos complejos con los que poner al límite mis capacidades y aprender nuevas tecnologías.',

    'proyectos.titulo': 'Proyectos',

    'error.error': 'en la dirección de memoria solicitada',
    'error.inicio': 'Volver al inicio',
    'error.mensaje': 'La ruta que intentas inspeccionar ha sido eliminada o ha cambiado de nombre.',
  },
  en: {
    'nav.inicio': 'home',
    'nav.sobremi': 'about me',
    'nav.proyectos': 'projects',

    'tooltip.sonido': 'Sound',
    'tooltip.idioma': 'Language',
    'tooltip.tema': 'Theme',
    'tooltip.menu': 'Menu',
    'tooltip.cv': 'READ CV',

    'home.proyectos_recientes': 'Recent projects',
    'home.posts_recientes': 'Recent posts',
    'home.ver_todos': 'See all',
    'home.descripcion':
      'Software Engineer. Student of the Digital Humanities Masters program at the Universidad Complutense de Madrid. I enjoy designing and implementing complex projects that test the limits of my abilities and teach me new technologies.',
    
    'proyectos.titulo': 'Projects',

    'error.error': 'in the solicited memory location',
    'error.inicio': 'Return to Home',
    'error.mensaje': 'The route you are trying to inspect has been deleted or changed name.',
  },
} as const;

export const routes = {
  es: {
    'sobremi': 'sobremi',
    'proyectos': 'proyectos',
  },
  en: {
    'sobremi': 'about',
    'proyectos': 'projects',
  }
} as const;