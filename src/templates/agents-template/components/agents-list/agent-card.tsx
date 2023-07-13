import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';

import type { AgentProps } from '$core/domain/entities/agent';
import { fillZero } from '$utils/fill-zero';
import { glassmorphismContainer } from '$styles/tokens';
import Link from 'next/link';
import { formatToURL } from '$utils/format-to-url';

interface AgentCardProps {
  agent: AgentProps;
  number: number;
}

export function AgentCard({ agent, number }: AgentCardProps) {
  return (
    <Link href={`agent/${formatToURL(agent.name)}`} role="group">
      <Flex
        w={{ base: '200px', sm: '280px' }}
        h={{ base: '200px', sm: '280px' }}
        rounded="lg"
        align="center"
        justify="end"
        flexDir="column"
        overflow="hidden"
        sx={glassmorphismContainer()}
        pos="relative"
      >
        <Box
          as="figure"
          overflow="hidden"
          pos="absolute"
          top="0"
          left="0"
          zIndex="-1"
          mt="2"
        >
          <Image src={agent.images.full} objectFit="contain" />
        </Box>

        <Text
          pos="absolute"
          top="2"
          left="4"
          fontSize="2xl"
          zIndex="2"
          bgGradient={`linear(to-r, #${agent.images.background.gradient[0]}, #${agent.images.background.gradient[1]})`}
          bgClip="text"
          fontWeight="black"
        >
          {fillZero(number + 1)}
        </Text>

        <Center
          w="full"
          h="full"
          transition="0.2s ease-in-out"
          overflow="hidden"
          opacity="0"
          fontWeight="bold"
          bgGradient="linear(to-t, background.500 20%, backgroundAlpha.500)"
          flexDir="column"
          _groupHover={{
            opacity: 1,
          }}
        >
          <Center
            opacity="0"
            transition="0.2s ease-in-out"
            transitionDelay="0.1s"
            transform="translateY(100px)"
            _groupHover={{
              opacity: 1,
              transform: 'translateY(0)',
            }}
          >
            <Image
              src={agent.role.icon}
              alt={agent.role.name}
              w="6"
              h="6"
              mr="2"
            />

            <Text fontSize="3xl">{agent.name}</Text>
          </Center>

          <Box
            opacity="0"
            transition="0.2s ease-in-out"
            transitionDelay="0.25s"
            h="2px"
            w="0"
            bg="gray.300"
            _groupHover={{
              opacity: 1,
              w: '50%',
            }}
          />
        </Center>

        <Box
          w="full"
          h="4px"
          bgGradient={`linear(to-r, #${agent.images.background.gradient[0]}, #${agent.images.background.gradient[1]})`}
        />
      </Flex>
    </Link>
  );
}
