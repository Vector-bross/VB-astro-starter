# Vector Bross Astro architecture

## Delivery model

```text
CUSTOM
Figma + AI
    ↓
Astro frontend + realistic fixtures
    ↓
Browser/client validation
    ↓
Stable TypeScript contracts
    ↓
Drupal adapter
    ↓
Drupal editorial workflow

KICKSTART
VB Astro Starter
    ↓
Branding + existing blocks
    ↓
Astro frontend + realistic fixtures
    ↓
Browser/client validation
    ↓
Stable TypeScript contracts
    ↓
Drupal adapter
```

## Core principles

1. Frontend first. Do not model detailed CMS block fields before the frontend pattern is sufficiently stable.
2. Contract first. Astro components consume CMS-agnostic TypeScript props.
3. Drupal is an adapter, not a frontend dependency.
4. Static HTML by default. Add hydration only for real interactive requirements.
5. Business logic stays in frontend/server code; only editable content/configuration belongs in Drupal.
6. SEO, accessibility and performance are foundation requirements, not final-phase optimisations.

## Data flow

```text
fixtures OR Drupal OR future Canvas
              ↓
      adapter / mapper
              ↓
     frontend contracts
              ↓
      Astro components
```

Never do this:

```text
Drupal JSON:API → Hero.astro
```

Always do this:

```text
Drupal JSON:API → mapHero() → HeroProps → Hero.astro
```

## Feature classification

Before building a feature classify it as one of:

- STATIC — plain Astro HTML/CSS
- ISLAND — local client-side interaction
- SERVER — secure server-side endpoint/action
- SEARCH — dedicated index/search service
- CMS — editorial data/configuration
- EXTERNAL — separate platform/integration
- APP — application-like behaviour that deserves its own architecture

Do not add client JavaScript by default.

## Drupal Canvas

Future Canvas support should map Canvas/Drupal payloads to the same frontend contracts. Canvas may improve page-building UX, but must not replace the Astro design system or push arbitrary styling into CMS data.

## Promotion rule

Client-specific code stays in client repositories. Only patterns proven reusable in production are promoted back into VB-astro-starter.
