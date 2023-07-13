import { useState } from 'react';
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { AgentProps } from '$core/domain/entities/agent';
import { glassmorphismContainer } from '$styles/tokens';

import { Choices, MenuChoice } from './choices';
import { Biography } from './bio';
import { Abilities } from './abilities';

export interface AgentTemplateProps {
  agent: AgentProps;
}

type ChoiceType = Record<
  MenuChoice,
  (props: { agent: AgentProps }) => JSX.Element
>;

const choices: ChoiceType = {
  bio: Biography,
  abilities: Abilities,
};

export function AgentTemplate({ agent }: AgentTemplateProps) {
  const [choice, setChoice] = useState<MenuChoice>('bio');

  const Screen = choices[choice];

  return (
    <Center mx="auto" p="4" maxW="1300px">
      <Flex
        w="full"
        rounded="lg"
        borderWidth="1px"
        alignItems="stretch"
        flexDir={{ base: 'column', lg: 'row' }}
        sx={glassmorphismContainer()}
      >
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

        <Box
          w="1px"
          bg="whiteAlpha.300"
          display={{ base: 'none', lg: 'block' }}
        />

        <Flex
          flex="1"
          direction="column"
          alignSelf="start"
          borderTopWidth={{ base: '1px', lg: '0' }}
          borderColor="whiteAlpha.300"
        >
          <Choices selected={choice} setSelected={setChoice} />

          <Screen agent={agent} />
        </Flex>
      </Flex>
    </Center>
  );
}
