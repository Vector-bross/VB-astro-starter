import type { PageData } from '@/contracts/content';

export interface CmsAdapter {
  getPageByPath(path: string, options?: { preview?: boolean; locale?: string }): Promise<PageData | null>;
}

export class FixtureCmsAdapter implements CmsAdapter {
  constructor(private readonly pages: Record<string, PageData>) {}

  async getPageByPath(path: string): Promise<PageData | null> {
    return this.pages[path] ?? null;
  }
}
