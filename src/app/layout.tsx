import { Metadata } from 'next';
import '@styles/index.scss';

export const metadata: Metadata = {
  title: 'Star hehe Wars Characters',
  description: 'Explore Star Wars Characters',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
