import { type Ability, Agent } from '$core/domain/entities/agent';
import type { RecursivePartial } from '$utils/recursive-partial';
import type { Replace } from '$utils/replace';

export function makeAgent(
  agent: Replace<RecursivePartial<Agent>, { abilities?: Ability[] }> = {},
) {
  return new Agent({
    id: agent.id ?? 'test-id',
    name: agent.name ?? 'Test Agent',
    description: agent.description ?? 'Test agent description',
    images: {
      normal: agent.images?.normal ?? 'test-normal-image',
      small: agent.images?.small ?? 'test-small-image',
      bust: agent.images?.bust ?? 'test-butst-image',
      full: agent.images?.full ?? 'test-full-image',
      killfeed: agent.images?.killfeed ?? 'test-killfeed-image',
      background: {
        image: agent.images?.background?.image ?? 'test-background-image',
        gradient: agent.images?.background?.gradient ?? [
          'test-background-gradient',
        ],
      },
    },
    role: {
      id: agent.role?.id ?? 'test-role-id',
      name: agent.role?.name ?? 'Test Role',
      description: agent.role?.description ?? 'Test role description',
      icon: agent.role?.icon ?? 'test-role-icon',
    },
    abilities: agent.abilities ?? [
      {
        slot: 'Test-Slot',
        name: 'Test Ability',
        description: 'Test ability description',
        icon: 'test-ability-icon',
      },
    ],
  });
}
