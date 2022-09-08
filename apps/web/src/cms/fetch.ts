import { Sort, Filter, Directus, TypeMap } from '@directus/sdk';
import { cms_url, getDirectusClient } from './directus';
import { IMAGE_PRESETS } from '@/constant/cms';
import { DRTStatus, MDTranslation } from '@/types/directus';

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
  sort?: Sort<T>,
  filter?: Filter<T>
) {
  const directus = await getDirectusClient();
  const res = await directus
    .items<string, T>(model)
    .readByQuery({ limit, sort, filter });

  const data = res.data;

  if (!data) return res;

  for (const key in data) {
    const object: any = data[key];
    if (object?.translations) {
      await parseTranslations(directus, model, object);
    }
  }

  return res;
}

async function parseTranslations<
  T extends { translations: number[] } | { [x: string]: any }
>(directus: Directus<TypeMap>, model: string, object: T) {
  const translations: { [x: string]: any } = {};

  for (const tran_id of object.translations) {
    const data = await directus
      .items<string, MDTranslation>(model + '_translations')
      .readOne(tran_id);
    if (data?.languages_code) {
      translations[data?.languages_code] = data;
    }
  }

  object.translations = translations;

  return object;
}

function getPublishedDatas<T extends DRTStatus>(
  model: string,
  limit?: number,
  sort?: Sort<T>,
  filter?: Filter<T>
) {
  return getDatas(model, limit, sort, {
    status: {
      _in: ['published'],
    },
    ...(filter ? filter : {}),
  });
}

export const directus_fetch = {
  getPublishedDatas,
  getDatas,
  hasFiles,
  hasFile,
};
