import { Agent } from '$core/domain/entities/agent';

import type {
  RawAgent,
  RawRole,
  RawAbility,
} from '../gateways/http-agent-gateway';

export class AgentMapper {
  static toJSON(agent: Agent) {
    return {
      id: agent.id,
      name: agent.name,
      description: agent.description,
      images: agent.images,
      role: agent.role,
      abilities: agent.abilities,
    };
  }

  static toAgent(rawAgent: RawAgent) {
    return new Agent({
      id: rawAgent.uuid,
      name: rawAgent.displayName,
      description: rawAgent.description,

      images: {
        normal: rawAgent.displayIcon,
        small: rawAgent.displayIconSmall,
        bust: rawAgent.bustPortrait,
        full: rawAgent.fullPortrait,
        killfeed: rawAgent.killfeedPortrait,
        background: {
          image: rawAgent.background,
          gradient: rawAgent.backgroundGradientColors,
        },
      },

      role: AgentMapper.mapRole(rawAgent.role),
      abilities: AgentMapper.mapAbilities(rawAgent.abilities),
    });
  }

  private static mapRole(rawRole: RawRole) {
    return {
      id: rawRole.uuid,
      name: rawRole.displayName,
      description: rawRole.description,
      icon: rawRole.displayIcon,
    };
  }

  private static mapAbilities(rawAbilities: RawAbility[]) {
    return rawAbilities.map((ability) => ({
      slot: ability.slot,
      name: ability.displayName,
      description: ability.description,
      icon: ability.displayIcon,
    }));
  }
}
