interface GlassmorphismContainerProps {
  bg: string;
  blur?: string;
}

export function glassmorphismContainer(
  { bg, blur = '5px' }: GlassmorphismContainerProps = {
    bg: 'backgroundAlpha.300',
  },
) {
  return {
    '&': {
      backdropFilter: `blur(${blur})`,
      boxShadow: 'dark-lg',
      bg,
    },
  };
}

export const thinScrollbar = {
  '&': { scrollbarWidth: 'thin' },
  '&::-webkit-scrollbar ': { width: '9px' },
  '&::-webkit-scrollbar-track': { bg: 'transparent' },
  '&::-webkit-scrollbar-thumb': {
    bg: 'rgba(255, 255, 255, 0.5)',
    border: 'transparent',
  },
};
