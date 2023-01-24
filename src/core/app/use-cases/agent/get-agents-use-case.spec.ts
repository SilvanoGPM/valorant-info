import { Agent } from '$core/domain/entities/agent';
import { makeAgent } from '$core/test/factories/agent-factory';
import { InMemoryAgentGateway } from '$core/test/gateways/in-memory-agent-gateway';

import { GetAgentsUseCase } from './get-agents-use-case';

describe('Get agents use case', () => {
  it('should be able to get all agents', async () => {
    const agentGateway = new InMemoryAgentGateway([makeAgent()]);

    const getAgents = new GetAgentsUseCase(agentGateway);

    const { agents } = await getAgents.execute();

    expect(agents).toHaveLength(1);
    expect(agents[0]).toBeInstanceOf(Agent);
  });
});
