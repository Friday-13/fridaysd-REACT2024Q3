import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Star Wars Characters',
  description: 'Explore Star Wars Characters',
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
