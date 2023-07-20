import { Flex } from '@chakra-ui/react';

import { AgentProps } from '$core/domain/entities/agent';
import { glassmorphismContainer } from '$styles/tokens';

import { AgentResume } from './components/agent-resume';
import { Divider } from './components/divider';
import { AgentTabs } from './components/tabs';

export interface AgentTemplateProps {
  agent: AgentProps;
  number: number;
}

export function AgentTemplate({ agent, number }: AgentTemplateProps) {
  return (
    <Flex
      w="full"
      rounded="lg"
      borderWidth="1px"
      alignItems="stretch"
      flexDir={{ base: 'column', lg: 'row' }}
      sx={glassmorphismContainer()}
    >
      <AgentResume number={number} agent={agent} />

      <Divider />

      <AgentTabs agent={agent} />
    </Flex>
  );
}
