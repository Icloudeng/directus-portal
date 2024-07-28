import { Filter, Sort } from '@directus/sdk';
import {
  DRTQueryT,
  DRTStatus,
  MDQueryFields,
  MDWithAsset,
  QueryWithTranslation,
} from '@packages/contracts';

import { CMS_URL } from '@/app/constant/env';

export const qWithStatus: DRTQueryT<DRTStatus> = {
  id: true,
  status: true,
  date_created: true,
  date_updated: true,
};

export function qWithTranslations<
  T extends { [x: string]: boolean | { [x: string]: boolean } }
>(fields: T): QueryWithTranslation<T> {
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

export function qWithQueryAsset(moreFields: { [x: string]: boolean } = {}) {
  return {
    id: true,
    ...moreFields,
  };
}

export function qWithAsset<T extends { [x: string]: MDWithAsset | unknown }>(
  access_token: string,
  data: T,
  imageKey: keyof T = 'image',
  preset?: string | [number, number]
) {
  const cms_url = CMS_URL;

  if (!data[imageKey]) return data;
  let preset_url = '';
  const asset = data[imageKey] as unknown as MDWithAsset;

  switch (typeof preset) {
    case 'string':
      preset_url += `&key=${preset}`;
      break;
    case 'object':
      preset_url += `&width=${preset[0]}&height=${preset[1]}`;
      break;
  }

  const origin = cms_url.endsWith('/') ? cms_url : cms_url + '/';
  const url = `${origin}assets/${asset.id}?access_token=${
    access_token + preset_url
  }`;

  asset.src = url;

  return data;
}

export function qWithAssets<T extends { [x: string]: MDWithAsset | unknown }>(
  access_token: string,
  items: T[],
  imageKey: keyof T = 'image',
  preset?: string | [number, number]
): T[] {
  return items.map((item) => qWithAsset(access_token, item, imageKey, preset));
}

type Query<T> = {
  fields?: MDQueryFields<T>;
  limit?: number;
  sort?: Sort<T>;
  filter?: Filter<T>;
};

export function qWithOption<T = unknown>(
  option: Query<T> & { offset?: number } = {}
) {
  return option;
}

export function qWithPublishedStatus<T>(
  option: Query<T> & { offset?: number } = {}
) {
  return {
    ...option,
    filter: {
      status: {
        _in: ['published'],
      },
      ...(option.filter || {}),
    },
  };
}
