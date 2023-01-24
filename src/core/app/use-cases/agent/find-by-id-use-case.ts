import { AgentNotFoundError } from '$core/app/errors/agent-not-found';
import { AgentGateway } from '$core/domain/gateways/agent-gateway';

export class FindByIdUseCase {
  constructor(private agentGateway: AgentGateway) {}

  async execute(id: string) {
    const agent = await this.agentGateway.findById(id);

    if (!agent) {
      throw new AgentNotFoundError();
    }

    return { agent };
  }
}
