import { useBreakpointValue } from '@chakra-ui/react';

import { Slide, Slider, SlideSettings } from '$components/slider';
import { WeaponProps } from '$core/domain/entities/weapon';

import { WeaponCard } from './weapon-card';

interface WeaponSliderProps {
  weapon: WeaponProps;
}

export function WeaponSlider({ weapon }: WeaponSliderProps) {
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
  );
}
