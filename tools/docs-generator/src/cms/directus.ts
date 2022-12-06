import { Directus } from "@directus/sdk";

const URL = process.env.DIRECTUS_URL || "";
const EMAIL = process.env.DIRECTUS_EMAIL || "";
const PASSWORD = process.env.DIRECTUS_PASSWORD || "";

const directus = new Directus(URL);

export const cms_url = URL as string;

export async function getDirectusClient() {
  if (await directus.auth.token) return directus;
  await directus.auth.login({
    email: EMAIL,
    password: PASSWORD,
  });

  return directus;
}
