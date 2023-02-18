import type { WeaponGateway } from '$core/domain/gateways/weapon-gateway';

import { WeaponMapper } from '../mappers/weapon-mapper';
import { http } from '../services/http';

export interface RawSkinModification {
  uuid: string;
  displayName: string;
  displayIcon?: string;
  streamedVideo?: string;
}

export interface RawWeaponSkin {
  uuid: string;
  displayName: string;
  displayIcon: string;
  chromas: RawSkinModification[];
  levels: RawSkinModification[];
}

export interface RawWeapon {
  uuid: string;
  displayName: string;
  category: string;
  displayIcon: string;
  killStreamIcon: string;

  weaponStats: {
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    firstBulletAccurancy: number;
  };

  shopData: {
    cost?: number;
    category?: string;
    categoryText?: string;
  };

  skins: RawWeaponSkin[];
}

interface GetAllResponse {
  status: number;
  data: RawWeapon[];
}

const url = String(process.env.WEAPONS_URL);

export class HttpWeaponGateway implements WeaponGateway {
  async getAll() {
    const response = await http<GetAllResponse>({ url });

    const weapons = response.data.data;

    return weapons.map(WeaponMapper.toWeapon);
  }
}
