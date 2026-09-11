# Vector Bross Astro Starter

Reusable Astro foundation for Vector Bross websites.

## What is included

- Astro 7 + strict TypeScript
- Tailwind CSS 4
- sitemap generation
- Vector Bross design-token foundation
- reusable UI primitives and content blocks
- fixture/mock-data workflow for frontend-first delivery
- CMS-agnostic TypeScript contracts
- central block renderer
- CMS adapter interface
- explicit Drupal JSON:API integration boundary
- SEO-aware base layout
- project agent skill for the Drupal/headless approach

## Install

```bash
npm install
npm run dev
```

Validation:

```bash
npm run check
npm run build
```

Set `SITE_URL` in the deployment environment for canonical URLs and sitemap generation.

## Architecture

```text
Figma + AI OR VB Kickstart
        ↓
Astro frontend + realistic fixtures
        ↓
Client browser validation
        ↓
Stable TypeScript contracts
        ↓
Drupal JSON:API adapter
        ↓
QA / SEO / performance / go-live
```

Astro components never consume raw Drupal responses. The required flow is:

```text
Drupal JSON:API → adapter/mapper → frontend contract → Astro component
```

See [ARCHITECTURE.md](./ARCHITECTURE.md).

## Current block library

- Hero
- FeatureGrid
- CTA
- ButtonLink primitive

These are starter examples, not a fixed final design system. Production-proven blocks should be promoted back into this repository when they are broadly reusable.

## Interactive features

Static HTML is the default. Search, filters, calculators, wizards and configurators should be isolated as interactive islands or server-backed features only when required. Do not turn the whole website into a client-side app.

## Drupal

`src/lib/cms/drupal.ts` is deliberately an integration boundary rather than a generic magic Drupal implementation. Each client project maps its Drupal resource types/fields into the stable frontend contracts.

## Upstream

This starter is inspired by and initially evaluated against AstroWind by onWidget/arthelokyo. AstroWind is MIT licensed; upstream attribution is retained in `LICENSE.md` and `NOTICE.md`.

Vector Bross-specific architecture, components, contracts and AI instructions are maintained here.

## Pilot

v-b.be is the first production pilot for hardening the workflow and identifying which patterns belong in the generic starter.
