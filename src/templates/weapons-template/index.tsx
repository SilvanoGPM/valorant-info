import { Box, Center, Heading, Text } from '@chakra-ui/react';

import type { WeaponProps } from '$core/domain/entities/weapon';
import { glassmorphismContainer } from '$styles/tokens';
import { HighlightText } from '$components/highlight-text';
import { WeaponsList } from './components/weapons-list';

export interface WeaponsTemplateProps {
  weapons: WeaponProps[];
}

export function WeaponsTemplate({ weapons }: WeaponsTemplateProps) {
  return (
    <Center
      flex="1"
      w="full"
      p="8"
      rounded="lg"
      flexDir="column"
      sx={glassmorphismContainer({ showBorder: false })}
    >
      <Box textAlign="center" mb="8">
        <Heading mb="4">Armas</Heading>

        <Text maxW="650px" color="gray.300">
          Temos um arsenal com cerca de{' '}
          <HighlightText>{weapons.length} armas</HighlightText> diferentes, e
          cada situação pede um tipo específico. Temos armas brancas, pistolas,
          shotguns e rifles automáticos e semi automáticos para lidar com o que
          vier pela frente!
        </Text>
      </Box>

      <WeaponsList weapons={weapons} />
    </Center>
  );
}
