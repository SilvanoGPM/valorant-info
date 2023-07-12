import { AgentProps } from '$core/domain/entities/agent';

export interface AgentTemplateProps {
  agent: AgentProps;
}

export function AgentTemplate({ agent }: AgentTemplateProps) {
  return <>{agent.name}</>;
}
