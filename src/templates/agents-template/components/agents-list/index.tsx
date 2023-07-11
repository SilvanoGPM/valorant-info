import { SimpleGrid } from '@chakra-ui/react';

import type { AgentProps } from '$core/domain/entities/agent';
import { AgentCard } from './agent-card';

interface AgentsListProps {
  agents: AgentProps[];
}

export function AgentsList({ agents }: AgentsListProps) {
  return (
    <SimpleGrid
      w="full"
      spacing={4}
      minChildWidth={{ base: '200px', sm: '280px' }}
      justifyItems="center"
    >
      {agents.map((agent, index) => (
        <AgentCard key={agent.id} agent={agent} number={index} />
      ))}
    </SimpleGrid>
  );
}
