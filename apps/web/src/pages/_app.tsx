import { AppProps } from 'next/app';
import '@/styles/globals.css';
import ChatwootWidget from '@/components/services/chatwoot';
import { getMDLanguages } from '@/cms/items';
import { ISharedData, SharedDataProvider } from '@/store';
import { getDirectusAuthToken } from '@/cms/directus';

function MyApp({
  Component,
  pageProps,
  datas,
}: AppProps & { datas: ISharedData }) {
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

  return {
    datas: {
      languages: languages,
    },
  };
};

export default MyApp;
