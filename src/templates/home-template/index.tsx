import { Center } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';

import { Hero } from './components/hero';
import { Content } from './components/content';

export function HomeTemplate() {
  return (
    <Center
      flex="1"
      w="full"
      p="8"
      rounded="lg"
      flexDir="column"
      sx={glassmorphismContainer({ showBorder: false })}
    >
      <Hero />
      <Content />
    </Center>
  );
}
