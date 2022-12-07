import type { MDWithTranslation } from "@apps/contracts";
import type { ID } from "@directus/sdk";

export const DEFAULT_LANG = "en";
export const DEFAULT_LANG_NAME = "English";

type MDTranslation = MDWithTranslation["translations"][number] & {
  [x: string]: any;
};

export type Translations = {
  [lang: string]: {
    [key: string]: {
      message?: string;
      description?: string;
    };
  };
};

/**
 * This function takes the languages and mutate the mutable params
 * with the corresponding transtionn data
 * @param key
 * @param langs
 * @param datas
 * @param datakeys
 * @param mutable
 */
export function cmsTransTransformer<T extends MDTranslation>(
  key: ID,
  langs: string[],
  datas: T[],
  datakeys: (keyof T & string)[],
  mutable: Translations
) {
  langs.forEach((lang) => {
    const data = getTranslation(datas, lang);
    datakeys.forEach((dkey) => {
      mutable[lang][`${key}.${dkey}`] = {
        message: data[dkey],
        description: "",
      };
    });
  });
}

/**
 * Get the translation data which correspond to the passed language
 * @param translations
 * @param lang
 * @returns
 */
function getTranslation<T extends MDTranslation>(
  translations: T[],
  lang: string
) {
  let data: MDTranslation | undefined = translations[0];
  const default_lang = data.languages_code.code;
  const find = ($lang: string) =>
    translations.find((trans) => {
      const code = trans.languages_code?.code;
      return code === $lang;
    });

  for (const nlang of [lang, DEFAULT_LANG, default_lang]) {
    data = find(nlang);
    if (data) break;
  }

  return data!;
}

export const transKey = (...keys: any[]) => keys.join(".");
