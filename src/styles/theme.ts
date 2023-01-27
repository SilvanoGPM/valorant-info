import { extendTheme } from '@chakra-ui/react';

import { Tooltip } from './components/tooltip';

export const theme = extendTheme({
  components: {
    Tooltip,
  },

  colors: {
    brand: {
      '500': '#ff4655',
    },

    background: {
      '500': '#111111',
    },

    backgroundAlpha: {
      '900': 'rgba(17, 17, 17, 0.9)',
      '800': 'rgba(17, 17, 17, 0.8)',
      '700': 'rgba(17, 17, 17, 0.7)',
      '600': 'rgba(17, 17, 17, 0.6)',
      '500': 'rgba(17, 17, 17, 0.5)',
      '400': 'rgba(17, 17, 17, 0.4)',
      '300': 'rgba(17, 17, 17, 0.3)',
      '200': 'rgba(17, 17, 17, 0.2)',
      '100': 'rgba(17, 17, 17, 0.1)',
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
