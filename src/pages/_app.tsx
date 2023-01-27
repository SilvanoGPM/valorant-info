import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import { Fonts } from '$styles/fonts';
import { theme } from '$styles/theme';
import { BackgroundImage } from '$components/background-image';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Valorant Info</title>
      </Head>

      <ChakraProvider theme={theme}>
        <Fonts />
        <BackgroundImage />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
