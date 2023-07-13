import { Box, Center, Heading, Text } from '@chakra-ui/react';

import { Ability } from '$core/domain/entities/agent';
import { glassmorphismContainer } from '$styles/tokens';

import { getKey } from './keys';

interface SelectedAbilityProps {
  selectedAbility?: Ability;
}

export function SelectedAbility({ selectedAbility }: SelectedAbilityProps) {
  if (!selectedAbility) {
    return null;
  }

  const abilityText = getKey(selectedAbility.slot).text;

  return (
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
  );
}
