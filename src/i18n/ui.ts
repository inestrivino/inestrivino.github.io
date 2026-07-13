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

    'home.title': 'Inés Triviño | Inicio',
    'home.description': "Página portfolio de Inés Triviño",
    'home.proyectos_recientes': 'Proyectos recientes',
    'home.posts_recientes': 'Entradas recientes',
    'home.ver_todos': 'Ver todos',
    'home.descripcion':
      'Ingeniera de Software. Estudiante del Máster de Letras Digitales en la Universidad Complutense de Madrid. Disfruto diseñando e implementando proyectos complejos con los que poner al límite mis capacidades y aprender nuevas tecnologías.',

    'proyectos.title': 'Inés Triviño - Proyectos',
    'proyectos.description': 'Proyectos creados por Inés Triviño',
    'proyectos.titulo': 'Proyectos',

    'blog.title': 'Inés Triviño - Blog',
    'blog.description': 'Posts de mi blog',

    'error.title': '404 - Ruta no encontrada',
    'error.description': 'Error 404',
    'error.error': 'en la dirección de memoria solicitada',
    'error.inicio': 'Volver al inicio',
    'error.mensaje': 'La ruta que intentas inspeccionar ha sido eliminada o ha cambiado de nombre.',

    'contenido.tabla': 'Tabla de contenidos',
    'contenido.noSecciones': 'No hay secciones',
    'contenido.noContenido': 'Aún no hay nada aquí.',
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

    'home.title': 'Inés Triviño | Home',
    'home.description': "Portfolio website for Inés Triviño",
    'home.proyectos_recientes': 'Recent projects',
    'home.posts_recientes': 'Recent posts',
    'home.ver_todos': 'See all',
    'home.descripcion':
      'Software Engineer. Student of the Digital Humanities Masters program at the Universidad Complutense de Madrid. I enjoy designing and implementing complex projects that test the limits of my abilities and teach me new technologies.',

    'proyectos.title': 'Inés Triviño - Projects',
    'proyectos.description': 'Projects created by Inés Triviño',
    'proyectos.titulo': 'Projects',

    'blog.title': 'Inés Triviño - Blog',
    'blog.description': 'Posts from my blog',

    'error.error': 'in the solicited memory location',
    'error.inicio': 'Return to Home',
    'error.mensaje': 'The route you are trying to inspect has been deleted or changed name.',

    'contenido.tabla': 'Contents table',
    'contenido.noSecciones': 'There are no sections',
    'contenido.noContenido': 'There is nothing here yet.',
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