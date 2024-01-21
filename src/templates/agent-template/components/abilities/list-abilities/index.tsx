import { HStack } from '@chakra-ui/react';

import { Ability } from '$core/domain/entities/agent';

import { AbilitiesProps } from '..';
import { AbilityButton } from './ability-button';
import { abilityByName, getKey } from '$utils/sort-ability-by-name';

interface ListAbilitiesProps extends AbilitiesProps {
  selectedAbility?: Ability;
  setSelectedAbility: (selectedAbility: Ability) => void;
}

export function ListAbilities({
  agent,
  selectedAbility,
  setSelectedAbility,
}: ListAbilitiesProps) {
  const agentGradient = `#${agent.images.background.gradient[0]}, #${agent.images.background.gradient[1]}`;

  return (
    <HStack
      flexWrap="wrap"
      align="center"
      justify="center"
      spacing={{ base: '0', lg: '4' }}
      gap={{ base: '1rem', lg: 'unset' }}
    >
      {agent.abilities.sort(abilityByName).map((ability) => {
        const isActive = selectedAbility?.name === ability.name;
        const keyText = getKey(ability.slot).key;

        return (
          <AbilityButton
            key={ability.name}
            keyText={keyText}
            isActive={isActive}
            ability={ability}
            gradient={agentGradient}
            onClick={setSelectedAbility}
          />
        );
      })}
    </HStack>
  );
}
