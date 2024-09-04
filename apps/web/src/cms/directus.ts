import { Directus } from '@directus/sdk';

import {
  DIRECTUS_EMAIL,
  DIRECTUS_PASSWORD,
  DIRECTUS_URL,
} from '@/app/constant/env';

const directus = new Directus(DIRECTUS_URL);

export async function getDirectusClient() {
  await directus.auth.refreshIfExpired();

  if (await directus.auth.token) {
    return directus;
  }

  if (!DIRECTUS_EMAIL || !DIRECTUS_PASSWORD) {
    throw new Error('Directus Admin credentials must be provided!');
  }

  await directus.auth.login({
    email: DIRECTUS_EMAIL,
    password: DIRECTUS_PASSWORD,
  });

  return directus;
}
