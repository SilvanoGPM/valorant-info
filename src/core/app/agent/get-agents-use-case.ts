import { AgentGateway } from '$core/domain/gateways/agent-gateway';

export class GetAgentsUseCase {
  constructor(private agentGateway: AgentGateway) {}

  async execute() {
    const agents = await this.agentGateway.getAll();

    return { agents };
  }
}
