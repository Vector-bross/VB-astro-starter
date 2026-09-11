export interface LinkProps {
  label: string;
  href: string;
  external?: boolean;
}

export interface MediaProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface HeroProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: MediaProps;
  primaryCta?: LinkProps;
  secondaryCta?: LinkProps;
  variant?: 'default' | 'split';
}

export interface FeatureItem {
  title: string;
  text?: string;
}

export interface FeatureGridProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: FeatureItem[];
}

export interface CtaProps {
  eyebrow?: string;
  title: string;
  text?: string;
  primaryCta: LinkProps;
  secondaryCta?: LinkProps;
}

export type PageBlock =
  | { type: 'hero'; props: HeroProps }
  | { type: 'feature-grid'; props: FeatureGridProps }
  | { type: 'cta'; props: CtaProps };

export interface PageData {
  title: string;
  description?: string;
  canonical?: string;
  blocks: PageBlock[];
}
