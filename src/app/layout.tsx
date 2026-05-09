import type { Metadata } from 'next';

import './globals.css';

import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Verticard',
  description: 'Next.js + Strapi Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <head>

        <link
          rel="stylesheet"
          href="/css/bootstrap.min.css"
        />

        <link
          rel="stylesheet"
          href="/css/magnific-popup.css"
        />

        <link
          rel="stylesheet"
          href="/css/templatemo-style.css"
        />

      </head>

      <body>

        {children}

        <Script src="/js/jquery-3.4.1.min.js" />

        <Script src="/js/jquery.magnific-popup.min.js" />

      </body>

    </html>
  );
}
