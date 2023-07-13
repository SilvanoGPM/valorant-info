import { Center, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { AgentTemplateProps } from '..';

export function AgentResume({ agent }: AgentTemplateProps) {
  return (
    <Flex
      direction="column"
      p="8"
      align="center"
      w={{ base: 'unset', lg: '40%' }}
      borderColor="whiteAlpha.300"
    >
      <Heading
        bgGradient={`linear(to-r, #${agent.images.background.gradient[0]}, #${agent.images.background.gradient[1]})`}
        bgClip="text"
        fontWeight="black"
      >
        {agent.name}
      </Heading>

      <Center
        bgGradient={`linear(to-b, #${agent.images.background.gradient[0]}, #${agent.images.background.gradient[1]})`}
        bgClip="text"
      >
        <Text>{agent.role.name}</Text>
      </Center>

      <Image src={agent.images.full} objectFit="contain" />
    </Flex>
  );
}
