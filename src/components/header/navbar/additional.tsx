import { Flex, Link, Icon, Button } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

export function Additional() {
  return (
    <Flex align="center">
      <Link
        aria-label="Github"
        href="https://github.com/SilvanoGPM/valorant-info"
        target="_blank"
        mr="4"
      >
        <Icon as={AiFillGithub} fontSize="3xl" />
      </Link>

      <Link href="https://playvalorant.com/pt-br" target="_blank">
        <Button variant="gradient" size="sm">
          Jogue agora
        </Button>
      </Link>
    </Flex>
  );
}
