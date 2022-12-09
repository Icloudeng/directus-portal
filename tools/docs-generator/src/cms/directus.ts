import { Directus } from "@directus/sdk";
import { DIRECTUS_HOST, DIRECTUS_STATIC_TOKEN } from "../constants";

const directus = new Directus(DIRECTUS_HOST);

export async function getDirectusClient() {
  if (await directus.auth.token) return directus;
  await directus.auth.static(DIRECTUS_STATIC_TOKEN);

  return directus;
}
