import { AppProps } from 'next/app';
import '@/styles/globals.css';
import ChatwootWidget from '@/components/services/chatwoot';
import { getMDLanguages, getMDTopbarLinks } from '@/cms/items';
import { ISharedData, SharedDataProvider } from '@/store';
import { getDirectusAuthToken } from '@/cms/directus';
import { useEffect } from 'react';

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

MyApp.getInitialProps = async () => {
  const access_token = await getDirectusAuthToken();
  const { data: languages } = await getMDLanguages(access_token);
  const { data: tb_links } = await getMDTopbarLinks();

  return {
    datas: {
      languages,
      tb_links,
    },
  };
};

export default MyApp;
