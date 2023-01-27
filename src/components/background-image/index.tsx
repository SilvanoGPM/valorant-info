import { Image } from '@chakra-ui/react';

import bgImg from '$assets/images/bg.jpg';

export function BackgroundImage() {
  return (
    <Image
      pos="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      alt="Harbor e Astra de Fundo"
      filter="brightness(0.1)"
      zIndex="-1"
      src={bgImg.src}
    />
  );
}
