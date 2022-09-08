import type { PartialItem } from '@directus/sdk';

export type DRTStatus = {
  status: 'published' | 'draft' | 'archived';
  date_created: string;
  date_updated?: string;
};

export type MDWithTranslation<T> = {
  translations: Partial<{
    [lang: string]: T;
  }>;
};

type I_MDWithUserTranslation<T> = {
  [k in keyof T]: k extends 'translations'
    ? T[k] extends PartialItem<{ [lang: string]: infer R }> | undefined
      ? R | undefined
      : never
    : T[k];
};

export type WithTranslation<T> = T & {
  [k in keyof T as `${string & k}_translations`]: T[k];
};

export type MDWithUserTranslation<T> = T extends (infer P)[]
  ? I_MDWithUserTranslation<P>[]
  : I_MDWithUserTranslation<T>;

export type MDTranslation = {
  [x: string]: string;
  languages_code: string;
};
