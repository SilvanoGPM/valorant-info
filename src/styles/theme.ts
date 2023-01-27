import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      '500': '#ff4655',
    },

    background: {
      '500': '#111111',
    },
  },

  styles: {
    global: {
      body: {
        color: 'white',
        bgColor: 'background.500',
      },

      'h1, h2, h3, h4, h5, h6': {
        textTransform: 'uppercase',
        fontWeight: 'black',
      },
    },
  },
});
