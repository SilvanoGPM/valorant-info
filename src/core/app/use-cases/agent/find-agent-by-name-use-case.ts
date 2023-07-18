import { AgentNotFoundError } from '$core/app/errors/agent-not-found';
import type { AgentGateway } from '$core/domain/gateways/agent-gateway';
import { formatToURL } from '$utils/format-to-url';

export class FindAgentByNameUseCase {
  constructor(private agentGateway: AgentGateway) {}

  async execute(name: string) {
    const agent = await this.agentGateway.findByName(formatToURL(name));

    if (!agent) {
      throw new AgentNotFoundError();
    }

    const number = await this.agentGateway.findNumberOfAgent(agent);

    return { agent, number };
  }
}
