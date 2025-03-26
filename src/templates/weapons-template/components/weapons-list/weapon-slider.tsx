import { Flex, Input, Spinner } from '@chakra-ui/react';

import { Slide, Slider, SlideSettings } from '$components/slider';
import { WeaponProps } from '$core/domain/entities/weapon';

import { useRef, useState } from 'react';
import Swiper from 'swiper';
import { WeaponCard } from './weapon-card';

interface WeaponSliderProps {
  weapon: WeaponProps;
}

export function WeaponSlider({ weapon }: WeaponSliderProps) {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sliderRef = useRef<Swiper | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const sliderSettings: SlideSettings = {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    draggable: true,
    loop: true,
    pagination: undefined,
  };

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const search = e.target.value;

    setSearch(search);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (!search) {
      sliderRef.current?.slideTo(1);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    debounceRef.current = setTimeout(() => {
      sliderRef.current?.slideNext();
      setIsLoading(false);
    }, 1500);
  }

  const skins = weapon.skins.filter((skin) =>
    skin.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Slider
      onInit={(swiper) => {
        sliderRef.current = swiper;
      }}
      key={weapon.id}
      settings={sliderSettings}
      h="full"
      w="full"
      className="relative"
    >
      <Flex
        position="absolute"
        zIndex="1"
        top="0"
        left="0"
        right="0"
        justify="center"
        pt="4"
        align="center"
        pointerEvents="auto"
        gap="4"
      >
        {isLoading && <Spinner color="brand.500" />}

        <Input
          value={search}
          type="search"
          rounded="full"
          placeholder="Filtrar skins..."
          borderColor="brand.500"
          onChange={handleSearchChange}
          maxW="50%"
          focusBorderColor="brand.500"
          // Deixar o botão interno do input do tipo search com a cor vermelha
          sx={{
            '::-webkit-search-cancel-button': {
              filter:
                'invert(22%) sepia(97%) saturate(7480%) hue-rotate(357deg) brightness(98%) contrast(114%)',
            },
          }}
          _placeholder={{
            color: 'brand.500',
            opacity: 0.4,
          }}
        />
      </Flex>

      <Slide>
        <WeaponCard
          name={weapon.name}
          helpMessage={`${skins.length} skins ${
            search ? `"${search}" disponíveis` : 'disponíveis'
          }`}
          image={weapon.images.buy}
          price={weapon.shop.cost}
          stats={weapon.stats}
        />
      </Slide>

      {skins.map((skin) => (
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
