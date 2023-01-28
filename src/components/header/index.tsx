import {
  Box,
  Button,
  Flex,
  Icon,
  Link as ExternalLink,
} from '@chakra-ui/react';

import { AiFillGithub } from 'react-icons/ai';

import { ValorantIcon } from '$components/icons/valorant-icon';
import { Link } from './link';

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
        <Link href="/" fontSize="3xl" _hover={{}} mr="16">
          <Icon as={ValorantIcon} />
        </Link>

        <Navbar />
      </Flex>

      <Flex align="center">
        <ExternalLink
          href="https://github.com/SilvanoGPM/valorant-info"
          target="_blank"
          mr="4"
        >
          <Icon as={AiFillGithub} fontSize="3xl" />
        </ExternalLink>

        <ExternalLink href="https://playvalorant.com/pt-br" target="_blank">
          <Button>Jogue agora</Button>
        </ExternalLink>
      </Flex>
    </Flex>
  );
}
