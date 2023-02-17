import { Weapon } from '$core/domain/entities/weapon';
import type { WeaponGateway } from '$core/domain/gateways/weapon-gateway';

export class InMemoryWeaponGateway implements WeaponGateway {
  constructor(public maps: Weapon[] = []) {}

  async getAll() {
    return this.maps;
  }
}
