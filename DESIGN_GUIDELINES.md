# Portfolio design guidelines

The portfolio uses a dark navy background, soft blue accents, restrained borders, and generous spacing to make the owner's work easy to scan. Keep the three-page structure: an introduction and selected work on Home, detailed project rows on Projects, and a career timeline on Experiences.

## Styling ownership

| Location                              | Responsibility                                                                                               |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `src/app/globals.css`                 | Theme variables, reset, element defaults, focus indicators, and reduced-motion behavior                      |
| `src/styles/shared.module.css`        | Reusable containers, labels, buttons, links, tags, company marks, page introductions, and media placeholders |
| `src/app/page.module.css`             | Home hero, portrait, project cards, and experience previews                                                  |
| `src/app/projects/page.module.css`    | Project row layout and project details                                                                       |
| `src/app/experiences/page.module.css` | Career timeline and role content                                                                             |
| `src/app/layout.module.css`           | Skip-to-content link                                                                                         |
| `src/components/*.module.css`         | Navigation, footer, and carousel styles beside their components                                              |

Use camelCase class names and import a module as `styles`. Keep responsive rules in the module that owns the component. Keep bare element selectors in global CSS; qualify component descendants with a local class, such as `.projectDetails h2`.

Reuse shared styles with CSS Modules composition. Composition attaches both the local class and the shared class, so a component can scope contextual adjustments without reaching into another module's generated class names:

```css
/* example.module.css */
.button {
  composes: button from "../styles/shared.module.css";
}

.buttonPrimary {
  composes: buttonPrimary from "../styles/shared.module.css";
}
```

```tsx
import styles from "./example.module.css";

<a className={`${styles.button} ${styles.buttonPrimary}`} href="/projects">
  View projects
</a>;
```

Adjust the relative import for the file's location. Apply the base class together with a variant (`button` + `buttonPrimary`, `companyMark` + `large`). A consumer that needs no contextual overrides, such as the 404 page, can import the shared module directly. Do not add global utility classes, duplicate shared declarations, or select another component's private classes. The Projects page owns the order of its two direct children; the carousel owns its contents.

## Color

These theme variables are defined in `globals.css`. Use them for their semantic role before introducing another color.

| Token       | Value     | Use                                     |
| ----------- | --------- | --------------------------------------- |
| `--bg`      | `#080e1b` | Page background                         |
| `--surface` | `#101929` | Default raised surface for new elements |
| `--text`    | `#edf2fb` | Primary text                            |
| `--muted`   | `#9aa9bf` | Supporting copy and metadata            |
| `--blue`    | `#82adff` | Accent text and keyboard focus          |
| `--line`    | `#233047` | Quiet section separators                |

Existing buttons use `#88b2ff` with dark `#081122` text and a `#aac8ff` hover fill. Preserve these shared states. Use navy gradients and translucent borders sparingly for media frames; keep long-form copy on a plain background. The warm university mark is a contextual exception, not a second brand palette.

## Typography

- **Display:** locally hosted Manrope through `--display`; headings and wordmark.
- **Body:** locally hosted DM Sans through `--body`; paragraphs, navigation, and controls.
- **Base:** 15px with 1.7 line height. Most descriptive copy uses 13–15px and 1.7–1.85 line height.
- **Hero title:** 70px on desktop, 80px at wide widths, 57px on tablet, and 64px on mobile. The short nickname is deliberate; recheck wrapping when changing it.
- **Inner-page title:** 64px on desktop and 44px on mobile.
- **Section heading:** 31px by default, with contextual overrides for the hero, cards, and timeline.
- **Labels:** compact uppercase text with expanded tracking. Existing decorative labels are 7–10px; do not use that scale for new essential instructions or body content.

Use one `h1` per page and ordered `h2`/`h3` sections. Keep headlines brief and supporting copy muted. Keep font loading in the root layout, with `display: "swap"`.

## Layout and spacing

| Viewport         | Container and behavior                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------- |
| Above 1050px     | Maximum width 1180px, at least 50px side gutters; multi-column hero, cards, and project rows |
| 1500px and above | Maximum width 1260px, at least 70px side gutters; larger hero spacing                        |
| 761–1050px       | 32px side gutters; tighter gaps while retaining columns                                      |
| 760px and below  | 20px side gutters; stacked hero, cards, project rows, and timeline; collapsible navigation   |

For new layouts, favor a 4px spacing rhythm: 8, 12, 16, 24, 32, 48, and 64px. Existing optical adjustments remain intentional. Standard home sections use 76px vertical padding on desktop and 49px on mobile; project rows use 74px and 43px. Keep borders subtle and media corners around 7–8px, with controls around 4–6px.

Project rows alternate text and media on desktop and show text before media on mobile. Keep the source order readable. Avoid fixed text heights and allow tags, metadata, and long titles to wrap. Recheck at 320px, 390px, 768px, 1280px, and 1536px when changing layouts.

## Components and interaction

- **Navigation:** show the active page through its visual marker and `aria-current`. On mobile, the Menu/Close button controls the navigation with `aria-expanded` and `aria-controls`.
- **Actions:** use the filled primary button for the main action, the outline variant for supporting contact, and text links for lower emphasis. Use links for navigation and buttons for state changes.
- **Project cards:** preserve image dimensions and a brief title, category, year, and technology tags. Hover zoom is a subtle enhancement; the link must remain usable with a keyboard.
- **Carousel:** manual previous/next controls, accessible names, polite caption announcements, and disabled controls when only one image exists. Do not add autoplay by default. Keep the empty-media message when images are absent.
- **Timeline:** reserve the status dot and Current role badge for the current entry. Company variants use the shared mark styles.
- **Motion:** existing button/link transitions last 0.2s and card-image zoom lasts 0.4s. The global reduced-motion rule disables transitions and animations and turns off smooth scrolling.

## Accessibility and content

Preserve the skip link, visible 2px focus outline, semantic landmarks, descriptive image alternatives, and screen-reader text for links opening a new tab. Do not communicate state through color alone. For new or changed text, check contrast against its actual background: target 4.5:1 for normal text and 3:1 for large text. Aim for 44px touch targets for new controls. These are review requirements, not a claim that the existing site has passed a full accessibility audit.

Keep content in `src/data/*.json`; `portfolio.ts` supplies its types. Use real project responsibilities and confirmed links. Label illustrative screenshots and portrait placeholders clearly, and remove template labels only when real assets replace them. Reserve image space with dimensions or an aspect ratio and keep responsive `sizes` aligned with the layout. The generated social preview in `opengraph-image.tsx` uses inline rendering styles; keep its colors and type hierarchy consistent when changing the theme.

## Review a design change

1. Update the owning module and reuse shared primitives and theme variables.
2. Check desktop and mobile layouts, long copy, keyboard focus, menu states, carousel controls, and reduced motion.
3. Navigate between all three pages and a missing route to catch stylesheet ordering or leaking styles.
4. Run `npm run lint`, `npm run typecheck`, and `npm run build`. Check formatting on the edited files with Prettier.
5. Review the production build in a browser; development and production CSS ordering can differ. Update this guide when the design conventions change.
