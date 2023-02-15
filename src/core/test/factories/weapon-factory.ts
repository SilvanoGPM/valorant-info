import { Weapon, type WeaponSkin } from '$core/domain/entities/weapon';
import type { RecursivePartial } from '$utils/recursive-partial';
import { Replace } from '$utils/replace';

export function makeWeapon(
  weapon: Replace<RecursivePartial<Weapon>, { skins?: WeaponSkin[] }> = {},
) {
  return new Weapon({
    id: weapon.id ?? 'test-id',
    name: weapon.name ?? 'test-name',

    images: {
      buy: weapon.images?.buy ?? 'test-buy-image',
      killfeed: weapon.images?.killfeed ?? 'test-killfeed-image',
    },

    shop: {
      cost: weapon.shop?.cost ?? 3000,

      category: {
        type: weapon.shop?.category?.type ?? 'test-category-type',
        text: weapon.shop?.category?.text ?? 'test-category-text',
      },
    },

    skins: weapon.skins ?? [],

    stats: {
      fireRate: weapon.stats?.fireRate ?? 10,
      magazineSize: weapon.stats?.magazineSize ?? 20,
      runSpeedMultiplier: weapon.stats?.runSpeedMultiplier ?? 1,
      firstBulletAccurancy: weapon.stats?.firstBulletAccurancy ?? 1,
    },
  });
}
