import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';
import ChatwootWidget from '@/components/services/chatwoot';

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

export default MyApp;
