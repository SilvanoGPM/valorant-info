import { SimpleGrid } from '@chakra-ui/react';

import { WeaponSlider } from './weapon-slider';
import { WeaponsTemplateProps } from '../..';

export function WeaponsList({ weapons }: WeaponsTemplateProps) {
  return (
    <SimpleGrid
      w="full"
      spacing={4}
      minChildWidth={{ base: '200px', sm: '420px' }}
      justifyItems="center"
    >
      {weapons.map((weapon) => (
        <WeaponSlider key={weapon.id} weapon={weapon} />
      ))}
    </SimpleGrid>
  );
}
