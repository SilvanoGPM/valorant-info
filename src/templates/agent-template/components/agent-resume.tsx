import { fillZero } from '$utils/fill-zero';

import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';

import Link from 'next/link';

import { IoIosArrowBack } from 'react-icons/io';

import { AgentTemplateProps } from '..';

const textShine = keyframes`
  from { background-position: 100%; }
  to { background-position: 0%; }
`;

export function AgentResume({ agent, number }: AgentTemplateProps) {
  const agentGradient = `#${agent.images.background.gradient[0]}, #${agent.images.background.gradient[1]}`;

  const prefersReducedMotion = usePrefersReducedMotion();

  const nameAnimation = prefersReducedMotion
    ? undefined
    : `${textShine} 5s ease-in-out infinite alternate`;

  return (
    <Flex
      direction="column"
      p="8"
      align="center"
      w={{ base: 'unset', lg: '40%' }}
      borderColor="whiteAlpha.300"
      pos="relative"
    >
      <Box pos="absolute" zIndex="-1" opacity="0.3" top="55px">
        <Text
          fontSize="9xl"
          color="background.500"
          fontWeight="bold"
          textShadow={`-1px -1px 0 #${agent.images.background.gradient[0]}, 1px -1px 0 #${agent.images.background.gradient[1]},
    -1px 1px 0 #${agent.images.background.gradient[0]}, 1px 1px 0 #${agent.images.background.gradient[1]}`}
        >
          {fillZero(number)}
        </Text>
      </Box>

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
        bgSize="500% auto"
        bgClip="text"
        fontWeight="black"
        animation={nameAnimation}
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
