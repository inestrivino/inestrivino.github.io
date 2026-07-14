# Página personal & Blog

![Deployment](https://github.com/inestrivino/inestrivino.github.io/actions/workflows/deploy.yml/badge.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Vea la página desplegada: [**inestrivino.github.io**](https://inestrivino.github.io)

**Click the badge below to read this file in english:** <br>
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/inestrivino/inestrivino.github.io/blob/main/README.en.md)

## Funcionalidades

- Páginas: Inicio, Sobre mí, proyectos y blog.
- Carga automática de ficheros markdown como proyectos o posts gracias a las [Content Collections](https://docs.astro.build/en/guides/content-collections/) de Astro, simplificando enormemente la futura adición de contenido a la página.
- Cambio de tema (claro / oscuro).
- Efectos de sonido utilizando [Howler.js](https://howlerjs.com/).
- Feed RSS para suscribirse al blog o a los proyectos, utilizando [la librería RSS de Astro](https://docs.astro.build/en/recipes/rss/).
- Internacionalización del contenido, enlaces y feeds de la página.
- Estructura en componentes Astro altamente reutilizables.

## Stack tecnológico usado

- Diseño: Figma
- Base: Astro
- Estilos: Tailwind CSS
- Scripts: Typescript
- Sonidos: Howler.js

## Estructura del proyecto

```plaintext
├── .github/
    └── workflows/   # Contiene workflows CI/CD de la aplicación
├── src/
│   ├── components/  # Componentes de UI reusables
        └── pages/   # Páginas de la web reusables para cada idioma
│   ├── layouts/     # Estructura HTML básica para todas las páginas
│   ├── pages/       # Routing: Páginas, feeds RSS
    ├── styles/      # Estilos CSS específicos
    ├── i18n/        # Internacionalización: Herramientas y texto
    ├── utils/       # Otras herramientas útiles en el desarrollo del proyecto
│   ├── content/     # Archivos Markdown para la creación de posts y proyectos
        ├── blog/
        └── projects/
    └── content.config.mjs # Configuración para el manejo de colecciones
├── public/          # Fuentes, imágenes, iconos, sonidos
└── astro.config.mjs # Configuración Astro para el proyecto
```

## Instalación local

Dependencias:

- Se necesita tener instalado [NPM](https://www.npmjs.com/).

1. Comience clonando el repositorio

```bash
git clone https://github.com/inestrivino/inestrivino.github.io.git
cd /inestrivino.github.io
```

2. Desde la raíz del proyecto ejecute el siguiente comando

```bash
npm install
```

3. Despliegue el servidor de desarrollo

```bash
npm run dev
```

4. Cuando haya terminado de lanzarse el servidor, dirígase a `localhost:3000` en su navegador, y podrá ver la página web.

## Despliegue y configuración

En `/.github/workflow/deploy.yml` podrá encontrar el archivo de despliegue de la página. Consta de dos pasos:

1. Construcción del proyecto mediante `npm run build`
2. Despliegue del proyecto construido a Github Pages

## Licencia y créditos

Los efectos de sonido usados en esta página provienen de [Kenney.nl](https://kenney.nl/assets/category:Audio), específicamente el paquete Digital Audio.

Los iconos usados en esta página son los [Lucide Icons](https://lucide.dev/icons/).

Las imágenes usadas en esta página son reconstrucciones de imágenes externas usando ASCII y puestas sobre un fondo de color.
