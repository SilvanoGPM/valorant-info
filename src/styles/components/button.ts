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

    outline: {
      bg: 'brandAlpha.100',
      borderColor: 'brandAlpha.100',
      color: 'white',
      fontWeight: 'normal',

      _hover: {
        bg: 'brandAlpha.200',
        borderColor: 'brandAlpha.200',
      },

      _active: {
        bg: 'brandAlpha.300',
        borderColor: 'brandAlpha.300',
      },
    },
  },
});
