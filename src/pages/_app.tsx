import { AppProps } from 'next/app';
import Head from 'next/head';
import { Center, ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { Router } from 'next/router';

import { Fonts } from '$styles/fonts';
import { theme } from '$styles/theme';
import { Header } from '$components/header';
import { BackgroundImage } from '$components/background-image';
import { useSplashScreen } from '$hooks/use-splash-screen';
import { useUIStore } from '$stores/ui-store';

import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  const { closeNavbar } = useUIStore();

  useSplashScreen('hide');

  Router.events.on('routeChangeComplete', () => {
    closeNavbar();
  });

  return (
    <>
      <Head>
        <title>Valorant Info</title>
      </Head>

      <ChakraProvider theme={theme}>
        <NextNProgress
          color={theme.colors.brand['500']}
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          options={{
            showSpinner: false,
          }}
        />

        <Fonts />
        <BackgroundImage />
        <Header />

        <Center mx="auto" p="4" maxW="1300px">
          <Component {...pageProps} />
        </Center>
      </ChakraProvider>
    </>
  );
}
