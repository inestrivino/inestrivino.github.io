---
title: Mi primera experiencia con Astro
description: Un análisis sobre el desarrollo de mi primer proyecto con Astro, problemas que encontré, soluciones, y mi opinión de la tecnología en cuestión.
date: 09-09-2026
---

## ¿Por qué Astro?

Recientemente empecé a buscar prácticas en empresa con motivo de mi máster, pero sé que en el próximo año deberé buscar también un empleo a largo plazo. Debido a esta razón quería crear una página "portfolio", es decir, un único punto de acceso a toda la información relevante sobre mí en un ámbito laboral (CV, proyectos, etc) que esté bajo mi propio control y sea personalizable.

Al abordar el proyecto, me di cuenta de que había cuatro cosas de especial importancia para mi caso:

1. Mi página debe poder visualizarse en varios idiomas, ya que soy políglota y no descarto trabajar en el extranjero.
2. Debe tener un blog y una colección de proyectos.
3. Debe estar estructurada de tal manera que deba tocar la menor cantidad de HTML posible. No quiero tener que crear un nuevo HTML por cada post de blog o cuando he hecho un nuevo proyecto, pues esto retrasaría los despliegues, ni quiero tener cuatro versiones de la misma página en idiomas diferentes, pues esto dificultaría la mantenibilidad.
4. Debo poder albergarla en GitHub Pages, ya que no tengo un dominio ni servidor propio.

Por estas razones, decidí que debía usar un "generador estático". Estos generadores suelen incluir funcionalidades que simplifican la generación de blogs a partir de markdown y herramientas de internacionalización. Existe una gran lista de opciones en el mercado, pero yo investigué solamente dos: Jekyll y Astro.

