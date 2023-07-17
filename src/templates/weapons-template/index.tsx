import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import type { WeaponProps } from '$core/domain/entities/weapon';
import { glassmorphismContainer } from '$styles/tokens';
import { Slide, Slider, SlideSettings } from '$components/slider';
import { WeaponCard } from './components/weapon-card';
import { HighlightText } from '$components/highlight-text';

export interface WeaponsTemplateProps {
  weapons: WeaponProps[];
}

export function WeaponsTemplate({ weapons }: WeaponsTemplateProps) {
  const sliderClassName = useBreakpointValue({
    base: 'show-buttons',
    lg: '',
  });

  const sliderSettings: SlideSettings = {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    draggable: true,
    loop: true,
    pagination: {
      clickable: true,
    },
    className: sliderClassName,
  };

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

      <SimpleGrid
        w="full"
        spacing={4}
        minChildWidth={{ base: '200px', sm: '400px' }}
        justifyItems="center"
      >
        {weapons.map((weapon) => (
          <Slider
            key={weapon.id}
            settings={sliderSettings}
            style={{ height: '100%', width: '100%' }}
          >
            <Slide>
              <WeaponCard
                name={weapon.name}
                image={weapon.images.buy}
                price={weapon.shop.cost}
                stats={weapon.stats}
              />
            </Slide>

            {weapon.skins.map((skin) => (
              <Slide key={skin.id}>
                <WeaponCard
                  name={skin.name}
                  image={skin.image}
                  price={weapon.shop.cost}
                  stats={weapon.stats}
                />
              </Slide>
            ))}
          </Slider>
        ))}
      </SimpleGrid>
    </Center>
  );
}
