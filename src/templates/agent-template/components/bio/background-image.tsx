import { Box, Image } from '@chakra-ui/react';

import { BiographyProps } from '.';

export function BackgroundImage({ agent }: BiographyProps) {
  return (
    <Box pos="absolute" boxSize="350px" top="0" right="0" zIndex="-1">
      <Image src={agent.images.background.image} filter="brightness(0.1)" />
    </Box>
  );
}
