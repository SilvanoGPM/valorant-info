import { Box, BoxProps } from '@chakra-ui/react';
import SwiperType, { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { mountSx, MountSxParams } from './mountSx';

export interface SlideSettings {
  spaceBetween?: number;
  slidesPerView?: number;
  draggable?: boolean;
  navigation?: boolean;
  loop?: boolean;
  pagination?: {
    clickable?: boolean;
  };
  className?: string;
}

interface SliderProps extends BoxProps {
  settings: SlideSettings;
  swiperComponents?: MountSxParams;
  onInit?: (swiper: SwiperType) => void;
}

export const Slide = SwiperSlide;

export function Slider({
  settings,
  style,
  children,
  swiperComponents,
  onInit,
  ...props
}: SliderProps) {
  return (
    <Box
      as={Swiper}
      style={style}
      modules={[Navigation, Pagination, A11y]}
      sx={mountSx(swiperComponents)}
      onInit={(swiper: SwiperType) => onInit && onInit(swiper)}
      {...props}
      {...settings}
    >
      {children}
    </Box>
  );
}
