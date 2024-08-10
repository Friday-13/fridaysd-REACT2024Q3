import { Metadata } from 'next';
import '@styles/index.scss';
import { ThemeProvider } from '@context/theme-context';
import ThemeWrapper from '@components/theme-wrapper/theme-wrapper';

export const metadata: Metadata = {
  title: 'Star Wars Characters',
  description: 'Explore Star Wars Characters',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <ThemeWrapper>{children}</ThemeWrapper>
        </body>
      </html>
    </ThemeProvider>
  );
}
