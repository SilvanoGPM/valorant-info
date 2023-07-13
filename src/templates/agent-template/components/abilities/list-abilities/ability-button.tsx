import { Button, Center, Image, Text } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';
import { Ability } from '$core/domain/entities/agent';

interface AbilityButtonProps {
  ability: Ability;
  onClick: (selectedAbility: Ability) => void;
  gradient: string;
  isActive: boolean;
  keyText: string;
}

export function AbilityButton({
  ability,
  onClick,
  gradient,
  isActive,
  keyText,
}: AbilityButtonProps) {
  const activeStyle = isActive ? { bg: 'whiteAlpha.200' } : {};

  return (
    <Center flexDirection="column" key={ability.name}>
      <Button
        p="4"
        rounded="lg"
        boxSize="80px"
        variant="unstyled"
        onClick={() => onClick(ability)}
        sx={glassmorphismContainer(activeStyle)}
      >
        <Image src={ability.icon} alt={ability.name} title={ability.name} />
      </Button>

      <Center
        mt="2"
        boxSize="30px"
        rounded="lg"
        fontWeight="bold"
        bg="blue.500"
        sx={glassmorphismContainer()}
      >
        <Text bgGradient={`linear(to-b, ${gradient})`} bgClip="text">
          {keyText}
        </Text>
      </Center>
    </Center>
  );
}
