import path from "path";

export const DOCS_PATH = path.resolve(process.cwd(), "../../apps/docs");

export const I18N_PATH = path.resolve(DOCS_PATH, "i18n");

const url = process.env.DIRECTUS_URL || "";

export const DIRECTUS_URL = url.endsWith("/")
  ? url.slice(0, url.length - 1)
  : url;
export const DIRECTUS_STATIC_TOKEN = process.env.DIRECTUS_STATIC_TOKEN || "";
