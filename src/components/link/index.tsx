import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/next-js';

export interface LinkProps extends ChakraLinkProps {
  shouldShowUnderline?: boolean;
}

export function Link({
  href,
  shouldShowUnderline = true,
  ...props
}: LinkProps) {
  return (
    <ChakraLink
      href={href}
      textTransform="uppercase"
      fontWeight="600"
      fontSize="1xl"
      px="4"
      py="1"
      rounded="lg"
      pos="relative"
      _hover={{
        textDecor: 'none',
        bg: 'background.300',
      }}
      sx={{
        '&::after': {
          content: "''",
          display: 'block',
          pos: 'absolute',
          bottom: '-2',
          left: '0',
          bg: 'brand.500',
          width: '0',
          h: '4px',
          transition: '0.2s ease-in-out width',
          rounded: 'lg',
        },

        '&:hover::after': {
          width: shouldShowUnderline ? 'full' : '0',
        },
      }}
      {...props}
    />
  );
}
