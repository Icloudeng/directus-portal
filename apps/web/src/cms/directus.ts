import { Directus } from '@directus/sdk';
import getConfig from 'next/config';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
const { directus_url, cms_url: _cms_url } = publicRuntimeConfig;
const { directus_email, directus_password, directus_token } =
  serverRuntimeConfig;

const directus = new Directus(directus_url);

export const cms_url = _cms_url as string;

export async function getDirectusClient() {
  if (await directus.auth.token) return directus;

  if (directus_token) {
    await directus.auth.static(directus_token);
  } else if (directus_email && directus_password) {
    await directus.auth.login({
      email: directus_email,
      password: directus_password,
    });
  }

  return directus;
}

export async function getDirectusAuthToken() {
  await getDirectusClient();
  return directus.auth.token;
}
