# Sarawit Kraukham — Portfolio

A dark blue, responsive portfolio built with Next.js App Router, React, TypeScript, and CSS. Includes home, projects, and experiences pages. Fonts and image templates are served locally.

## Run locally

Requires Node.js 20.9 or later (a current supported LTS release is recommended).

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Personalize

- Edit `src/data/portfolio.ts` for biography, project descriptions, links, and experience. Current content is based on the experience details supplied by Sarawit.
- Place a portrait in `public/images/` and set `profile.portrait` to `/images/your-photo.jpg`.
- Replace the project image paths, alternative text, and captions in the data file with real screenshots. The six included SVGs are original illustrative templates, not product screenshots. Remove template labels in `src/components/project-carousel.tsx` and `src/app/page.tsx` when real screenshots are supplied.
- Add confirmed GitHub or demo URLs to each project's `links` array. External links open in a new tab; missing URLs are not fabricated.
- The current ttb bank role has no detailed responsibilities because only its title and dates were supplied.
- Theme and responsive styles are in `src/app/globals.css`.

## Pages

- `/`: Introduction, replaceable portrait, selected work, and experience highlights.
- `/projects`: Alternating text/media rows and independent, keyboard-accessible manual carousels.
- `/experiences`: Four roles in a responsive timeline, with a link to LinkedIn.

## Before publishing

Replace portrait and project templates, confirm all copy and dates, and add any public repository links. Set `SITE_URL` to the real production domain in your host environment (see `.env.example`) for social-preview URLs; the local default is `http://localhost:3000`. Add canonical URLs and a sitemap once that domain is confirmed. Social preview artwork is generated in `src/app/opengraph-image.tsx`. No analytics, credentials, contact-form service, or deployment account is required to run this project.

Deploy to a host that supports Next.js. This project has not been configured as a static export.
