import { Metadata } from 'next';
import '@styles/index.scss';
import { ThemeProvider } from '@context/theme-context';
import ThemeWrapper from '@components/theme-wrapper/theme-wrapper';
import StoreWrapper from '@components/store-wrapper/store-wrapper';

export const metadata: Metadata = {
  title: 'Star Wars Characters',
  description: 'Explore Star Wars Characters',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.svg" type="image/x-icon" />
        </head>
        <body>
          <StoreWrapper>
            <ThemeWrapper>{children}</ThemeWrapper>
          </StoreWrapper>
        </body>
      </html>
    </ThemeProvider>
  );
}
