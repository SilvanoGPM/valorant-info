import { AgentGateway } from '$core/domain/gateways/agent-gateway';

export class FindByNameUseCase {
  constructor(private agentGateway: AgentGateway) {}

  async execute(name: string) {
    const agent = await this.agentGateway.findByName(name);

    return { agent };
  }
}
