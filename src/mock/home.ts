import type { PageData } from '@/contracts/content';

export const homePage: PageData = {
  title: 'Vector Bross Astro Starter',
  description: 'Frontend-first Astro foundation for Vector Bross websites.',
  blocks: [
    {
      type: 'hero',
      props: {
        eyebrow: 'Vector Bross Astro Starter',
        title: 'Build the frontend first. Connect the CMS second.',
        intro: 'A reusable Astro foundation for custom Figma-to-code projects and faster Kickstart websites, with Drupal behind a clean adapter layer.',
        primaryCta: { label: 'View architecture', href: '/#architecture' },
        secondaryCta: { label: 'GitHub', href: 'https://github.com/Vector-bross/VB-astro-starter', external: true },
      },
    },
    {
      type: 'feature-grid',
      props: {
        eyebrow: 'Foundation',
        title: 'One frontend system, multiple delivery models.',
        intro: 'The starter is intentionally CMS-agnostic and works with realistic fixtures before any Drupal connection exists.',
        items: [
          { title: 'Frontend-first', text: 'Validate responsive design and UX in the browser before detailed CMS modelling.' },
          { title: 'Contract-first', text: 'Every reusable block exposes explicit TypeScript props independent from Drupal payloads.' },
          { title: 'Performance-first', text: 'Static HTML by default; add client-side JavaScript only for features that truly need it.' },
        ],
      },
    },
    {
      type: 'cta',
      props: {
        eyebrow: 'Next step',
        title: 'Use a real project to harden the starter.',
        text: 'Promote patterns that prove reusable in production back into this repository; keep client-specific code in client projects.',
        primaryCta: { label: 'Read architecture', href: '/#architecture' },
      },
    },
  ],
};
