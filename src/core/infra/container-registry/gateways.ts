import type { Container } from 'inversify';

import { HttpAgentGateway } from '../gateways/http-agent-gateway';
import { HttpMapGateway } from '../gateways/http-map-gateway';
import { Registry } from './registry';

export function bindGateways(container: Container) {
  container.bind(Registry.AgentGateway).toConstantValue(new HttpAgentGateway());
  container.bind(Registry.MapGateway).toConstantValue(new HttpMapGateway());
}
