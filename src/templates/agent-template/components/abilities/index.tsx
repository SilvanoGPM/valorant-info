import { useState } from 'react';

import { VStack } from '@chakra-ui/react';

import { Ability, AgentProps } from '$core/domain/entities/agent';

import { useAbilityKeys } from './use-ability-keys';
import { SelectedAbility } from './selected-ability';
import { ListAbilities } from './list-abilities';

export interface AbilitiesProps {
  agent: AgentProps;
}

export function Abilities({ agent }: AbilitiesProps) {
  const [selectedAbility, setSelectedAbility] = useState<Ability | undefined>(
    undefined,
  );

  useAbilityKeys(agent, setSelectedAbility);

  return (
    <VStack flex="1" p="4" spacing="8">
      <ListAbilities
        agent={agent}
        selectedAbility={selectedAbility}
        setSelectedAbility={setSelectedAbility}
      />

      <SelectedAbility selectedAbility={selectedAbility} />
    </VStack>
  );
}
