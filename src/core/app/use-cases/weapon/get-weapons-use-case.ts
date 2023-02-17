import { WeaponGateway } from '$core/domain/gateways/weapon-gateway';

export class GetWeaponsUseCase {
  constructor(private weaponGateway: WeaponGateway) {}

  async execute() {
    const weapons = await this.weaponGateway.getAll();

    return { weapons };
  }
}
