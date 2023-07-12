import { Agent } from '$core/domain/entities/agent';
import { AgentGateway } from '$core/domain/gateways/agent-gateway';
import { formatToURL } from '$utils/format-to-url';

type FindByPredicate = (agent: Agent) => boolean;

export class InMemoryAgentGateway implements AgentGateway {
  constructor(public agents: Agent[] = []) {}

  async getAll(): Promise<Agent[]> {
    return this.agents;
  }

  async findById(id: string) {
    return this.findBy((agent) => agent.id === id);
  }

  async findByName(name: string) {
    return this.findBy((agent) => formatToURL(agent.name) === name);
  }

  private async findBy(predicate: FindByPredicate) {
    const agent = this.agents.find(predicate);

    if (!agent) {
      return null;
    }

    return agent;
  }
}
