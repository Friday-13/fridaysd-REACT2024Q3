import { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeWrapper from '@components/theme-wrapper/theme-wrapper';
import StoreWrapper from '@components/store-wrapper/store-wrapper';
import '@styles/index.scss';
import { ThemeProvider } from '@context/theme-context';
import ErrorBoundary from '@components/error-boundarie/error-boundarie';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Star Wars Characters</title>
      </Head>
      <ThemeProvider>
        <ThemeWrapper>
          <ErrorBoundary>
            <StoreWrapper>
              <Component {...pageProps} />
            </StoreWrapper>
          </ErrorBoundary>
        </ThemeWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
