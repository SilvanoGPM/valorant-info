import { Weapon } from '$core/domain/entities/weapon';

import type {
  RawSkinModification,
  RawWeapon,
  RawWeaponSkin,
} from '../gateways/http-weapon-gateway';

export class WeaponMapper {
  static toWeapon(rawWeapon: RawWeapon) {
    return new Weapon({
      id: rawWeapon.uuid,
      name: rawWeapon.displayName,

      images: {
        buy: rawWeapon.displayIcon,
        killfeed: rawWeapon.killStreamIcon,
      },

      stats: rawWeapon.weaponStats,

      shop: {
        cost: rawWeapon.shopData?.cost || 0,

        category: {
          type: rawWeapon.shopData?.category || null,
          text: rawWeapon.shopData?.categoryText || null,
        },
      },

      skins: WeaponMapper.mapSkins(rawWeapon.skins),
    });
  }

  private static mapSkins(rawSkins: RawWeaponSkin[]) {
    return rawSkins.map((skin) => ({
      id: skin.uuid,
      name: skin.displayName,
      image: skin.displayIcon,
      chromas: WeaponMapper.mapModification(rawSkins),
      levels: WeaponMapper.mapModification(rawSkins),
    }));
  }

  private static mapModification(rawModification: RawSkinModification[]) {
    return rawModification.map((modification) => ({
      id: modification.uuid,
      name: modification.displayName,
      image: modification.displayIcon || null,
      video: modification.streamedVideo || null,
    }));
  }
}
