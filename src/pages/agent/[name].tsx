import { GetStaticPaths, GetStaticProps } from 'next';

import { AgentTemplate, AgentTemplateProps } from '$templates/agent-template';

import type { FindAgentByNameUseCase } from '$core/app/use-cases/agent/find-agent-by-name-use-case';
import { container, Registry } from '$core/infra/container-registry';
import { Agent } from '$core/domain/entities/agent';

const findAgentByName = container.get<FindAgentByNameUseCase>(
  Registry.FindAgentByName,
);

export default function AgentPage(props: AgentTemplateProps) {
  return <AgentTemplate {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' };
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
