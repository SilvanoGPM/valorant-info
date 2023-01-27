import ScrollContainer from 'react-indiana-drag-scroll';
import { Center, HStack, Image, Text, Tooltip } from '@chakra-ui/react';

import type { AgentProps } from '$core/domain/entities/agent';
import { glassmorphismContainer } from '$styles/tokens';

interface AbilitiesProps {
  agent: AgentProps;
}

export function Abilities({ agent }: AbilitiesProps) {
  const abilities = agent.abilities.filter((ability) => Boolean(ability.icon));

  return (
    <HStack as={ScrollContainer} w="400px">
      {abilities.map((ability) => (
        <Tooltip key={ability.slot} label={ability.description}>
          <Center
            cursor="pointer"
            flexDir="column"
            p="4"
            minW="28"
            minH="28"
            textAlign="center"
            sx={glassmorphismContainer()}
          >
            <Image src={ability.icon} w="10" h="10" />

            <Text
              mt="2"
              fontSize="xx-small"
              textTransform="uppercase"
              fontWeight="bold"
              textAlign="center"
            >
              {ability.name}
            </Text>
          </Center>
        </Tooltip>
      ))}
    </HStack>
  );
}
