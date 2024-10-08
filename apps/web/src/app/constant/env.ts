export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const DEFAULT_LANG = 'en';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

// CMS directus env vars
export const DIRECTUS_PUBLIC_URL = process.env.DIRECTUS_PUBLIC_URL || '';
export const DIRECTUS_HOST = process.env.DIRECTUS_HOST || '';
export const DIRECTUS_EMAIL = process.env.DIRECTUS_EMAIL || '';
export const DIRECTUS_PASSWORD = process.env.DIRECTUS_PASSWORD || '';
