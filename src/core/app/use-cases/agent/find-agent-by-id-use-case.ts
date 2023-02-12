import { AgentNotFoundError } from '$core/app/errors/agent-not-found';
import type { AgentGateway } from '$core/domain/gateways/agent-gateway';

export class FindAgentByIdUseCase {
  constructor(private agentGateway: AgentGateway) {}

  async execute(id: string) {
    const agent = await this.agentGateway.findById(id);

    if (!agent) {
      throw new AgentNotFoundError();
    }

    return { agent };
  }
}
