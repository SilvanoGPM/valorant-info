export type Slot = 'Ability1' | 'Ability2' | 'Grenade' | 'Ultimate' | 'Passive';

export const keys: Record<Slot, { key: string; text: string }> = {
  Ability1: { key: 'Q', text: 'Habilidade' },
  Ability2: { key: 'E', text: 'Habilidade' },
  Grenade: { key: 'C', text: 'Utilitário' },
  Ultimate: { key: 'X', text: 'Ultimate' },
  Passive: { key: '-', text: 'Passiva' },
};

export function getKey(key: string) {
  return keys[key as Slot];
}
