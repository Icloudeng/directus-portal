import { Directus } from '@directus/sdk';

import {
  DIRECTUS_EMAIL,
  DIRECTUS_PASSWORD,
  DIRECTUS_URL,
} from '@/app/constant/env';

const directus = new Directus(DIRECTUS_URL);

export async function getDirectusClient() {
  if (await directus.auth.token) return directus;

  if (!DIRECTUS_EMAIL || !DIRECTUS_PASSWORD) {
    throw new Error('Directus Admin credentials must be provided!');
  }

  directus.auth.autoRefresh = true;

  await directus.auth.login({
    email: DIRECTUS_EMAIL,
    password: DIRECTUS_PASSWORD,
  });

  return directus;
}
