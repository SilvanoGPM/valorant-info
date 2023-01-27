import { Button, Flex, Text } from '@chakra-ui/react';

import type { AgentProps } from '$core/domain/entities/agent';
import { fillZero } from '$utils/fill-zero';

interface AgentButtonProps {
  agent: AgentProps;
  number: number;
  isActive: boolean;
  onClick: () => void;
}

export function AgentButton({
  agent,
  number,
  onClick,
  isActive,
}: AgentButtonProps) {
  const highlightColor = isActive ? 'brand.500' : 'inherit';

  return (
    <Flex color={highlightColor}>
      <Text mr="2" mt="2">
        {fillZero(number + 1)}
      </Text>

      <Button
        onClick={onClick}
        fontSize="3xl"
        fontWeight="black"
        textTransform="uppercase"
        variant="unstyled"
      >
        {agent.name}
      </Button>
    </Flex>
  );
}
