import { Heading, HStack, Image, Tooltip } from '@chakra-ui/react';

import type { AgentProps } from '$core/domain/entities/agent';

interface RoleProps {
  agent: Agent;
}

export function Role({ agent }: RoleProps) {
  return (
    <HStack align="center" mt="8">
      <Heading as="h3" fontWeight="black">
        {agent.role.name}
      </Heading>

      <Tooltip label={agent.role.description}>
        <Image ml="2" src={agent.role.icon} w="6" h="6" cursor="pointer" />
      </Tooltip>
    </HStack>
  );
}
