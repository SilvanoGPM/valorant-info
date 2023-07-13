import { useState } from 'react';
import { Center, Flex } from '@chakra-ui/react';

import { AgentProps } from '$core/domain/entities/agent';
import { glassmorphismContainer } from '$styles/tokens';

import { Tabs } from './components/tabs';
import { Biography } from './components/bio';
import { Abilities } from './components/abilities';
import { AgentResume } from './components/agent-resume';
import { Divider } from './components/divider';

export interface AgentTemplateProps {
  agent: AgentProps;
}

export function AgentTemplate({ agent }: AgentTemplateProps) {
  const [tab, setTab] = useState('bio');

  return (
    <Center mx="auto" p="4" maxW="1300px">
      <Flex
        w="full"
        rounded="lg"
        borderWidth="1px"
        alignItems="stretch"
        flexDir={{ base: 'column', lg: 'row' }}
        sx={glassmorphismContainer()}
      >
        <AgentResume agent={agent} />

        <Divider />

        <Tabs
          selectedTab={tab}
          setSelectedTab={setTab}
          tabs={[
            {
              name: 'bio',
              text: 'Biografia',
              screen: <Biography agent={agent} />,
            },
            {
              name: 'abilities',
              text: 'Habilidades',
              screen: <Abilities agent={agent} />,
            },
          ]}
        />
      </Flex>
    </Center>
  );
}
