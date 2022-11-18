import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';
import { appWithTranslation } from 'next-i18next';

import '@/styles/globals.css';

import ChatwootWidget from '@/components/services/chatwoot';

import { ISharedData, SharedDataProvider } from '@/app/store';

import { getGqlSharedData } from '@/cms/items';
import NextProgress from '@/components/ui/next-progress';
import { useEffect } from 'react';
import matomoInit from '@/lib/matomo-next';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;
const CHATWOOT_BASE_URL = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL;
const CHATWOOT_API_KEY = process.env.NEXT_PUBLIC_CHATWOOT_API_KEY;

function MyApp({
  Component,
  pageProps,
  datas,
}: AppProps & { datas: ISharedData }) {
  useEffect(() => {
    if (MATOMO_URL && MATOMO_SITE_ID) {
      matomoInit({
        url: MATOMO_URL,
        siteId: MATOMO_SITE_ID,
      });
    }
  }, []);

  return (
    <SharedDataProvider value={datas}>
      <NextProgress height='2px' options={{ showSpinner: false }} />
      <Component {...pageProps} />
      {CHATWOOT_BASE_URL && CHATWOOT_API_KEY && (
        <ChatwootWidget
          baseUrl={CHATWOOT_BASE_URL}
          websiteToken={CHATWOOT_API_KEY}
        />
      )}
    </SharedDataProvider>
  );
}

MyApp.getInitialProps = async ({
  ctx: { locale, locales },
}: {
  ctx: GetServerSidePropsContext;
}) => {
  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
    return {
      props: {},
    };
  }

  const { data } = await getGqlSharedData();

  if (data) {
    data.languages = data.languages.filter((lang) =>
      locales!.includes(lang.code)
    );
  }

  return {
    datas: {
      locale,
      ...(data || {}),
    },
  };
};

export default appWithTranslation(MyApp);
