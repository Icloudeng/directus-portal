import type { MDLang } from "../cms/type";
import type { Config } from "@docusaurus/types";
import utils from "../utils";
import { DEFAULT_LANG, DEFAULT_LANG_NAME } from "../constants";

export type I18nContent = {
  meta: {
    i18n: NonNullable<Config["i18n"]>;
  };
};

/**
 * Generate i18n locales content
 *
 * @param languages
 * @returns
 */
export function generateI18nContent(languages: MDLang[]) {
  const langs = languages.map((l) => l.code);
  const content: I18nContent = {
    meta: {
      i18n: {
        defaultLocale: DEFAULT_LANG,
        locales: utils.uniq(["en", ...langs]),
        localeConfigs: {
          [DEFAULT_LANG]: {
            label: DEFAULT_LANG_NAME,
          },
          ...languages.reduce((acc, lang) => {
            acc[lang.code] = {
              label: lang.name,
            };
            return acc;
          }, {} as Record<string, { label: string }>),
        },
      },
    },
  };

  return content;
}
