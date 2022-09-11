import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

import '@/styles/globals.css';

import ChatwootWidget from '@/components/services/chatwoot';

import { ISharedData, SharedDataProvider } from '@/store';

import { getDirectusAuthToken } from '@/cms/directus';
import { getGqlSharedData } from '@/cms/items';
import { USER_LANG_HEADER } from '@/constant/vars';

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

MyApp.getInitialProps = async ({ ctx }: { ctx: GetServerSidePropsContext }) => {
  const access_token = await getDirectusAuthToken();
  const user_language = ctx.res.getHeader(USER_LANG_HEADER) as string;
  const { data } = await getGqlSharedData(access_token);

  return {
    datas: {
      user_language,
      ...(data || {}),
    },
  };
};

export default MyApp;
