import { Filter, Sort } from '@directus/sdk';
import {
  DRTQueryT,
  DRTStatus,
  MDQueryFields,
  MDWithAsset,
  QueryWithTranslation,
} from '@packages/contracts';

import { DIRECTUS_HOST } from '@/app/constant/env';

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

type IQAsset<T extends { [x: string]: MDWithAsset | unknown }> = {
  item: T;
  imageKey: keyof T;
  preset?: string | [number, number];
  access_token?: string;
};

type IQAssets<T extends { [x: string]: MDWithAsset | unknown }> = {
  items: T[];
  imageKey: keyof T;
  preset?: string | [number, number];
  access_token?: string;
};

export function qWithAsset<T extends { [x: string]: MDWithAsset | unknown }>(
  params: IQAsset<T>
) {
  const { item, imageKey = 'image', preset, access_token } = params;

  if (!item[imageKey]) return item;

  const asset = item[imageKey] as unknown as MDWithAsset;

  const urlParams = new URLSearchParams();

  switch (typeof preset) {
    case 'string':
      urlParams.set('key', preset);
      break;
    case 'object':
      urlParams.set('width', preset[0].toString());
      urlParams.set('height', preset[1].toString());
      break;
  }

  if (access_token) {
    urlParams.set('access_token', access_token);
  }

  const origin = DIRECTUS_HOST.endsWith('/')
    ? DIRECTUS_HOST
    : DIRECTUS_HOST + '/';

  asset.src = `${origin}assets/${asset.id}?${urlParams.toString()}`;

  return item;
}

export function qWithAssets<T extends { [x: string]: MDWithAsset | unknown }>(
  params: IQAssets<T>
): T[] {
  return params.items.map((item) =>
    qWithAsset({
      item,
      access_token: params.access_token,
      imageKey: params.imageKey || 'image',
      preset: params.preset,
    })
  );
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
