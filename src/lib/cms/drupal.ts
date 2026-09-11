import type { CmsAdapter } from '@/lib/cms/adapter';
import type { PageData } from '@/contracts/content';

interface DrupalAdapterOptions {
  baseUrl: string;
  token?: string;
}

export class DrupalJsonApiAdapter implements CmsAdapter {
  constructor(private readonly options: DrupalAdapterOptions) {}

  async getPageByPath(_path: string, _options?: { preview?: boolean; locale?: string }): Promise<PageData | null> {
    throw new Error(
      `DrupalJsonApiAdapter is a project integration point. Configure resource types and field mapping for ${this.options.baseUrl} before use.`,
    );
  }
}

// Keep Drupal-specific payload types and mapping functions in this layer.
// Never pass raw JSON:API resources directly into Astro components.
