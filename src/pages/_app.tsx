import { AppProps } from 'next/app';
import '@styles/index.scss';
import Head from 'next/head';
import ThemeWrapper from '@components/theme-wrapper/theme-wrapper';
import StoreWrapper from '@components/store-wrapper/store-wrapper';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Star Wars Characters</title>
      </Head>
      <ThemeWrapper>
        <StoreWrapper>
          <Component {...pageProps} />
        </StoreWrapper>
      </ThemeWrapper>
    </>
  );
}

export default App;
