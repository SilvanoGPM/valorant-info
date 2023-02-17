import { Weapon } from '$core/domain/entities/weapon';
import { makeWeapon } from '$core/test/factories/weapon-factory';
import { InMemoryWeaponGateway } from '$core/test/gateways/in-memory-weapon-gateway';

import { GetWeaponsUseCase } from './get-weapons-use-case';

describe('Get weapons use case', () => {
  it('should be able to get all weapons', async () => {
    const mapGateway = new InMemoryWeaponGateway([makeWeapon()]);

    const getMaps = new GetWeaponsUseCase(mapGateway);

    const { weapons } = await getMaps.execute();

    expect(weapons).toHaveLength(1);
    expect(weapons[0]).toBeInstanceOf(Weapon);
  });
});
