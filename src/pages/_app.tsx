import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import { Fonts } from '$styles/fonts';
import { theme } from '$styles/theme';
import { Header } from '$components/header';
import { BackgroundImage } from '$components/background-image';
import { useSplashScreen } from '$hooks/use-splash-screen';

export default function App({ Component, pageProps }: AppProps) {
  useSplashScreen('hide');

  return (
    <>
      <Head>
        <title>Valorant Info</title>
      </Head>

      <ChakraProvider theme={theme}>
        <Fonts />
        <BackgroundImage />
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
