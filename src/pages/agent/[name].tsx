import { GetStaticPaths, GetStaticProps } from 'next';

import { AgentTemplate, AgentTemplateProps } from '$templates/agent-template';

import type { FindAgentByNameUseCase } from '$core/app/use-cases/agent/find-agent-by-name-use-case';
import { container, Registry } from '$core/infra/container-registry';

const findAgentByName = container.get<FindAgentByNameUseCase>(
  Registry.FindAgentByName,
);

export default function Agent(props: AgentTemplateProps) {
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

    return {
      props: { agent: agent.toJSON() },
      revalidate: 60 * 60 * 24 * 7, // one week
    };
  } catch (e) {
    return { notFound: true };
  }
};
