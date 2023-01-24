import { AgentGateway } from '$core/domain/gateways/agent-gateway';

export class GetAgentsUseCase {
  constructor(private agentGateway: AgentGateway) {}

  async execute() {
    return this.agentGateway.getAll();
  }
}
