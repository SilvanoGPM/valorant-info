import { GetStaticProps } from 'next';

import type { GetWeaponsUseCase } from '$core/app/use-cases/weapon/get-weapons-use-case';
import { container, Registry } from '$core/infra/container-registry';
import { Weapon } from '$core/domain/entities/weapon';

import {
  WeaponsTemplate,
  WeaponsTemplateProps,
} from '../templates/weapons-template';

const getWeapons = container.get<GetWeaponsUseCase>(Registry.GetWeapons);

export default function Weapons(props: WeaponsTemplateProps) {
  return <WeaponsTemplate {...props} />;
}

export const getStaticProps: GetStaticProps<
  WeaponsTemplateProps
> = async () => {
  const { weapons } = await getWeapons.execute();

  const jsonWeapons = weapons
    .sort((a, b) => {
      if (a.name === 'Confronto' || b.name === 'Confronto') {
        return -1;
      }

      const categoryOrder = ['Pistols', 'SMGs', 'Shotguns', 'Rifles'];
      const categoryAIndex = categoryOrder.indexOf(a.shop.category.type!);
      const categoryBIndex = categoryOrder.indexOf(b.shop.category.type!);

      if (categoryAIndex === categoryBIndex) {
        return 0;
      } else if (categoryAIndex === -1) {
        return 1;
      } else if (categoryBIndex === -1) {
        return -1;
      } else {
        return categoryAIndex - categoryBIndex;
      }
    })
    .map((weapon) => {
      const skins = weapon.skins.filter(
        (skin) =>
          !(skin.name.includes('Padrão') || skin.name.includes('aleatória')),
      );

      return new Weapon({ ...weapon.toJSON(), skins }).toJSON();
    });

  return {
    props: { weapons: jsonWeapons },
  };
};
