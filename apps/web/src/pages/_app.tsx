import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { NextPageContext } from 'next';

import '@/styles/globals.css';
import ChatwootWidget from '@/components/services/chatwoot';
import { getMDLanguages } from '@/cms/items';

// import '@/styles/colors.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
      <ChatwootWidget />
    </>
  );
}

MyApp.getInitialProps = async ({}: NextPageContext) => {
  // const data = await getMDLanguages();
  // console.log(data);

  return {};
};

export default MyApp;
