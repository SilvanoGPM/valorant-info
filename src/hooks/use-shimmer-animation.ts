import { keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import { SyntheticEvent } from 'react';

export function useShimmerAnimation(imageBg?: string) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const shimmerAnimation = keyframes`
  from {
    background-position: -40rem 0;
  }

  to {
    background-position: 40rem 0;
  }
  `;

  const animation = prefersReducedMotion
    ? undefined
    : `${shimmerAnimation} 1s linear infinite forwards`;

  return {
    animation,
    bgSize: '80rem 14rem',
    bgColor: '#232424',
    bgGradient:
      'linear(to-r, #232424 0%, #1c1c1c 20%, #292828 40%, #292828 100% )',

    onLoad: (
      event: SyntheticEvent<
        HTMLImageElement | HTMLVideoElement | HTMLDivElement,
        Event
      >,
    ) => (event.currentTarget.style.background = imageBg || '#232424'),
  };
}
