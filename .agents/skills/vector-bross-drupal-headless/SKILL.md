# Vector Bross Drupal Headless Skill

## Purpose

Use this skill when building or modifying a Vector Bross Astro website that uses Drupal as a headless CMS. The goal is to preserve a frontend-first, contract-first architecture in which Drupal owns editorial content and Astro owns presentation.

## Core rule

Drupal decides **what** appears. Astro decides **how** it appears.

Never couple Astro presentation components directly to raw Drupal JSON:API responses.

Required flow:

```text
Drupal JSON:API
      ↓
Drupal adapter / mapper
      ↓
CMS-agnostic TypeScript contract
      ↓
Astro component
```

## Delivery workflow

1. Read the functional analysis, sitemap and relevant requirements.
2. Identify whether the project is CUSTOM (Figma + AI) or KICKSTART (VB Astro Starter).
3. Build the frontend before implementing detailed Drupal page-builder fields.
4. Use realistic fixtures/mock data for all editable content.
5. Reuse existing design tokens, UI primitives and blocks before creating new ones.
6. Define explicit TypeScript contracts for every reusable content block.
7. Deploy a working browser preview.
8. Validate design, responsive behaviour, navigation, CTA flows and realistic content with the team/client.
9. Freeze/stabilise the component contracts after frontend validation.
10. Model Drupal fields and entities against those contracts.
11. Implement Drupal adapters that normalize JSON:API data into frontend contracts.
12. Add draft/revision preview without changing component APIs.
13. Validate SEO, accessibility and performance before production release.

## Drupal content responsibilities

Drupal may own:

- landing pages and page copy
- images/media references
- cases/projects
- knowledge/articles
- team members and jobs
- SEO metadata
- translations
- URL aliases
- editorial state/revisions
- selection and ordering of approved content blocks

Drupal must not own arbitrary frontend styling, spacing values, CSS classes or unrestricted layout decisions.

## Astro responsibilities

Astro owns:

- design tokens
- typography and spacing system
- layout primitives
- responsive behaviour
- block rendering
- animations and interaction
- image rendering strategy
- technical SEO output
- performance
- accessibility

## Contract-first blocks

Example:

```ts
export interface HeroProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: Media;
  cta?: Link;
  variant?: 'default' | 'split';
}
```

During frontend development:

```text
fixture → HeroProps → Hero.astro
```

After CMS integration:

```text
Drupal resource → mapHero() → HeroProps → Hero.astro
```

`Hero.astro` must not know whether its data came from Drupal, fixtures, Drupal Canvas or another CMS.

## Drupal content modelling

Prefer structured content types for reusable domain content such as Case, Article/Knowledge, Team and Job.

For flexible landing pages, expose a controlled block library. Initial expected blocks include:

- Hero
- Intro/Text
- Text + Media
- Services/USP
- Cases
- Statistics
- Logo wall
- Testimonial
- FAQ
- CTA

Editors may select and order approved blocks. They should not be able to invent arbitrary visual patterns that bypass the Astro design system.

## JSON:API

Use Drupal Core JSON:API as the default content transport unless a project requirement clearly justifies another API.

Centralize all Drupal access under the CMS/data layer. Do not scatter fetch calls through `.astro` page or component files.

Adapters should handle:

- resource normalization
- relationships
- media
- links
- optional fields
- localization
- errors
- preview/draft differences

## Preview and publishing

Editors must be able to preview unpublished revisions in the same Astro components used in production.

Publishing should trigger the selected delivery strategy automatically: rebuild, revalidation, on-demand rendering or a documented hybrid. Normal copy changes must not require a Git commit.

## SEO

Preserve existing URL aliases where possible. CMS fields may provide editorial SEO values, but the Astro SEO layer controls correct technical rendering.

Support at minimum:

- title
- meta description
- canonical
- robots
- hreflang where applicable
- Open Graph
- structured data
- XML sitemap
- redirects

For migrations, crawl and compare the old and new website before go-live.

## Performance

Do not hydrate components unless browser-side interactivity requires it.

Targets on representative pages where realistic:

- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
- Lighthouse Performance > 95
- Accessibility > 95
- SEO 100 where applicable

Treat images, video, fonts and third-party scripts as performance-budget decisions.

## Drupal Canvas future compatibility

Do not make current Astro components depend on Paragraphs, Layout Builder or Canvas-specific payloads.

Future direction:

```text
Drupal Canvas
     ↓
Canvas/Drupal adapter
     ↓
existing frontend contracts
     ↓
existing Astro components
```

Canvas should become a better editorial/page-building interface, not a replacement for the Astro design system.

Before adopting Canvas for production headless page building, run a technical proof of concept covering component mapping, preview, revisions, localization, SEO and publishing.

## AI/MCP safety

AI may later create or update Drupal landing pages through MCP, but generated content should default to draft/review workflows. Do not bypass editorial approval for consequential site-wide changes.

## Kickstart scope protection

For KICKSTART projects:

- prefer existing blocks and variants
- avoid new layout patterns unless requirements cannot reasonably be met with the library
- treat new bespoke components as explicit scope
- preserve the starter's SEO/performance/accessibility defaults

For CUSTOM projects, new components are allowed when justified by the approved design, but they must still become reusable, typed and CMS-agnostic where appropriate.

## Definition of done for a Drupal-connected block

A block is complete when:

- it works with fixtures
- its TypeScript contract is explicit
- its Astro component is CMS-agnostic
- Drupal fields map cleanly through an adapter
- published content renders correctly
- draft preview works where required
- responsive and accessibility checks pass
- SEO implications are handled
- no unnecessary client JavaScript is introduced
