import { DEFAULT_USER_LANG } from '@/constant/vars';
import { useSharedData } from '@/store';
import { MDWithTranslation, MDWithUserTranslation } from '@/types/directus';

/**
 * Return datas with translation from user language
 *
 * @param datas
 * @returns
 */
export function useMut<
  T extends MDWithTranslation<any> | MDWithTranslation<any>[]
>(datas: T, lang?: string) {
  const { user_language } = useSharedData();
  return mut(datas, lang || user_language);
}

/**
 * Return datas with translation from user language
 *
 * @param datas
 * @param lang
 * @returns
 */
export function mut<
  T extends MDWithTranslation<any> | MDWithTranslation<any>[]
>(datas: T, lang: string): MDWithUserTranslation<T> {
  if (Array.isArray(datas)) {
    datas.forEach((data) => translate(data, lang));
  } else {
    translate(datas, lang);
  }

  return datas as any;
}

const translate = (data: any, lang: string) => {
  if (!data.translations || data.translated) {
    return data;
  }
  const translations = data.translations;
  const default_lang = Object.keys(translations)[0] || '';
  const default_user_lang = DEFAULT_USER_LANG;

  if (translations[lang]) {
    data.translations = translations[lang];
  } else if (translations[default_user_lang]) {
    data.translations = translations[default_user_lang];
  } else if (translations[default_lang]) {
    data.translations = translations[default_lang];
  }

  data.translated = true;

  return data;
};
