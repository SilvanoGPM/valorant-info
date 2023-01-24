export class AgentNotFoundError extends Error {
  constructor() {
    super('Agent not found');
  }
}
