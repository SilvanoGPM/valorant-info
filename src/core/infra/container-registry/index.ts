import 'reflect-metadata';

import { Container } from 'inversify';

import { bindGateways } from './gateways';
import { bindAgentUseCase } from './agent';
import { bindMapUseCase } from './map';
import { bindWeaponUseCase } from './weapon';

export { Registry } from './registry';

export const container = new Container();

bindGateways(container);
bindAgentUseCase(container);
bindMapUseCase(container);
bindWeaponUseCase(container);
