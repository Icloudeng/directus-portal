import {
  DRTQueryT,
  DRTStatus,
  MDWithAsset,
  QueryWithTranslation,
} from '@/types/directus';
import { cms_url } from './directus';

export const qWithStatus: DRTQueryT<DRTStatus> = {
  id: true,
  status: true,
  date_created: true,
  date_updated: true,
};

export function qWithTranslations<T extends { [x: string]: boolean }>(
  fields: T
): QueryWithTranslation<T> {
  return {
    translations: {
      id: true,
      languages_code: {
        code: true,
        name: true,
      },
      ...fields,
    },
  };
}

export function qWithAsset<T extends { [x: string]: MDWithAsset | unknown }>(
  access_token: string,
  data: T,
  imageKey = 'image',
  preset?: string | [number, number]
) {
  if (!data[imageKey]) return data;
  let preset_url = '';
  const asset = data[imageKey] as MDWithAsset;

  switch (typeof preset) {
    case 'string':
      preset_url += `&key=${preset}`;
      break;
    case 'object':
      preset_url += `&width=${preset[0]}&height=${preset[1]}`;
      break;
  }

  const orgin = cms_url.endsWith('/') ? cms_url : cms_url + '/';
  const url = `${orgin}assets/${asset.id}?access_token=${
    access_token + preset_url
  }`;

  asset.src = url;

  return data;
}

export function qWithAssets<T extends { [x: string]: MDWithAsset }>(
  access_token: string,
  datas: T[],
  imageKey = 'image',
  preset?: string | [number, number]
): T[] {
  return datas.map((data) =>
    qWithAsset<typeof data>(access_token, data, imageKey, preset)
  );
}

// status: {
//   _in: ['published'],
// },
