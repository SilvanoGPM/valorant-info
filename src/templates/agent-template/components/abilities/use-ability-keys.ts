import { useEffect } from 'react';

import { Ability, AgentProps } from '$core/domain/entities/agent';

import { keys, Slot } from '$utils/sort-ability-by-name';

export function useAbilityKeys(
  agent: AgentProps,
  setSelectedAbility: (ability: Ability) => void,
) {
  const abilities = agent.abilities.map((ability) => {
    const key = keys[ability.slot as Slot].key;

    return { key, ability };
  });

  useEffect(() => {
    function onKeyPress(event: KeyboardEvent) {
      const keyPressed = event.key.toUpperCase();

      const foundAbility = abilities.find(
        (ability) => ability.key === keyPressed,
      );

      if (foundAbility) {
        setSelectedAbility(foundAbility.ability);
      }
    }

    window.addEventListener('keypress', onKeyPress);

    return () => {
      window.removeEventListener('keypress', onKeyPress);
    };
  }, [abilities, setSelectedAbility]);
}
