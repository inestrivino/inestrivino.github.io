# Personal Website & Blog

![Deployment](https://github.com/inestrivino/inestrivino.github.io/actions/workflows/deploy.yml/badge.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?&logo=tailwind-css&logoColor=white)

View the live site: [**inestrivino.github.io**](https://inestrivino.github.io)

**Haga clic en la insignia de abajo para leer este archivo en español:** <br>
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/inestrivino/inestrivino.github.io/blob/main/README.md)

## Features

- Pages: Home, About Me, Projects, and Blog.
- Automatic loading of Markdown files as projects or posts using Astro's [Content Collections](https://docs.astro.build/en/guides/content-collections/), greatly simplifying future content additions.
- Light/Dark theme toggle.
- Sound effects powered by [Howler.js](https://howlerjs.com/).
- RSS Feeds for subscribing to the blog or projects, built with [Astro's RSS library](https://docs.astro.build/en/recipes/rss/).
- Internationalization (i18n) for content, links, and feeds.
- Structured with highly reusable Astro components.

## Tech Stack

- Design: Figma
- Base: Astro
- Styling: Tailwind CSS
- Scripts: TypeScript
- Sounds: Howler.js

## Project Structure

```plaintext
├── .github/
    └── workflows/   # Contiene workflows CI/CD de la aplicación
├── src/
│   ├── components/  # Componentes de UI reusables
        └── pages/   # Páginas de la web reusables para cada idioma
│   ├── layouts/     # Estructura HTML básica para todas las páginas
│   ├── pages/       # Routing: Páginas, feeds RSS
        ├── es/    
        └── en/
    ├── styles/      # Estilos CSS específicos
    ├── i18n/        # Internacionalización: Herramientas y texto
    ├── utils/       # Otras herramientas útiles en el desarrollo del proyecto
│   ├── content/     # Archivos Markdown para la creación de posts y proyectos
        ├── blog/
            ├── es/   
            └── en/
        └── projects/
            ├── es/   
            └── en/
    └── content.config.mjs # Configuración para el manejo de colecciones
├── public/          # Fuentes, imágenes, iconos, sonidos
└── astro.config.mjs # Configuración Astro para el proyecto
```

## Local installation

Dependencies:

- [NPM](https://www.npmjs.com/) must be installed in your machine.

1. Begin by cloning the repository

```bash
git clone https://github.com/inestrivino/inestrivino.github.io.git
cd /inestrivino.github.io
```

2. From the repository's root, execute the following command

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

1. When the server has finished startup, go to `localhost:3000` in your navigator, and you will be able to see the page live.

## Deployment and configuration

In `/.github/workflow/deploy.yml` you will be able to find the document for the deployment workflow of the website. It has two steps:

1. Construction of the project through `npm run build`
2. Deployment of the built project into Github Pages

This workflow runs when a commit happens in the `main` branch.

## Licencia y créditos

All sound effects used in the website come from [Kenney.nl](https://kenney.nl/assets/category:Audio), specifically from the digital audio package.

The icons used in the website are [Lucide Icons](https://lucide.dev/icons/).

The images used in this website are ASCII reconstructions of external images placed over a color background.
