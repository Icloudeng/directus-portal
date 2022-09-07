import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';
import ChatwootWidget from '@/components/services/chatwoot';
import { getMDLanguages } from '@/cms/items';
import { ISharedData, SharedDataProvider } from '@/store';
import { getDirectusAuthToken } from '@/cms/directus';

// import '@/styles/colors.css';

function MyApp({
  Component,
  pageProps,
  datas,
}: AppProps & { datas: ISharedData }) {
  return (
    <SharedDataProvider value={datas}>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
      <ChatwootWidget />
    </SharedDataProvider>
  );
}

MyApp.getInitialProps = async () => {
  const access_token = await getDirectusAuthToken();
  let { data: languages } = await getMDLanguages(access_token);

  return {
    datas: {
      languages: languages,
    },
  };
};

export default MyApp;
