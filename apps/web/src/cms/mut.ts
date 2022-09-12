import { useSharedData } from '@/store';

import { MDWithTranslation, MDWithUserTranslation } from '@/types/directus';

/**
 * Return datas with translation from user language
 *
 * @param datas
 * @returns
 */
export function useMut<
  T extends MDWithTranslation<unknown> | MDWithTranslation<unknown>[]
>(datas: T, lang?: string) {
  const { locale } = useSharedData();
  return mut(datas, lang || locale);
}

/**
 * Return datas with translation from user language
 *
 * @param datas
 * @param lang
 * @returns
 */
export function mut<
  T extends MDWithTranslation<unknown> | MDWithTranslation<unknown>[]
>(datas: T, lang: string): MDWithUserTranslation<T> {
  if (Array.isArray(datas)) {
    datas?.forEach((data) => translate(data, lang));
  } else {
    translate(datas, lang);
  }

  return datas as MDWithUserTranslation<T>;
}

const translate = (
  data: MDWithTranslation<unknown> & { translated?: boolean },
  lang: string
) => {
  if (!data || !data.translations || data.translated) {
    return data;
  }
  const translations = data.translations;
  const default_lang = translations[0]?.languages_code?.code || '';

  const find = ($lang: string) =>
    translations.find((trans) => {
      const code = trans.languages_code?.code;
      return code === $lang;
    }) as any;

  for (const nlang of [lang, default_lang]) {
    data.translations = find(nlang);
    if (data.translations) break;
  }

  data.translated = true;

  return data;
};
