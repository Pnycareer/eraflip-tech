# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/company website for Eraflip Tech (IT services + mobile game studio), built with Next.js 16 (App Router) and React 19. No backend/API/database — all content is static or hardcoded in JS data files. No test suite is configured.

## Workflow rule

Make changes locally first. Always ask the user for confirmation before pushing to GitHub, and ask again for confirmation before deploying to the VPS — never push or deploy on your own initiative.

## Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint (eslint-config-next core-web-vitals)
```

There is no test runner in this repo — do not assume `npm test` exists.

## Architecture

### Routing: App Router with two page patterns coexisting

- `src/app/(pages)/<route>/` — the current pattern. Each route has a thin `page.js` (exports `metadata` + renders the route's component) and a same-named component file doing the actual work, e.g. `src/app/(pages)/home/page.js` renders `src/app/(pages)/home/Home.js`. This applies to all service pages (`web-development`, `game-development`, `odoo-development-integration`, etc.), `home`, `about-us`, `contact-us`, and `our-games`.
- `src/app/privacy-policy-<game>/` (no parens, top-level under `src/app`) — an older, one-off pattern of per-game static privacy policy pages (e.g. `privacy-policy-flappy-cloudy`, `privacy-policy-jungle-fury`). These are separate from and largely superseded by the data-driven system below, but still live and routed.

**Gotcha:** `src/app/components/navbar/` and `src/app/components/footer/` each contain a `page.js`. Because they live under `src/app`, Next's file-based routing turns these into real, publicly reachable routes (`/components/navbar`, `/components/footer`) that just render the Navbar/Footer in isolation — this is very likely unintentional leftover scaffolding, not a deliberate route. Keep this in mind before adding new files under `src/app/components/**` (prefer `src/components/` for anything that should not become a route).

`src/app/index.js` and `src/app/Style.js` are unused leftovers from an earlier pages-router-style setup (`Style.js`'s import is commented out in `layout.js`); don't treat them as live code paths.

### Data-driven content

- **Games**: `src/app/(pages)/our-games/gamesData.js` exports `games` (array), `categories`, `pipeline`, `stats`, and `getGameBySlug(slug)`. Every game entry imports its own screenshots from `src/assets/<Game Name> WEBP/`. The dynamic route `src/app/(pages)/our-games/[slug]/page.js` calls `generateStaticParams`/`generateMetadata` off this file and renders `GameDetail.js`. Comment in the file notes this array is meant to be swapped for a real API/CMS later.
- **Privacy policies**: `src/lib/privacy-policies.js` exports `privacyPolicies` (object keyed by slug), `privacyPolicyList` (sorted array), and `getPrivacyPolicy(slug)`. Most entries are built via the local `createStandardPolicy()` factory (shared AdMob/Firebase boilerplate sections); a few (e.g. `urban-descent-pov`, `brick-arrow-escape-puzzle`) override/hand-write sections. The route `src/app/privacy-policy/[slug]/page.js` renders these through `src/components/privacy-policy/PrivacyPolicyRenderer.js`, which switches on a block `type` (`paragraph` | `bullets` | `steps` | `links`) to render each policy section. `src/app/privacy-policy/page.js` is the index listing all policies.
- Note: game slugs (in `gamesData.js`) and privacy-policy slugs (in `privacy-policies.js`) are independent namespaces and don't always match for the same game (e.g. game slug `barber-shop-simulator` vs. policy slug `barber-haircut-shop`).

### UI layer

- `src/components/ui/*.jsx` — shadcn/ui components (`components.json`: style `new-york`, base color `slate`, icon library `lucide`). Path aliases from `jsconfig.json`: `@/*` → `src/*` (also mirrored in `components.json` aliases: `@/components`, `@/lib`, `@/hooks`, `@/lib/utils`).
- `src/lib/utils.js` exports `cn()` (clsx + tailwind-merge) — the standard className merge helper used across UI components.
- Tailwind CSS v4 (via `@tailwindcss/postcss`), configured through `src/app/globals.css` rather than a `tailwind.config.js`.
- `Navbar` (`src/app/components/navbar/Navbar.js`) is a client component that hides itself on any `/privacy-policy*` route (`pathname.startsWith("/privacy-policy")`) since those pages render their own header via `PrivacyPolicyRenderer`.
- 3D/animation dependencies present in `package.json` (`three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `react-tsparticles`) are used in individual page components for visual effects — check the specific page component rather than assuming a shared 3D setup.

### React Compiler

`next.config.mjs` enables `reactCompiler: true` (with `babel-plugin-react-compiler` as a dev dependency) — manual `useMemo`/`useCallback` optimization is generally unnecessary for new component code.

### Assets

`src/assets/` holds per-game screenshot folders (`<Game Name> WEBP/`) imported directly into `gamesData.js` as static image imports (not referenced by path string). `public/` holds directly-served static files (icons, logo images, `app-ads.txt`).
