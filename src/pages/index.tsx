import { GetStaticProps } from 'next';

import {
  type AgentsTemplateProps,
  AgentsTemplate,
} from '$templates/agents-template';

import type { GetAgentsUseCase } from '$core/app/use-cases/agent/get-agents-use-case';
import { container, Registry } from '$core/infra/container-registry';

const getAgents = container.get<GetAgentsUseCase>(Registry.GetAgents);

export default function Home(props: AgentsTemplateProps) {
  return <AgentsTemplate {...props} />;
}

export const getStaticProps: GetStaticProps<AgentsTemplateProps> = async () => {
  const { agents } = await getAgents.execute();

  const jsonAgents = agents.map((agent) => agent.toJSON());

  return {
    props: { agents: jsonAgents },
  };
};
