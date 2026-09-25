# ToolLocker design update

Design: Industrial Dashboard × Application Shell.

- Gunmetal #2A3439, Safety Orange #FF6700, Steel #71797E.
- IBM Plex Sans headings/body and IBM Plex Mono labels/data (Google Fonts; system fallbacks if offline).
- Sidebar, top bar, responsive workspace panels, original SVG drill graphic, clearly labelled example records.
- Matching sign-in screen; original form interactions preserved.
- Global SVG turbulence texture, tactile button presses, GSAP power3.out entrances with cleanup and reduced-motion support.
- Existing daisyUI buttons and checkbox retained. No additional daisyUI component types.
- OnePage.md is unchanged. No backend, loan workflows, reports, or data model added.

## Run

Use Node.js 22.12+ or a compatible newer release.

```sh
npm install
npm run dev
```

```sh
npm run typecheck
npm run lint
npm run build
```

## Existing implementation limits

This project currently implements a public overview and a sign-in UI only. Sign-in and password reset show placeholder messages; account creation is not wired up. The example loan table is static illustrative content, not a functioning dashboard. Implementing the full OnePage remains separate work.

Changed: src/components/LandingPage.tsx, src/assets/css/app.css, src/App.tsx, package.json, package-lock.json. Added this document. Existing configuration and OnePage preserved.
