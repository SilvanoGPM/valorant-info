import { GetStaticProps } from 'next';

import type { GetWeaponsUseCase } from '$core/app/use-cases/weapon/get-weapons-use-case';
import { container, Registry } from '$core/infra/container-registry';
import {
  WeaponsTemplate,
  WeaponsTemplateProps,
} from '../templates/weapons-template';
import { Weapon } from '$core/domain/entities/weapon';

const getWeapons = container.get<GetWeaponsUseCase>(Registry.GetWeapons);

export default function Weapons(props: WeaponsTemplateProps) {
  return <WeaponsTemplate {...props} />;
}

export const getStaticProps: GetStaticProps<
  WeaponsTemplateProps
> = async () => {
  const { weapons } = await getWeapons.execute();

  const jsonWeapons = weapons.map((weapon) => {
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
