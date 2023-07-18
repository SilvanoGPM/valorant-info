import { Agent } from '$core/domain/entities/agent';
import { AgentGateway } from '$core/domain/gateways/agent-gateway';
import { formatToURL } from '$utils/format-to-url';
import { agentByName } from '$utils/sort-agent-by-name';

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

const url = String(process.env.AGENTS_URL);

type FindByPredicate = (agent: RawAgent) => boolean;

export class HttpAgentGateway implements AgentGateway {
  private cachedAgents: Agent[] = [];

  async getAll() {
    const response = await http<GetAllResponse>({ url });

    const agents = response.data.data;
    const mappedAgents = agents.map(AgentMapper.toAgent).sort(agentByName);

    this.cachedAgents = mappedAgents;

    return mappedAgents;
  }

  async findById(id: string) {
    return this.findBy((agent) => agent.uuid === id);
  }

  async findByName(name: string) {
    return this.findBy((agent) => formatToURL(agent.displayName) === name);
  }

  async findNumberOfAgent(agent: Agent) {
    if (this.cachedAgents.length === 0) {
      this.cachedAgents = await this.getAll();
    }

    return (
      this.cachedAgents.findIndex((innerAgent) => innerAgent.id === agent.id) +
      1
    );
  }

  private async findBy(predicate: FindByPredicate) {
    const response = await http<GetAllResponse>({ url });

    const agents = response.data.data;

    const rawAgent = agents.find(predicate);

    if (!rawAgent) {
      return null;
    }

    return AgentMapper.toAgent(rawAgent);
  }
}
