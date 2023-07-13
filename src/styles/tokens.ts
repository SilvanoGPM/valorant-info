interface GlassmorphismContainerProps {
  bg?: string;
  blur?: string;
  showBorder?: boolean;
}

export function glassmorphismContainer(
  {
    bg = 'backgroundAlpha.300',
    blur = '5px',
    showBorder = true,
  }: GlassmorphismContainerProps = {
    bg: 'backgroundAlpha.300',
  },
) {
  return {
    '&': {
      backdropFilter: `blur(${blur})`,
      borderWidth: showBorder ? 1 : 0,
      borderColor: 'whiteAlpha.300',
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
