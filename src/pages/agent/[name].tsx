import { GetStaticPaths, GetStaticProps } from 'next';

import { AgentTemplate, AgentTemplateProps } from '$templates/agent-template';

import type { FindAgentByNameUseCase } from '$core/app/use-cases/agent/find-agent-by-name-use-case';
import { GetAgentsUseCase } from '$core/app/use-cases/agent/get-agents-use-case';
import { container, Registry } from '$core/infra/container-registry';
import { Agent } from '$core/domain/entities/agent';
import { formatToURL } from '$utils/format-to-url';

const findAgentByName = container.get<FindAgentByNameUseCase>(
  Registry.FindAgentByName,
);

const getAgents = container.get<GetAgentsUseCase>(Registry.GetAgents);

export default function AgentPage(props: AgentTemplateProps) {
  return <AgentTemplate {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { agents } = await getAgents.execute();

  const paths = agents.map(({ name }) => ({
    params: { name: formatToURL(name) },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<AgentTemplateProps> = async ({
  params,
}) => {
  const { name } = params as { name: string };

  try {
    const { agent } = await findAgentByName.execute(name);

    const sortedAbilities = agent.abilities.sort((a) => {
      if (a.slot === 'Grenade') {
        return -1;
      }

      return 1;
    });

    const sortedAgent = new Agent({
      ...agent.toJSON(),
      abilities: sortedAbilities,
    });

    return {
      props: { agent: sortedAgent.toJSON() },
      revalidate: 60 * 60 * 24 * 7, // one week
    };
  } catch (e) {
    return { notFound: true };
  }
};
