import { Directus } from '@directus/sdk';

import {
  DIRECTUS_EMAIL,
  DIRECTUS_PASSWORD,
  DIRECTUS_STATIC_TOKEN,
  DIRECTUS_URL,
} from '@/app/constant/env';

const directus = new Directus(DIRECTUS_URL);

export async function getDirectusClient() {
  if (await directus.auth.token) return directus;

  if (DIRECTUS_STATIC_TOKEN) {
    await directus.auth.static(DIRECTUS_STATIC_TOKEN);
  } else if (DIRECTUS_EMAIL && DIRECTUS_PASSWORD) {
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
