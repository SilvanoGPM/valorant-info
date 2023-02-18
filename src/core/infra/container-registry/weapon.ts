import { GetWeaponsUseCase } from '$core/app/use-cases/weapon/get-weapons-use-case';
import type { Container } from 'inversify';

import { Registry } from './registry';

export function bindWeaponUseCase(container: Container) {
  container.bind(Registry.GetWeapons).toDynamicValue((context) => {
    return new GetWeaponsUseCase(context.container.get(Registry.WeaponGateway));
  });
}
