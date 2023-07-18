import { GetStaticProps } from 'next';

import {
  type AgentsTemplateProps,
  AgentsTemplate,
} from '$templates/agents-template';

import type { GetAgentsUseCase } from '$core/app/use-cases/agent/get-agents-use-case';
import { container, Registry } from '$core/infra/container-registry';
import { agentByName } from '$utils/sort-agent-by-name';

const getAgents = container.get<GetAgentsUseCase>(Registry.GetAgents);

export default function Agents(props: AgentsTemplateProps) {
  return <AgentsTemplate {...props} />;
}

export const getStaticProps: GetStaticProps<AgentsTemplateProps> = async () => {
  const { agents } = await getAgents.execute();

  const jsonAgents = agents.map((agent) => agent.toJSON()).sort(agentByName);

  return {
    props: { agents: jsonAgents },
  };
};
