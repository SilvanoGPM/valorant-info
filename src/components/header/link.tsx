import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

import NextLink from 'next/link';

export function Link({ href, ...props }: ChakraLinkProps) {
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
      _hover={{
        textDecor: 'none',
        bg: 'background.300',
      }}
      {...props}
    />
  );
}
