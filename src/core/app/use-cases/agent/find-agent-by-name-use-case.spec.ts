import { AgentNotFoundError } from '$core/app/errors/agent-not-found';
import { Agent } from '$core/domain/entities/agent';
import { makeAgent } from '$core/test/factories/agent-factory';
import { InMemoryAgentGateway } from '$core/test/gateways/in-memory-agent-gateway';

import { FindAgentByNameUseCase } from './find-agent-by-name-use-case';

describe('Find agent by name use case', () => {
  it('should be able to find an agent by name', async () => {
    const agentGateway = new InMemoryAgentGateway([makeAgent()]);

    const findByName = new FindAgentByNameUseCase(agentGateway);

    const { agent } = await findByName.execute(makeAgent().name);

    expect(agent).toBeInstanceOf(Agent);
  });

  it('should not be able to find an agent when it does not exists', async () => {
    const agentGateway = new InMemoryAgentGateway();

    const findById = new FindAgentByNameUseCase(agentGateway);

    expect(() => {
      return findById.execute('some-name');
    }).rejects.toThrow(AgentNotFoundError);
  });
});
