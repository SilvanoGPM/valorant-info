import { AgentNotFoundError } from '$core/app/errors/agent-not-found';
import { Agent } from '$core/domain/entities/agent';
import { makeAgent } from '$core/test/factories/agent-factory';
import { InMemoryAgentGateway } from '$core/test/gateways/in-memory-agent-gateway';

import { FindAgentByIdUseCase } from './find-agent-by-id-use-case';

describe('Find agent by id use case', () => {
  it('should be able to find an agent by id', async () => {
    const agentGateway = new InMemoryAgentGateway([makeAgent()]);

    const findById = new FindAgentByIdUseCase(agentGateway);

    const { agent } = await findById.execute(makeAgent().id);

    expect(agent).toBeInstanceOf(Agent);
  });

  it('should not be able to find an agent when it does not exists', async () => {
    const agentGateway = new InMemoryAgentGateway([makeAgent()]);

    const findById = new FindAgentByIdUseCase(agentGateway);

    expect(() => {
      return findById.execute('some-id');
    }).rejects.toThrow(AgentNotFoundError);
  });
});
