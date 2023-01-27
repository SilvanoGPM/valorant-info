import { container } from '.';
import { Registry } from './registry';

import { GetAgentsUseCase } from '$core/app/use-cases/agent/get-agents-use-case';
import { FindAgentByIdUseCase } from '$core/app/use-cases/agent/find-agent-by-id-use-case';
import { FindAgentByNameUseCase } from '$core/app/use-cases/agent/find-agent-by-name-use-case';

export function bindAgentUseCase() {
  container.bind(Registry.GetAgents).toDynamicValue((context) => {
    return new GetAgentsUseCase(context.container.get(Registry.AgentGateway));
  });

  container.bind(Registry.FindAgentById).toDynamicValue((context) => {
    return new FindAgentByIdUseCase(
      context.container.get(Registry.AgentGateway),
    );
  });

  container.bind(Registry.FindAgentByName).toDynamicValue((context) => {
    return new FindAgentByNameUseCase(
      context.container.get(Registry.AgentGateway),
    );
  });
}
