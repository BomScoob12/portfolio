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

- Edit `src/data/profile.json` for the name, biography, portrait, links, headline, and focus areas.
- Edit `src/data/projects.json` for project descriptions, image carousels, tags, and links. The count and year range are computed automatically.
- Edit `src/data/experiences.json` for roles and their home-page summaries. Set `current: true` for the role shown in the hero; keep only one current role for that summary. List entries in the order they should appear.
- Edit `src/data/site.json` for page headings, introductions, navigation, footer, SEO descriptions, and the beta label.
- `src/data/portfolio.ts` contains types and imports, not editorial content. TypeScript validates the imported JSON structure during checks/builds. JSON content is bundled at build time; updates require a rebuild/deployment, not a database or API.
- Place a portrait in `public/images/` and set `profile.portrait` to `/images/your-photo.jpg`.
- Replace the project image paths, alternative text, and captions in `projects.json` with real screenshots. The included SVGs are original illustrative templates, not product screenshots. Set `isTemplate` to `false` on real images to remove their template labels. An empty `images` array displays an image-coming-soon state.
- Add confirmed GitHub or demo URLs to each project's `links` array. External links open in a new tab; missing URLs are not fabricated.
- The current ttb bank role has no detailed responsibilities because only its title and dates were supplied.
- Theme variables and global defaults are in `src/app/globals.css`. Page and component styles live in adjacent `.module.css` files; reusable styles are in `src/styles/shared.module.css`.
- Follow [the design guidelines](DESIGN_GUIDELINES.md) for colors, typography, spacing, responsive layouts, accessibility, and CSS Modules conventions.

## Pages

- `/`: Introduction, replaceable portrait, selected work, and experience highlights.
- `/projects`: Alternating text/media rows and independent, keyboard-accessible manual carousels.
- `/experiences`: Four roles in a responsive timeline, with a link to LinkedIn.

## Before publishing

Replace portrait and project templates, confirm all copy and dates, and add any public repository links. Set `SITE_URL` to the real production domain in your host environment (see `.env.example`) to override social-preview URLs. On Vercel, the project production URL is used automatically; locally the default is `http://localhost:3000`. Add canonical URLs and a sitemap once the production domain is confirmed. Social preview artwork is generated from profile JSON in `src/app/opengraph-image.tsx`. No analytics, credentials, or contact-form service is required.

Deploy to a host that supports Next.js. This project has not been configured as a static export.

## Branches and Vercel deployment

- `main` is the publishing branch. Merge reviewed work into it to release.
- `development` is the working branch. Make and test changes here, then open a pull request into `main`.
- Import `BomScoob12/portfolio` into Vercel with the Next.js preset, repository root `./`, and `main` as the Production Branch. Git integration must be connected in Vercel for automatic deployments; the repository configuration alone does not connect the account.
- With that integration enabled, pushes to `development` create Preview deployments and pushes/merges to `main` create Production deployments. Direct pushes to `main` also deploy; merge-only releases require a GitHub branch rule, which is not configured by this repository.
- `vercel.json` runs lint and type checks before the production build. No Vercel token or custom GitHub Action is required for native Git integration.
- The public beta badge is controlled by `site.json` and stays consistent across branches.

```sh
git switch development
# Edit JSON or components, then verify locally.
npm run lint
npm run typecheck
npm run build
git add <changed-files>
git commit -m "Update portfolio content"
git push origin development
# Open and merge a pull request from development into main.
```
