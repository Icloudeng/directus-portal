import { Sort, Filter, Directus, TypeMap } from '@directus/sdk';
import { cms_url, getDirectusClient } from './directus';
import { DRTStatus, MDTranslation, MDQueryFields } from '@/types/directus';

type Query<T> = {
  fields?: MDQueryFields<T>;
  limit?: number;
  sort?: Sort<T>;
  filter?: Filter<T>;
};

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

async function getDatas<T = unknown>(model: string, query: Query<T> = {}) {
  const directus = await getDirectusClient();
  let translations_fields: string[] = [];

  if (query.fields && Array.isArray(query.fields)) {
    translations_fields = query.fields
      .filter((f: string) => f.startsWith('translations.'))
      .map((f: string) => f.replace('translations.', ''));

    const qry: any = query;
    qry.fields = query.fields.filter(
      (f: string) => !f.startsWith('translations.')
    );
  }

  const res = await directus.items<string, T>(model).readByQuery(query);

  const data = res.data;

  if (!data) return res;

  for (const key in data) {
    const object: any = data[key];
    if (object?.translations) {
      await parseTranslations(directus, model, object, translations_fields);
    }
  }

  return res;
}

async function parseTranslations<
  T extends { translations: number[] } | { [x: string]: any }
>(
  directus: Directus<TypeMap>,
  model: string,
  object: T,
  translations_fields: string[]
) {
  const translations: { [x: string]: any } = {};

  for (const tran_id of object.translations) {
    const data = await directus
      .items<string, MDTranslation>(model + '_translations')
      .readOne(tran_id, {
        fields: translations_fields,
      });
    if (data?.languages_code && !translations[data?.languages_code]) {
      translations[data?.languages_code] = data;
    }
  }

  object.translations = translations;

  return object;
}

function getPublishedDatas<T extends DRTStatus>(
  model: string,
  query: Query<T> = {}
) {
  return getDatas<T>(model, {
    filter: {
      status: {
        _in: ['published'],
      },
    },
    ...query,
  });
}

export const directus_fetch = {
  getPublishedDatas,
  getDatas,
  hasFiles,
  hasFile,
};
