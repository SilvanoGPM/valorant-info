import { Box, Center, CircularProgress, Text } from '@chakra-ui/react';

import { useSplashScreen } from '$hooks/use-splash-screen';
import { theme } from '$styles/theme';

// Para as cores utilizar o objeto theme porque o componente não consegue acessar
// as informações do CSS para obter as cores.
export function SplashScreen() {
  useSplashScreen('show');

  return (
    <Box
      id="loader"
      pos="fixed"
      left="0"
      top="0"
      w="100vw"
      h="100vh"
      zIndex="1000"
      bg={theme.colors.background['500']}
    >
      <Center h="100vh" flexDir="column">
        <CircularProgress
          isIndeterminate
          color={theme.colors.brand['500']}
          trackColor={theme.colors.background['900']}
        />

        <Text mt="8" fontWeight="bold" textTransform="uppercase">
          Carregando...
        </Text>
      </Center>
    </Box>
  );
}
