import { Directus } from "@directus/sdk";
import { DIRECTUS_HOST, DIRECTUS_EMAIL, DIRECTUS_PASSWORD } from "../constants";

const directus = new Directus(DIRECTUS_HOST, {
  auth: {
    autoRefresh: true,
    msRefreshBeforeExpires: 1000,
  },
});

export async function getDirectusClient() {
  await directus.auth.refreshIfExpired();

  if (await directus.auth.token) {
    return directus;
  }

  if (!DIRECTUS_EMAIL || !DIRECTUS_PASSWORD) {
    throw new Error("Directus Admin credentials must be provided!");
  }

  await directus.auth.login({
    email: DIRECTUS_EMAIL,
    password: DIRECTUS_PASSWORD,
  });

  return directus;
}
