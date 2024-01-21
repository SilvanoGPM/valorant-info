import { Ability } from '$core/domain/entities/agent';

export type Slot = 'Ability1' | 'Ability2' | 'Grenade' | 'Ultimate' | 'Passive';

export const keys: Record<
  Slot,
  { key: string; text: string; sortWeight: number }
> = {
  Grenade: { key: 'C', text: 'Utilitário', sortWeight: 0 },
  Ability1: { key: 'Q', text: 'Habilidade', sortWeight: 1 },
  Ability2: { key: 'E', text: 'Habilidade', sortWeight: 2 },
  Ultimate: { key: 'X', text: 'Ultimate', sortWeight: 3 },
  Passive: { key: '-', text: 'Passiva', sortWeight: 10 },
};

export function getKey(key: string) {
  return keys[key as Slot];
}

export function abilityByName(a: Ability) {
  return getKey(a.slot).sortWeight;
}
