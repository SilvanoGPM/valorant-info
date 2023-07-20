import { useState } from 'react';
import { useEventListener } from '@chakra-ui/react';

import { Slide, Slider, SlideSettings } from '$components/slider';
import { WeaponProps } from '$core/domain/entities/weapon';

import { WeaponCard } from './weapon-card';

interface WeaponSliderProps {
  weapon: WeaponProps;
}

const MIN_WIDTH_TO_SHOW_PAGINATION = 700;

export function WeaponSlider({ weapon }: WeaponSliderProps) {
  const [showPagination, setShowPagination] = useState(true);

  useEventListener('resize', () => {
    setShowPagination(window.screen.width > MIN_WIDTH_TO_SHOW_PAGINATION);
  });

  const sliderSettings: SlideSettings = {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    draggable: true,
    loop: true,
    pagination: showPagination
      ? {
          clickable: true,
        }
      : undefined,
  };

  return (
    <Slider key={weapon.id} settings={sliderSettings} h="full" w="full">
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
  );
}
