import { AppProps } from 'next/app';
import '@styles/index.scss';
import Head from 'next/head';
import AppLayout from '@views/app-layout/app-layout';
import { ThemeProvider } from '@context/theme-context';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Star Wars Characters</title>
      </Head>
      <ThemeProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
