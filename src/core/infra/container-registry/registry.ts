export const Registry = {
  AgentGateway: Symbol.for('AgentGateway'),
  MapGateway: Symbol.for('MapGateway'),
  WeaponGateway: Symbol.for('WeaponGateway'),

  GetAgents: Symbol.for('GetAgents'),
  FindAgentById: Symbol.for('FindAgentById'),
  FindAgentByName: Symbol.for('FindAgentByName'),

  GetMaps: Symbol.for('GetMaps'),

  GetWeapons: Symbol.for('GetWeapons'),
};
