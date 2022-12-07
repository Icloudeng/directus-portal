import { Directus } from "@directus/sdk";
import { DIRECTUS_URL, DIRECTUS_STATIC_TOKEN } from "../constants";

const directus = new Directus(DIRECTUS_URL);

export async function getDirectusClient() {
  if (await directus.auth.token) return directus;
  await directus.auth.static(DIRECTUS_STATIC_TOKEN);

  return directus;
}
