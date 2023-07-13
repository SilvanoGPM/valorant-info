import { VStack } from '@chakra-ui/react';

import { AgentProps } from '$core/domain/entities/agent';

import { BackgroundImage } from './background-image';
import { Description } from './description';
import { Role } from './role';
import { AgentImage } from './agent-image';

export interface BiographyProps {
  agent: AgentProps;
}

export function Biography({ agent }: BiographyProps) {
  return (
    <VStack flex="1" p="4" spacing="8" pos="relative">
      <BackgroundImage agent={agent} />
      <AgentImage agent={agent} />
      <Description agent={agent} />
      <Role agent={agent} />
    </VStack>
  );
}
