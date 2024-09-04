import { Directus } from '@directus/sdk';

import {
  DIRECTUS_EMAIL,
  DIRECTUS_PASSWORD,
  DIRECTUS_URL,
} from '@/app/constant/env';

const directus = new Directus(DIRECTUS_URL);

export async function getDirectusClient() {
  if (await directus.auth.token) return directus;

  if (DIRECTUS_EMAIL && DIRECTUS_PASSWORD) {
    directus.auth.autoRefresh = true;

    await directus.auth.login({
      email: DIRECTUS_EMAIL,
      password: DIRECTUS_PASSWORD,
    });
  }

  return directus;
}

export async function getDirectusAuthToken() {
  await getDirectusClient();
  return directus.auth.token;
}
