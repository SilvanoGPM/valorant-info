import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import { IoIosArrowBack } from 'react-icons/io';

import { AgentTemplateProps } from '..';

export function AgentResume({ agent }: AgentTemplateProps) {
  const agentGradient = `#${agent.images.background.gradient[0]}, #${agent.images.background.gradient[1]}`;

  return (
    <Flex
      direction="column"
      p="8"
      align="center"
      w={{ base: 'unset', lg: '40%' }}
      borderColor="whiteAlpha.300"
      pos="relative"
    >
      <Box pos="absolute" top="2" left="2">
        <Link href="/agents">
          <IconButton
            aria-label="Voltar para agentes"
            color={`#${agent.images.background.gradient[0]}`}
            variant="unstyled"
            icon={<Icon as={IoIosArrowBack} fontSize="4xl" />}
          />
        </Link>
      </Box>

      <Heading
        bgGradient={`linear(to-r, ${agentGradient})`}
        bgClip="text"
        fontWeight="black"
      >
        {agent.name}
      </Heading>

      <Center bgGradient={`linear(to-b, ${agentGradient})`} bgClip="text">
        <Text>{agent.role.name}</Text>
      </Center>

      <Image src={agent.images.full} objectFit="contain" mt="2" />
    </Flex>
  );
}
