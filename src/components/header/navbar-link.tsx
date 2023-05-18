import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps extends ChakraLinkProps {
  shouldShowUnderline?: boolean;
  shouldMatchExactHref?: boolean;
}

export function NavLink({
  href,
  shouldMatchExactHref = false,
  shouldShowUnderline = true,
  ...props
}: NavLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref && (asPath === href || asPath === props.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(href)) || asPath.startsWith(String(props.as)))
  ) {
    isActive = true;
  }

  const bg = isActive ? 'background.300' : 'transparent';

  return (
    <ChakraLink
      as={NextLink}
      href={href}
      textTransform="uppercase"
      fontWeight="600"
      fontSize="1xl"
      px="4"
      py="1"
      rounded="lg"
      pos="relative"
      bg={bg}
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
          width: isActive ? 'full' : '0',
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
