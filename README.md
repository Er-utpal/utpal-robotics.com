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

**Products, projects, subject areas, services and the founder's selected work
— `lib/content.ts`.** Typed
arrays; add an entry and it appears in the relevant layouts. Projects and
domains accept `image: null` and fall back to a dark statement panel, so an
entry without a photograph still looks deliberate.

**Company details — `lib/site.ts`.** Contact address, navigation, and:

- `profiles` — LinkedIn and GitHub, both `null` by default. Set a URL and that
  link appears in the footer and on the contact page; left null, nothing
  renders.
- `founder` — name, role, discipline, positioning sentence, focus and portrait
  for the About page. Setting it to `null` hides the founder section entirely.
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

## SEO

- Every route sets its own title, description, canonical URL, Open Graph and
  Twitter card through `pageMetadata` in `lib/seo.ts`.
- Share images come from Next.js's `opengraph-image` file convention — one per
  route, generated from the site's own photography. Routes without their own
  image pass `ogImage` explicitly, because a page that declares `openGraph`
  replaces the parent's object and would otherwise ship without one.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt`. Add new routes to the list in `sitemap.ts`.
- JSON-LD lives in `components/structured-data.tsx`: Organization and WebSite
  site-wide, BreadcrumbList below the root, and Person on the About page.
  There is deliberately no Product schema — it requires price, availability or
  specification data that does not exist yet, and inventing it would both
  breach the content policy and risk a structured-data penalty. Add it once
  real product data lands.

## Deploying

Import the repository into Vercel and accept the defaults, then set:

- `NEXT_PUBLIC_SITE_URL` — the production domain, e.g.
  `https://utpalrobotics.com`. Canonical URLs, Open Graph URLs, the sitemap and
  the JSON-LD all derive from it, so set this before submitting anything to
  Google.
- `GOOGLE_SITE_VERIFICATION` — the token from the Search Console HTML-tag
  verification method (the `content` value only, not the whole tag). Next.js
  emits the meta tag when it is set and omits it when it is not. It is not a
  secret, but it lives in the environment rather than in the repository.

After the first deploy: verify the property in Google Search Console, submit
`https://<domain>/sitemap.xml`, and request indexing for the homepage.
