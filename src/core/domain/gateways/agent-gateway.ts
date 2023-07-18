import { Agent } from '../entities/agent';

export abstract class AgentGateway {
  abstract getAll(): Promise<Agent[]>;
  abstract findById(id: string): Promise<Agent | null>;
  abstract findNumberOfAgent(agent: Agent): Promise<number>;
  abstract findByName(name: string): Promise<Agent | null>;
}
