import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My app',
  description: 'My App is a...',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Star Wars Characters</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
