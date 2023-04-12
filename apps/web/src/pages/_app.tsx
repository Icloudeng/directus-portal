import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';
import { Router, useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';

import '@/styles/globals.css';

import { AppCustomStyle } from '@/components/layout/AppCustomStyle';
import { ChatwootNext, MatomoNext } from '@/components/services';
import NextProgress from '@/components/ui/next-progress';

import { ISharedData, SharedDataProvider } from '@/app/store';
import { getGqlSharedData } from '@/cms/items';

function MyApp({
  Component,
  pageProps,
  datas,
}: AppProps & { datas: ISharedData }) {
  return (
    <SharedDataProvider value={datas}>
      <NextProgress
        height='3px'
        options={{
          showSpinner: false,
          speed: 500,
          minimum: 0.3,
        }}
      />
      <AppServices />
      <AppCustomStyle />
      <Component {...pageProps} />
    </SharedDataProvider>
  );
}

function AppServices() {
  const { query } = useRouter();

  useEffect(() => {
    Router.events.on('routeChangeStart', (path) => {
      window.dispatchEvent(
        new CustomEvent('NextRouteChangeStart', { detail: path })
      );
    });
  }, []);

  if (query.iframed) {
    return <></>;
  }

  return (
    <>
      <MatomoNext />
      <ChatwootNext />
    </>
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

  const res = await getGqlSharedData().catch(console.error);

  if (res && res.data) {
    res.data.languages = res.data.languages.filter((lang) =>
      (locales as string[]).includes(lang.code)
    );
  }

  return {
    datas: {
      locale,
      ...(res?.data || {
        languages: [],
        TopbarLinks: [],
        NavbarLinks: [],
        FooterLinks: [],
        NavbarButtons: [],
      }),
    },
  };
};

export default appWithTranslation(MyApp);
