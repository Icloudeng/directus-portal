export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;
