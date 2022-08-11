import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css';

// import '@/styles/colors.css';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
