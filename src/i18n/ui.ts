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

    'art.alt': 'Arte Ascii decorativo',

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

    'about.title': 'Inés Triviño - Sobre mí',
    'about.description': 'Página para informarse más sobre mi y mis habilidades informáticas',
    'about.titulo': 'Sobre mí',
    'about.technologies': 'Tecnologías, herramientas e idiomas',
    'about.parrafo1':
      '¡Hola! Soy Inés, ingeniera de software con un perfil versátil que complementa mi conocimiento técnico con mi formación actual en Letras Digitales(UCM).Mi objetivo es fusionar ambas disciplinas para desarrollar software robusto y de calidad aplicado al ámbito cultural y la investigación.',
    'about.parrafo2':
      'En cada diseño e implementación priorizo las arquitecturas limpias, la mantenibilidad y la calidad del código. Ante cualquier reto técnico, investigo a fondo y exploro diferentes metodologías para dar con la solución óptima, asegurándome siempre de plasmar mi línea de pensamiento en una documentación clara y detallada.',
    'about.parrafo3':
      'Cuando me alejo del ordenador, me encontrarás haciendo deporte, leyendo o disfrutando de algún videojuego.',

    'rss.blog.title': 'Blog de Inés',
    'rss.blog.description': 'Pensamientos, lecturas, cosas que aprendo, y otros temas relevantes',
    'rss.projects.title': 'Projectos de Inés',
    'rss.projects.description': 'Posts sobre mis proyectos',
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

    'art.alt': 'Decorative Ascii art',

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

    'error.title': '404 - Route not found',
    'error.description': '404 error',
    'error.error': 'in the solicited memory location',
    'error.inicio': 'Return to Home',
    'error.mensaje': 'The route you are trying to inspect has been deleted or changed name.',

    'contenido.tabla': 'Contents table',
    'contenido.noSecciones': 'There are no sections',
    'contenido.noContenido': 'There is nothing here yet.',

    'about.title': 'Inés Triviño - About me',
    'about.description': 'Page to get more info on me and my tech abilities',
    'about.titulo': 'About me',
    'about.technologies': 'Tech, tools and languages',
    'about.parrafo1': "Hi! I'm Inés, a software engineer with a versatile profile that complements my technical background with my current studies in Digital Humanities (UCM). My goal is to merge both fields to develop robust, high-quality software applied to the cultural and research sectors.",

    'about.parrafo2': "In every design and implementation, I prioritize clean architecture, maintainability, and code quality. Faced with any technical challenge, I dive deep into research and explore different methodologies to find the optimal solution, always making sure to reflect my line of thought in clear and detailed documentation.",

    'about.parrafo3': "When I step away from the computer, you'll find me working out, reading, or playing video games.",

    'rss.blog.title': 'Inés Blog',
    'rss.blog.description': 'Posts on projects, learning, reading or other relevant topics',
    'rss.projects.title': 'Projects by Inés',
    'rss.projects.description': 'Posts about projects',
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