import { UserConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideTranslations(
  locale: string,
  namespacesRequired: string[] = [],
  configOverride?: UserConfig | null | undefined,
  extraLocales?: false | string[] | undefined
) {
  return serverSideTranslations(
    locale,
    ['common', ...namespacesRequired],
    configOverride,
    extraLocales
  );
}
