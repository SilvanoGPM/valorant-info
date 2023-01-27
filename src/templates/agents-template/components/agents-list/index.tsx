import { VStack } from '@chakra-ui/react';
import ScrollContainer from 'react-indiana-drag-scroll';

import type { AgentProps } from '$core/domain/entities/agent';
import { thinScrollbar } from '$styles/tokens';
import { AgentButton } from './agent-button';

interface AgentsListProps {
  agents: AgentProps[];
  selectedAgent: AgentProps;
  selectAgent: (agent: AgentProps) => void;
}

export function AgentsList({
  agents,
  selectedAgent,
  selectAgent,
}: AgentsListProps) {
  function handleSelectAgent(agent: AgentProps) {
    return () => selectAgent(agent);
  }

  return (
    <VStack
      as={ScrollContainer}
      align="start"
      spacing="0"
      overflowY="auto"
      sx={thinScrollbar}
    >
      {agents.map((agent, index) => {
        const isActive = selectedAgent.name === agent.name;

        return (
          <AgentButton
            onClick={handleSelectAgent(agent)}
            key={agent.id}
            agent={agent}
            number={index}
            isActive={isActive}
          />
        );
      })}
    </VStack>
  );
}
