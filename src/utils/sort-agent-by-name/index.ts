import { AgentProps } from '$core/domain/entities/agent';

export function agentByName(a: AgentProps, b: AgentProps) {
  if (a.name < b.name) {
    return -1;
  }

  if (a.name > b.name) {
    return 1;
  }

  return 0;
}
