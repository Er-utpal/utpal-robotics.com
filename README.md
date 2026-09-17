# Utpal Robotics

Marketing site for Utpal Robotics — robotics kits, drones, quadruped platforms,
learning material and engineering services.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4. Every page is
statically prerendered and deploys to Vercel without configuration.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | Purpose                              |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Development server                   |
| `npm run build`     | Production build                     |
| `npm run start`     | Serve the production build           |
| `npm run typecheck` | TypeScript, no emit                  |
| `npm run lint`      | Next.js lint                         |

## Structure

```
app/                     One folder per route, plus layout, 404 and icons
  page.tsx               Home
  products/              Catalogue, then drones / quadrupeds / kits
  projects/  learn/  services/  about/  contact/
  globals.css            Design tokens, type scale, layout + motion utilities
  icon.png               Favicon, generated from the logo
  opengraph-image.jpg    Social preview, picked up automatically by Next.js

components/              Navbar, footer, heroes, cards, CTA, video, reveal
lib/
  site.ts                Company details, contact address, navigation
  assets.ts              Every image and video, declared once
  content.ts             Products, projects, subject areas, services

public/resources/        Web-optimised media that the site actually serves
resources/               Original masters (not served; raw video is gitignored)
```

## Changing the content

Three files cover nearly everything.

**Images and video — `lib/assets.ts`.** Each asset is declared once with its
path, alt text and dimensions. To swap a placeholder for real photography, put
the new file in `public/resources/` and update that entry. Nothing else needs
touching.

Set `onWhite: true` for product shots taken against a white backdrop. Those are
rendered with `mix-blend-mode: multiply` so they sit on light surfaces with no
visible box — which also means they should never be placed on a dark section.

**Products, projects, subject areas and services — `lib/content.ts`.** Typed
arrays; add an entry and it appears in the relevant layouts. Projects and
domains accept `image: null` and fall back to a dark statement panel, so an
entry without a photograph still looks deliberate.

**Company details — `lib/site.ts`.** Contact address, navigation, and:

- `profiles` — LinkedIn and GitHub, both `null` by default. Set a URL and that
  link appears in the footer and on the contact page; left null, nothing
  renders.
- `founder` — `null` by default, which hides the founder section on the About
  page entirely. Fill in the name, role, a short first-person statement, a
  paragraph or two of background, an optional portrait and a LinkedIn URL, and
  the section appears. There is a worked example in the comment above it.
- `url` — used for canonical and Open Graph URLs. Set `NEXT_PUBLIC_SITE_URL` in
  the Vercel project, or edit the fallback once the domain is live.

## Media pipeline

Source files in `resources/` are camera masters — large, and in one case a
35 MB video. The web-ready derivatives in `public/resources/` are what ship:
roughly 1.4 MB of images plus a 2.3 MB silent H.264 clip with a poster frame.

When replacing an asset, downscale it first (long edge ~3000 px for full-bleed
photography, ~1800 px for contained images) rather than dropping a camera file
into `public/`. Video should be encoded without an audio track, since it only
ever plays muted.

## Content policy

The copy contains no invented specifications, prices, statistics, customers,
testimonials or partnerships. Where information does not exist yet — individual
kit contents, pricing, published tutorials — the layouts say so plainly and
point at the contact page. Please keep it that way when adding content: the
design already accounts for the absence, and it is a large part of why the site
reads as a real engineering company rather than a pitch deck.

## Accessibility and motion

- Semantic landmarks, one `<h1>` per page, ordered headings, alt text on every
  image, and a skip link as the first tab stop.
- Text meets WCAG AA contrast on both the light and dark surfaces.
- Scroll reveals are CSS-only and gated behind `prefers-reduced-motion`, with a
  `<noscript>` fallback so nothing stays hidden without JavaScript.
- The hero video is muted, carries no audio track, downloads only when it nears
  the viewport, pauses off-screen, and never autoplays for anyone who has asked
  for reduced motion — they get the poster frame and an explicit play control.

## Deploying

Import the repository into Vercel and accept the defaults. Optionally set
`NEXT_PUBLIC_SITE_URL` to the production domain so canonical and Open Graph
URLs resolve correctly.
