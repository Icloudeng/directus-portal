import { Directus } from "@directus/sdk";
import { DIRECTUS_HOST, DIRECTUS_EMAIL, DIRECTUS_PASSWORD } from "../constants";

const directus = new Directus(DIRECTUS_HOST);

export async function getDirectusClient() {
  if (await directus.auth.token) return directus;

  await directus.auth.login({
    email: DIRECTUS_EMAIL,
    password: DIRECTUS_PASSWORD,
  });

  return directus;
}
