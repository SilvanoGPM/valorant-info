import { Html, Head, Main, NextScript } from 'next/document';

import { SplashScreen } from '$components/splash-screen';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta name="description" content="Boilerplate for NextJS projects" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>

      <body>
        <SplashScreen />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
