import { MDWithTranslation, MDWithUserTranslation } from '@packages/contracts';

import { useSharedData } from '@/app/store';

type ReturnType<P, Key extends string = 'translations'> = P extends undefined
  ? MDWithUserTranslation<Exclude<P, 'undefined'>, Key> | undefined
  : MDWithUserTranslation<P, Key>;

type ParamsType<Key extends string = 'translations'> =
  | MDWithTranslation<unknown, Key>
  | MDWithTranslation<unknown, Key>[]
  | undefined;

/**
 * Return data with translation from user language
 *
 * @param data
 * @returns
 */
export function useMut<
  T extends ParamsType<Key>,
  Key extends string = 'translations'
>(data: T, lang?: string, key?: Key) {
  // translations as default collection translation's key
  const keyValue = key || ('translations' as Key);

  const sharedData = useSharedData();

  return mut<T, Key>(data, lang || sharedData?.locale, keyValue);
}

/**
 * Return data with translation from user language
 *
 * @param data
 * @param lang
 * @returns
 */
export function mut<
  T extends ParamsType<Key>,
  Key extends string = 'translations'
>(data: T, lang: string, key?: Key): ReturnType<T, Key> {
  // translations as default collection translation's key
  const keyValue = key || ('translations' as Key);

  if (Array.isArray(data)) {
    data?.forEach((item) => translate(item, lang, keyValue));
  } else {
    data && translate(data as MDWithTranslation<unknown, Key>, lang, keyValue);
  }

  return data as ReturnType<T, Key>;
}

function translate<Key extends string = 'translations'>(
  data: MDWithTranslation<unknown, Key> & { translated?: boolean },
  lang: string,
  key: Key
) {
  if (!data || !data[key] || data.translated) {
    return data;
  }

  const translations = data[key];
  const default_lang = translations[0]?.languages_code?.code || '';

  const find = ($lang: string) => {
    return translations.find((trans) => {
      const code = trans.languages_code?.code;
      return code === $lang;
    }) as any;
  };

  for (const itemLang of [lang, default_lang]) {
    data[key] = find(itemLang);
    if (data[key]) break;
  }

  data.translated = true;

  return data;
}
