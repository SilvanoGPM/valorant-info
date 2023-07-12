import { Image } from '@chakra-ui/react';

import bgImg from '$assets/images/bg.png';

export function BackgroundImage() {
  return (
    <Image
      h="100vh"
      w="100vw"
      pos="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      alt="Valorant"
      filter="brightness(0.1)"
      zIndex="-1"
      objectFit="cover"
      src={bgImg.src}
    />
  );
}
