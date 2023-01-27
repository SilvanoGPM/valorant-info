import { container } from '.';
import { HttpAgentGateway } from '../gateways/http-agent-gateway';
import { Registry } from './registry';

export function bindGateways() {
  container.bind(Registry.AgentGateway).toConstantValue(new HttpAgentGateway());
}
