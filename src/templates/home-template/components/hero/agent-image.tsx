import { AbsoluteCenter, Center, Image } from '@chakra-ui/react';

import agentImg from '$assets/images/agent.png';

export function AgentImage() {
  return (
    <Center pos="relative">
      <AbsoluteCenter
        zIndex="-1"
        boxSize="100px"
        bg="brand.500"
        pos="absolute"
        filter="blur(100px)"
      />

      <Image
        src={agentImg.src}
        alt="Agente Breach"
        boxSize={{ base: '300px', lg: '500px' }}
        objectFit="cover"
      />
    </Center>
  );
}
