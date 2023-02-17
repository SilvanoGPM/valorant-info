import type { Weapon } from '../entities/weapon';

export abstract class WeaponGateway {
  abstract getAll(): Promise<Weapon[]>;
}
