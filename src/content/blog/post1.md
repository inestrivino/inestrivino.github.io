---
title: "Construyendo mi rincón digital con Astro"
description: "Un vistazo a cómo he configurado este sitio web utilizando componentes dinámicos y Content Collections."
coverImage: "/images/blog-placeholder.jpg"
date: 2026-07-13
---

¡Hola mundo! Este es el primer artículo real que se carga de forma 100% dinámica en este sitio web.

### ¿Qué significa esto?
Gracias a las **Content Collections** de Astro, ya no tengo que editar el código HTML de la página de inicio cada vez que publico algo. Ahora ocurre esto entre bastidores:

1. Escribo este archivo Markdown.
2. Astro valida que incluya título, descripción, imagen y fecha.
3. El sistema de internacionalización detecta que está en la raíz y lo asigna al idioma por defecto.
4. La página de inicio lo ordena automáticamente para que aparezca arriba del todo.

Si quisieras probar la versión en inglés, bastaría con copiar este mismo archivo, cambiarle el título y meterlo en `src/content/blog/en/mi-primer-post.md`.