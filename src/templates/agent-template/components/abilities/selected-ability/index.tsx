import { Box, Center, Heading, Text } from '@chakra-ui/react';

import { Ability } from '$core/domain/entities/agent';
import { glassmorphismContainer } from '$styles/tokens';

import { Video } from './video';
import { getKey } from '$utils/sort-ability-by-name';

interface SelectedAbilityProps {
  selectedAbility?: Ability;
  agentName: string;
}

export function SelectedAbility({
  selectedAbility,
  agentName,
}: SelectedAbilityProps) {
  if (!selectedAbility) {
    return null;
  }

  const abilityInfo = getKey(selectedAbility.slot);

  return (
    <Center
      flexDirection="column"
      w="full"
      rounded="lg"
      overflow="hidden"
      sx={glassmorphismContainer()}
    >
      <Video abilityKey={abilityInfo.key} agentName={agentName} />

      <Center p={{ base: '4', sm: '8' }} flex="1" flexDir="column">
        <Heading textAlign="center">{selectedAbility.name}</Heading>
        <Text color="gray.400">{abilityInfo.text}</Text>

        <Box alignSelf="start">
          <Text fontWeight="bold" textTransform="uppercase" mt="8">
            Descrição
          </Text>

          <Text color="gray.500" textAlign="justify">
            {selectedAbility.description}
          </Text>
        </Box>
      </Center>
    </Center>
  );
}
