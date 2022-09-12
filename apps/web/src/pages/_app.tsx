import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';

import '@/styles/globals.css';

import ChatwootWidget from '@/components/services/chatwoot';

import { ISharedData, SharedDataProvider } from '@/store';

import { getDirectusAuthToken } from '@/cms/directus';
import { getGqlSharedData } from '@/cms/items';

function MyApp({
  Component,
  pageProps,
  datas,
}: AppProps & { datas: ISharedData }) {
  useEffect(() => {
    console.log(datas);
  }, []);
  return (
    <SharedDataProvider value={datas}>
      <Component {...pageProps} />
      <ChatwootWidget />
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
  const access_token = await getDirectusAuthToken();
  const { data } = await getGqlSharedData(access_token);

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
