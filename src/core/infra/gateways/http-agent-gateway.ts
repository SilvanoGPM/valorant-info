import { AgentGateway } from '$core/domain/gateways/agent-gateway';

import { AgentMapper } from '../mappers/agent-mapper';
import { http } from '../services/http';

export interface RawRole {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface RawAbility {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface RawAgent {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  role: RawRole;
  abilities: RawAbility[];
}

interface GetAllResponse {
  status: number;
  data: RawAgent[];
}

type FindByPredicate = (agent: RawAgent) => boolean;

export class HttpAgentGateway implements AgentGateway {
  async getAll() {
    const response = await http<GetAllResponse>({ url: './data/agents.json' });

    const agents = response.data.data;

    return agents.map(AgentMapper.toAgent);
  }

  async findById(id: string) {
    return this.findBy((agent) => agent.uuid === id);
  }

  async findByName(name: string) {
    return this.findBy(
      (agent) =>
        agent.displayName.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
  }

  private async findBy(predicate: FindByPredicate) {
    const response = await http<GetAllResponse>({ url: './data/agents.json' });

    const agents = response.data.data;

    const rawAgent = agents.find(predicate);

    if (!rawAgent) {
      return null;
    }

    return AgentMapper.toAgent(rawAgent);
  }
}
