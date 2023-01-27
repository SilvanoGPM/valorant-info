import {
  type AgentsTemplateProps,
  AgentsTemplate,
} from '$templates/agents-template';

import type { GetAgentsUseCase } from '$core/app/use-cases/agent/get-agents-use-case';
import { container } from '$core/infra/container-registry';
import { Registry } from '$core/infra/container-registry/registry';
import { GetStaticProps } from 'next';
import { AgentMapper } from '$core/infra/mappers/agent-mapper';

const getAgents = container.get<GetAgentsUseCase>(Registry.GetAgents);

export default function Home(props: AgentsTemplateProps) {
  return <AgentsTemplate {...props} />;
}

export const getStaticProps: GetStaticProps<AgentsTemplateProps> = async () => {
  const { agents } = await getAgents.execute();

  const jsonAgents = agents.map(AgentMapper.toJSON);

  return {
    props: { agents: jsonAgents },
  };
};
