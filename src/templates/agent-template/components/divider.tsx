import { Box } from '@chakra-ui/react';

export function Divider() {
  return (
    <Box w="1px" bg="whiteAlpha.300" display={{ base: 'none', lg: 'block' }} />
  );
}
