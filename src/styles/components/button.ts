import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  defaultProps: {
    colorScheme: 'brand',
  },

  variants: {
    gradient: {
      bgGradient: 'linear(to-r, brand.900, orange.500)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      rounded: 'xl',
      color: 'black',

      _hover: {
        bgGradient: 'linear(to-r, brand.900, orange.500)',
        filter: 'brightness(1.2)',
      },
    },
  },
});
