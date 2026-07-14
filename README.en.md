# Personal Website & Blog

![Deployment](https://github.com/inestrivino/inestrivino.github.io/actions/workflows/deploy.yml/badge.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

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
    └── workflows/   # Contains CI/CD workflows for the application
├── src/
│   ├── components/  # Reusable UI components
        └── pages/   # Reusable website pages for each language
│   ├── layouts/     # Base HTML layout for all pages
│   ├── pages/       # Routing: Pages and RSS feeds
    ├── styles/      # Specific CSS styles
    ├── i18n/        # Internationalization: Tools and translations
    ├── utils/       # Other helper utilities for development
│   ├── content/     # Markdown files for blog posts and projects
        ├── blog/
        └── projects/
    └── content.config.mjs # Configuration for content collection management
├── public/          # Fonts, images, icons, and audio files
└── astro.config.mjs # Astro configuration file