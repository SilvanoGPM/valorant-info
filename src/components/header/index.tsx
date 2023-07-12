import { Flex, Icon } from '@chakra-ui/react';

import { ValorantIcon } from '$components/icons/valorant-icon';
import { Link } from '$components/link';

import { Navbar } from './navbar';

export function Header() {
  return (
    <Flex
      as="header"
      h="70px"
      w="full"
      bg="background.500"
      px="8"
      align="center"
      justify="space-between"
    >
      <Flex align="center">
        <Link
          shouldShowUnderline={false}
          href="/"
          fontSize="3xl"
          _hover={{}}
          mr="16"
        >
          <Icon as={ValorantIcon} />
        </Link>
      </Flex>

      <Navbar />
    </Flex>
  );
}
