import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Ability, AgentProps } from '$core/domain/entities/agent';
import { glassmorphismContainer } from '$styles/tokens';

interface AbilitiesProps {
  agent: AgentProps;
}

type Slot = 'Ability1' | 'Ability2' | 'Grenade' | 'Ultimate' | 'Passive';

const keys: Record<Slot, { key: string; text: string }> = {
  Ability1: { key: 'Q', text: 'Habilidade' },
  Ability2: { key: 'E', text: 'Habilidade' },
  Grenade: { key: 'C', text: 'Utilitário' },
  Ultimate: { key: 'X', text: 'Ultimate' },
  Passive: { key: '-', text: 'Passiva' },
};

export function Abilities({ agent }: AbilitiesProps) {
  const [selectedAbility, setSelectedAbility] = useState<Ability | undefined>(
    undefined,
  );

  useEffect(() => {
    const abilities = agent.abilities.map((ability) => {
      const key = keys[ability.slot as Slot].key;

      return { key, ability };
    });

    function onKeyPress(event: KeyboardEvent) {
      const keyPressed = event.key.toUpperCase();

      const foundAbility = abilities.find(
        (ability) => ability.key === keyPressed,
      );

      if (foundAbility) {
        setSelectedAbility(foundAbility.ability);
      }
    }

    window.addEventListener('keypress', onKeyPress);

    return () => {
      window.removeEventListener('keypress', onKeyPress);
    };
  }, [agent]);

  const keyGradient = `#${agent.images.background.gradient[0]}, #${agent.images.background.gradient[1]}`;

  const abilityText =
    selectedAbility && keys[selectedAbility.slot as Slot].text;

  return (
    <VStack flex="1" p="4" spacing="8">
      <HStack
        flexWrap="wrap"
        align="center"
        justify="center"
        spacing={{ base: '0', lg: '4' }}
        gap={{ base: '1rem', lg: 'unset' }}
      >
        {agent.abilities
          .sort((a) => {
            if (a.slot === 'Grenade') {
              return -1;
            }

            return 1;
          })
          .map((ability) => {
            const keyText = keys[ability.slot as Slot].key;

            const isActive = selectedAbility?.name === ability.name;

            const activeStyle = isActive ? { bg: 'whiteAlpha.200' } : {};

            return (
              <Center flexDirection="column" key={ability.name}>
                <Button
                  p="4"
                  rounded="lg"
                  boxSize="80px"
                  variant="unstyled"
                  onClick={() => setSelectedAbility(ability)}
                  sx={glassmorphismContainer(activeStyle)}
                >
                  <Image
                    src={ability.icon}
                    alt={ability.name}
                    title={ability.name}
                  />
                </Button>

                <Center
                  mt="2"
                  boxSize="30px"
                  rounded="lg"
                  fontWeight="bold"
                  bg="blue.500"
                  sx={glassmorphismContainer()}
                >
                  <Text
                    bgGradient={`linear(to-b, ${keyGradient})`}
                    bgClip="text"
                  >
                    {keyText}
                  </Text>
                </Center>
              </Center>
            );
          })}
      </HStack>

      {selectedAbility && (
        <Center
          flexDirection="column"
          p="8"
          w="full"
          rounded="lg"
          sx={glassmorphismContainer()}
        >
          <Heading textAlign="center">{selectedAbility.name}</Heading>
          <Text color="gray.400">{abilityText}</Text>

          <Box alignSelf="start">
            <Text fontWeight="bold" textTransform="uppercase" mt="8">
              Descrição
            </Text>

            <Text color="gray.500" textAlign="justify">
              {selectedAbility.description}
            </Text>
          </Box>
        </Center>
      )}
    </VStack>
  );
}
