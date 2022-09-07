import { IMAGE_PRESETS } from '@/constant/cms';
import { Sort } from '@directus/sdk';
import { cms_url, getDirectusClient } from './directus';

function hasFile<T = unknown>(
  access_token: string,
  data: T,
  imageKey = 'image',
  preset?: string | [number, number]
): T {
  const d: any = data;

  if (!d[imageKey]) {
    return data;
  }
  let preset_url = '';

  switch (typeof preset) {
    case 'string':
      preset_url += `&key=${preset}`;
      break;
    case 'object':
      preset_url += `&width=${preset[0]}&height=${preset[1]}`;
      break;
  }

  const orgin = cms_url.endsWith('/') ? cms_url : cms_url + '/';
  const url = `${orgin}assets/${d[imageKey]}?access_token=${
    access_token + preset_url
  }`;

  d[imageKey] = url;

  return data;
}

function hasFiles<T>(
  access_token: string,
  datas: T[],
  imageKey = 'image',
  preset?: string | [number, number]
): T[] {
  return datas.map((data) => hasFile<T>(access_token, data, imageKey, preset));
}

async function getDatas<T = unknown>(
  model: string,
  limit?: number,
  sort?: Sort<T>
) {
  const directus = await getDirectusClient();

  return directus.items<string, T>(model).readByQuery({ limit, sort: sort });
}

export const directus_fetch = {
  getDatas,
  hasFiles,
  hasFile,
};