Originalmente, como mi página web está pensada para presentarme a prácticas, posiblemente en investigación, decidí optar por [Jekyll](https://jekyllrb.com/) con la plantilla [al-folio](https://github.com/alshedivat/al-folio) que había visto en páginas de investigadores. Entendí que al estar dirigida a académicos sería fácil de lanzar y personalizar.
Mi experiencia fue muy distinta. Pude lanzar la aplicación sin problemas, pero personalizarla a los niveles que yo deseaba parecía una tarea muy compleja. La plantilla venía con mucho *bloat*: instrucciones para IA, *placeholders*, formas de lanzarla que no servían a mi caso de uso... Además, yo no poseo experiencia con Ruby, lo que me dificultaba leer el código fuente. Tras tres días de eliminar archivo tras archivo, leer documentación, y manejar errores, me frustré y lo dejé. Jekyll está en todas partes y eso me había dado una falsa sensación de facilidad, pero en realidad iba a pasar más tiempo configurando que si crease un proyecto de cero.

Por ello, empecé la búsqueda de un generador estático que se adaptase bien a mis necesidades: documentación sencilla, facilidad de crear proyectos sin una plantilla, y escrito en un lenguaje con el que esté familiarizada. Así es como encontré Astro. Dispongo de experiencia con NPM y Node.js, además de que Astro tiene su propio sistema de onboarding que te ayuda a crear un proyecto cuando lo instalas por primera vez, y una documentación simple, navegable y unificada. Resultó ser la elección obvia para mi caso.

Así, me instalé Astro y usando su *wizard* de onboarding creé el proyecto vacío que debía convertirse en mi página portfolio sin mayor problema.

## Diseñar una página web

Una vez había tomado la decisión de qué tecnología me ayudaría a realizar todo lo "invisible" de mi página, debía elegir un diseño. Consideré hacer un diseño básico y comercial, ya que esto es más aceptable para los gerentes de contratación. Sin embargo, todavía soy joven y deseaba poder expresar personalidad y abordar el problema de un diseño "diferente", por lo que finalmente me decanté por un estilo "neo-brutalista" o "de terminal". Solo habría dos colores principales, una fuente de letra retro, y un efecto de pantalla CRT.

Con esta inspiración en mente, realicé mis primeros prototipos del diseño en Figma:

![Diseño del inicio de mi página](/img/content/Inicio.png)
![Diseño de la página de proyectos de mi página](/img/content/Proyectos.png)
![Diseño del blog de mi página](/img/content/blog.png)

Si bien este diseño es completamente posible sin ningún tipo de librería o marco externo, no tenía mucho interés en reinventar la rueda con CSS para estilizar cada elemento, además de la complejidad que eso añadiría a las estructuras de mis archivos CSS.
Por ello investigué un poco mis opciones, ya que aunque tenía experiencia con Bootstrap, no me pareció la elección lógica para este proyecto. Es una librería que deja poco espacio a la personalización extensiva, además de pesada. 
Descubrí que [Tailwind CSS](https://tailwindcss.com/) sin embargo trae solo utilidades para aligerar el proceso de estilizado, y que su instalación en Astro es directa y simple. También la elegí porque había oído hablar bastante de ella y me pareció una buena oportunidad para aprender a usarla.

Por su simplicidad para instalarse en un proyecto Astro elegí los [iconos Lucide](https://lucide.dev/).

Decidí también que me gustaría que mi página tuviese efectos de sonido. Esta es una funcionalidad que he admirado en otras páginas, como la de la artista y desarrolladora *frontend* [shar](https://www.sharyap.com/). No tengo experiencia con el manejo de audio en aplicaciones web, por lo que me guié por las decisiones de shar y la comunidad en general ("¿qué librerías son más populares?") y me decanté por la librería [Howler.js](https://howlerjs.com/) para el manejo de sonido. En cuanto a los sonidos en sí, [Kenney.nl](https://kenney.nl/assets/category:Audio) dispone de efectos de sonido con una licencia Creative Commons, por lo que puedo usarlos en mi página sin tener que preocuparme por problemas de derechos de autor.

Con el diseño base elegido y las tecnologías para lograrlo preparadas, empecé a prototipar, programar y dar forma a la página. Rápidamente dispuse de una serie de páginas que se veían bien, y poco después implementé el silenciado de sonido (con un botón en la esquina superior del menú de navegación) y el cambio de tema (ídem).

Durante todo este proceso, no fue solo Tailwind CSS lo que me ayudó a dar a la página forma rápidamente, sino también la estructura en componentes de Astro, que me recordó a la de React. Podía definir un tipo de botón en un componente en poco tiempo y convertirlo en su propio "componente HTML". Esto me ahorró mucho tiempo e hizo la experiencia de desarrollo mucho más disfrutable (además de aportar a la mantenibilidad a largo plazo, por supuesto).

## Internacionalización

Astro cuenta con sus propias herramientas de [internacionalización](https://docs.astro.build/en/guides/internationalization/), aunque no las usé extensivamente. Lo más importante que ofrecen las herramientas de Astro son `Astro.currentLang`, atributo que usaba para traducir automáticamente el texto de las páginas, y la función `getRelativeLocale(url)`. En general tuve que crear mis propias funciones de internacionalización.

Primero creé una carpeta `/i18n` en la que creé dos archivos: `utils.ts` y `ui.ts`. El primero tiene la definición de funciones útiles para la traducción automática de texto dado el idioma objetivo y el id del texto a traducir, para la traducción automática de rutas (por ejemplo: `/es/proyectos` debe convertirse en `/en/projects`, no en `/en/proyectos`) y la toma de contenido solo en el idioma requerido. El segundo tiene la lista de idiomas soportados, y todo le texto de la aplicación traducido en base a un id.

Este sistema es ideal para la mantenibilidad de una web que va a estar en varios idiomas porque permite la llamada estructura de *Páginas Proxy* o *Componente como página*. ¿A qué me refiero con esto? Si yo tengo una página en la que no hay ningún texto explícitamente ni en español ni en inglés, podría crear un archivo `/pages/en/index.astro` en el que esté el texto y otro `/pages/es/index.astro` donde esté el mismo texto copiado. Aunque esto no es en sí complejo, dificulta la mantenibilidad porque tenemos el código repetido en dos partes y si quiero cambiarlo en una deberé de acordarme de copiarlo y pegarlo en la otra versión, aunque la traducción sea automática, lo cual puede dar problemas a la larga, sobre todo si añadimos muchos idiomas.

En lugar de eso es mejor crear en la carpeta `/components` de Astro un subdirectorio `/pages` en la que meter el fichero `indexPage.astro`. Ahora, en `/pages/en/index.astro` solo pondremos la declaración del componente. Hacemos lo mismo con la página en español. El resultado de hacer esto es que si quiero cambiar algo en la estructura de la página me bastará con cambiarlo en el componente y el cambio pasará a verse siempre igual en cualquier versión sin tener que copiar y pegar.

Para añadir nuevo texto a una página basta con escribirlo tanto en español como en inglés (u otros idiomas si hay) en el archivo ui.ts con un mismo id. Después en la página pondremos `useTranslations("idDelTexto")` y ya estaría. Añadir un nuevo idioma también sería sencillo y consistiría en cambiar los ajustes de astro para añadir un nuevo local, añadir todas las traducciones que hagan falta en `ui.ts`, y después en `/pages` crear la carpeta con el prefijo del local y copiar y pegar todos los ficheros que existen en la carpeta de otro local (no varían entre ellos).

## Carga dinámica de posts y proyectos con Astro Collections

Como mencioné al principio del post, otra de las cosas que quería ser capaz de hacer con mi página era escribir posts para un blog y tener una colección de proyectos en exposición. Esta funcionalidad está implementada en Astro (como en muchos otros generadores estáticos) con el nombre de [Astro Collections](https://docs.astro.build/en/guides/content-collections/). Para crear una colección tuve que crear un archivo `content.config.ts` en el que definir su esquema (qué elementos componen a cada miembro) y el nombre de la carpeta donde encontrar cada tipo de colección. Estas carpetas deben existir en el directorio `/content` de `/src`. Una vez hecho eso tuve que crear también un HTML básico que renderizara los archivos markdown del blog. Y con eso, ya pude comenzar a escribir archivos markdown (cosa a la que estoy acostumbrada en mi día a día gracias a mi uso de Obsidian) para hacer nuevos posts o publicar proyectos.

## RSS y SEO

Llegando al final, tenía interés en poder implementar un *feed* RSS, ya que esta es una función que yo misma uso para "seguir" el contenido de gente que me interesa. Implementarlo también fue muy sencillo gracias a las propias herramientas de [Astro RSS](https://docs.astro.build/en/recipes/rss/). Solo tuve que hacer el *setup*, como se indica en la documentación, y por cada idioma soportado en /pages/ y tipo de colección crear un fichero `xml.js` correspondiente, que se auto-actualiza cuando se añade un nuevo elemento a la colección.

También quería que hubiese un cierto nivel de "descubribilidad" de mi sitio y de los feeds RSS (esto es bueno porque permite a los usuarios poner el enlace principal a mi página en su RSS reader de confianza y que les aparezcan todas las opciones automáticamente, en lugar de tener que buscarlo manualmente por mi página, copiar y pegarlo).
Por ello, siguiendo las instrucciones de la documentación de Astro, [creé un sitemap](https://docs.astro.build/es/guides/integrations-guide/sitemap/), es decir, una guía a la estructura de mi página para reastreadores web. Lo incluí en el `<head>` de mi layout y en el fichero `robots.txt`. También añadí al had metadatos, los iconos, elementos Open Graph, y los feeds RSS.

## Conclusión

Astro me resultó enormemente intuitivo y su documentación útil. Me gusta depender lo menos posible de LLMs en mis proyectos, por lo que es apreciado poder aprender o encontrar ejemplos de código de calidad por otros métodos.

La cantidad de tiempo dedicada a la página entre diseño, prototipado, desarrollo y comprobación fue de más o menos una semana, que era lo que deseaba gastar en ello, y estoy muy contenta con el resultado.

Por lo tanto, diría que volvería a usar Astro en el futuro sin dudarlo (incluso quizás hacer una plantilla para páginas que permita tanto a otros como a mí misma pasar todavía menos tiempo programando la página, y más tiempo haciendo los proyectos que contiene).
