import { Center, Flex, useBoolean } from '@chakra-ui/react';
import { useState } from 'react';

import type { AgentProps } from '$core/domain/entities/agent';
import { glassmorphismContainer } from '$styles/tokens';

import { AgentsList } from './components/agents-list';
import { AgentDetails } from './components/agent-details';

export interface AgentsTemplateProps {
  agents: AgentProps[];
}

export function AgentsTemplate({ agents }: AgentsTemplateProps) {
  const [showAgentImage, showAgentImageActions] = useBoolean(true);
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);

  function handleSelectAgent(agent: AgentProps) {
    showAgentImageActions.off();
    setSelectedAgent(agent);
  }

  return (
    <Center h="100vh" mx="auto" p="4" maxW="1300px">
      <Flex
        maxH="500px"
        justify="center"
        w="full"
        sx={glassmorphismContainer()}
        p="8"
        rounded="lg"
      >
        <AgentsList
          agents={agents}
          selectedAgent={selectedAgent}
          selectAgent={handleSelectAgent}
        />

        <AgentDetails
          agent={selectedAgent}
          showImage={showAgentImage}
          onImageLoad={showAgentImageActions.on}
        />
      </Flex>
    </Center>
  );
}
