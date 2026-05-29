# thitiponginlom.github.io

Personal portfolio website built with [Nuxt 4](https://nuxt.com), deployed as a static
site to GitHub Pages. Supports English and Thai (i18n).

🔗 **Live:** https://thitiponginlom.github.io

## Tech Stack

- **[Nuxt 4](https://nuxt.com)** — Vue 3 framework (SPA mode, `ssr: false`)
- **[@nuxtjs/i18n](https://i18n.nuxtjs.org)** — internationalization (English / Thai)
- **[Bootstrap 5](https://getbootstrap.com)** + **[Sass](https://sass-lang.com)** — styling
- **[AOS](https://michalsnik.github.io/aos/)** — scroll animations
- **[Font Awesome](https://fontawesome.com)** — icons
- **[vue-easy-lightbox](https://github.com/XiongAmao/vue-easy-lightbox)** — image lightbox
- **[dayjs](https://day.js.org)** — date handling
- **ESLint + Prettier** — linting & formatting

## Project Structure

```
app/
├── components/      # Section components (Header, About, Experience, ...)
├── layouts/         # default.vue
├── pages/           # index.vue (single-page portfolio)
├── plugins/         # client-only plugins (AOS, Bootstrap, Font Awesome, lightbox)
├── lang/            # i18n locale files (en-US.json, th-TH.json)
└── assets/style/    # SCSS sources
nuxt.config.ts       # Nuxt configuration
eslint.config.js     # ESLint flat config (@nuxt/eslint-config + Prettier)
```

## Prerequisites

- **Node.js 22** (matches the CI runner)
- npm

## Getting Started

```bash
# install dependencies
npm install

# start the dev server at http://localhost:3000
npm run dev
```

## Scripts

| Command            | Description                                        |
| ------------------ | -------------------------------------------------- |
| `npm run dev`      | Start the development server                       |
| `npm run build`    | Build the application                              |
| `npm run generate` | Generate the static site into `.output/public`     |
| `npm run preview`  | Preview the production build locally               |
| `npm run lint`     | Run ESLint                                         |
| `npm run lint:fix` | Run ESLint and auto-fix                            |
| `npm run deploy`   | Publish `.output/public` to the `gh-pages` branch  |

## Deployment

Deployment is automated via **GitHub Actions**. Every push to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which:

1. Installs dependencies and runs `nuxt generate`
2. Copies `index.html` to `404.html` for SPA client-side routing
3. Publishes `.output/public` to the `gh-pages` branch

To deploy manually instead, run:

```bash
npm run generate
npm run deploy
```

## License

Personal portfolio — all rights reserved unless stated otherwise.
