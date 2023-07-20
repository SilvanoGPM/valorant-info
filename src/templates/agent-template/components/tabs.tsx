import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { AgentProps } from '$core/domain/entities/agent';

import { Abilities } from './abilities';
import { Biography } from './bio';

interface AgentTabsProps {
  agent: AgentProps;
}

export function AgentTabs({ agent }: AgentTabsProps) {
  return (
    <Tabs
      isFitted
      variant="unstyled"
      flex="1"
      borderColor="whiteAlpha.300"
      borderTopWidth={{ base: '1px', lg: '0' }}
    >
      <TabList borderBottom="1px" borderColor="whiteAlpha.300">
        <Tab
          _selected={{ bg: 'whiteAlpha.100', fontWeight: 'black' }}
          borderRight="1px"
          borderColor="whiteAlpha.300"
        >
          Biografia
        </Tab>

        <Tab _selected={{ bg: 'whiteAlpha.100', fontWeight: 'black' }}>
          Habilidades
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Biography agent={agent} />
        </TabPanel>

        <TabPanel>
          <Abilities agent={agent} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
