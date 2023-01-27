import 'reflect-metadata';
import { Container } from 'inversify';

import { bindGateways } from './gateways';
import { bindAgentUseCase } from './agent';

export const container = new Container();

bindGateways();
bindAgentUseCase();
