import { Box, Image } from '@chakra-ui/react';

import { BiographyProps } from '.';

export function AgentImage({ agent }: BiographyProps) {
  return (
    <Box boxSize="150px" alignSelf="start">
      <Image src={agent.images.normal} />
    </Box>
  );
}
