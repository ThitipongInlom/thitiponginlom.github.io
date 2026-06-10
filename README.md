# thitiponginlom.github.io

Personal portfolio / résumé website built with [Nuxt 4](https://nuxt.com), rendered as a
static SPA and deployed to GitHub Pages. Fully bilingual — English and Thai (i18n).

🔗 **Live:** https://thitiponginlom.github.io

## Features

- **Single-page résumé** — About, Experience, Education, and Skills sections on one page
  with anchor navigation and scroll animations.
- **Bilingual (EN / TH)** — instant language switch with no page reload; Thai content
  includes Buddhist-era years and Thai month names.
- **Dynamic age** — computed from a birth date with [dayjs](https://day.js.org) instead of a
  hardcoded number, so it never goes stale (see [`About.vue`](app/components/About.vue)).
- **Data-driven skills** — skills are listed in [`skills.json`](app/assets/database/skills.json)
  with a start date each; the years/months of experience ("`6 yr 5 mo`" / "`6 ปี 5 เดือน`")
  are calculated live and sorted by seniority (see [`Skills.vue`](app/components/Skills.vue)).
- **Certificate lightbox** — education certificates open in a zoomable
  [vue-easy-lightbox](https://github.com/XiongAmao/vue-easy-lightbox) modal.
- **Responsive** — mobile nav toggle, back-to-top button, and a responsive skills grid.

## Tech Stack

- **[Nuxt 4](https://nuxt.com)** — Vue 3 framework (SPA mode, `ssr: false`)
- **[@nuxtjs/i18n](https://i18n.nuxtjs.org)** — internationalization (English / Thai)
- **[Bootstrap 5](https://getbootstrap.com)** + **[Sass](https://sass-lang.com)** — styling
- **[AOS](https://michalsnik.github.io/aos/)** — scroll animations
- **[Font Awesome](https://fontawesome.com)** — icons
- **[vue-easy-lightbox](https://github.com/XiongAmao/vue-easy-lightbox)** — image lightbox
- **[dayjs](https://day.js.org)** — age & experience-duration calculation (with Thai locale)
- **ESLint + Prettier** — linting & formatting

## Project Structure

```
app/
├── components/              # Section components
│   ├── Header.vue           #   profile, social links, language switcher, mobile nav
│   ├── About.vue            #   intro + dynamic age (dayjs)
│   ├── Experience.vue       #   work history timeline
│   ├── Education.vue        #   education + certificate lightbox trigger
│   ├── Skills.vue           #   skills grid with live experience duration
│   ├── Footer.vue           #   back-to-top button
│   └── ModalShowImage.vue   #   lightbox modal wrapper
├── pages/index.vue          # single-page portfolio
├── layouts/default.vue      # base layout
├── plugins/                 # client-only plugins (AOS, Bootstrap, Font Awesome, lightbox)
├── lang/                    # i18n locale files (en-US.json, th-TH.json)
├── assets/
│   ├── database/skills.json #   skills data source (name + dateStart)
│   └── style/               #   SCSS sources (components/ partials + main.scss)
public/image/                # static images (profile, skill icons, flags, certificate)
nuxt.config.ts               # Nuxt configuration (i18n, SPA, SCSS, assets dir)
eslint.config.js             # ESLint flat config (@nuxt/eslint-config + Prettier)
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

## Editing Content

Most content is data- and translation-driven — no component edits needed for routine updates:

- **Text & translations** — edit [`app/lang/en-US.json`](app/lang/en-US.json) and
  [`app/lang/th-TH.json`](app/lang/th-TH.json). Keep keys in sync between both files.
- **Profile & age** — `general.profile.*` in the locale files. `birthDate`
  (`YYYY-MM-DD`) drives the auto-calculated age.
- **Skills** — add an entry to [`app/assets/database/skills.json`](app/assets/database/skills.json)
  with a `name` and `dateStart` (`YYYY-MM-DD`). Drop a matching icon at
  `public/image/skills/<name-lowercased>.png`; the experience duration is computed
  automatically.

## Deployment

Deployment is automated via **GitHub Actions**. Every push to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which:

1. Sets up Node.js 22 and installs dependencies
2. Runs `nuxt generate` to build the static site
3. Copies `index.html` to `404.html` for SPA client-side routing
4. Publishes `.output/public` to the `gh-pages` branch via
   [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages)

To deploy manually instead, run:

```bash
npm run generate
npm run deploy
```

## License

Personal portfolio — all rights reserved unless stated otherwise.
