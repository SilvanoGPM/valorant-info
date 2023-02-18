import { GetStaticProps } from 'next';

import type { WeaponProps } from '$core/domain/entities/weapon';
import type { GetWeaponsUseCase } from '$core/app/use-cases/weapon/get-weapons-use-case';
import { container, Registry } from '$core/infra/container-registry';

const getWeapons = container.get<GetWeaponsUseCase>(Registry.GetWeapons);

interface WeaponsProps {
  weapons: WeaponProps[];
}

export default function Weapons({ weapons }: WeaponsProps) {
  console.log(weapons);

  return <></>;
}

export const getStaticProps: GetStaticProps<WeaponsProps> = async () => {
  const { weapons } = await getWeapons.execute();

  const jsonWeapons = weapons.map((weapon) => weapon.toJSON());

  return {
    props: { weapons: jsonWeapons },
  };
};
