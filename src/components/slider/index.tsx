import { Box, BoxProps } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

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
}

export const Slide = SwiperSlide;

export function Slider({
  settings,
  style,
  children,
  swiperComponents,
  ...props
}: SliderProps) {
  return (
    <Box
      as={Swiper}
      style={style}
      modules={[Navigation, Pagination, A11y]}
      sx={mountSx(swiperComponents)}
      {...props}
      {...settings}
    >
      {children}
    </Box>
  );
}
