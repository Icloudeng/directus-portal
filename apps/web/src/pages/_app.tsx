import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';
import { appWithTranslation } from 'next-i18next';

import '@/styles/globals.css';

import { ChatwootNext, MatomoNext } from '@/components/services';
import NextProgress from '@/components/ui/next-progress';

import { ISharedData, SharedDataProvider } from '@/app/store';
import { getGqlSharedData } from '@/cms/items';
import { useRouter } from 'next/router';

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
      <Component {...pageProps} />
    </SharedDataProvider>
  );
}

function AppServices() {
  const { query } = useRouter();

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
      locales!.includes(lang.code)
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
