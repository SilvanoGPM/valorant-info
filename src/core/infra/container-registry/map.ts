import type { Container } from 'inversify';

import { GetMapsUseCase } from '$core/app/use-cases/map/get-maps-use-case';

import { Registry } from './registry';

export function bindMapUseCase(container: Container) {
  container.bind(Registry.GetMaps).toDynamicValue((context) => {
    return new GetMapsUseCase(context.container.get(Registry.MapGateway));
  });
}
