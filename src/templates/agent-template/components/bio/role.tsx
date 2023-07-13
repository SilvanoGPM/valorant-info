import { Box, Center, Image, Text } from '@chakra-ui/react';

import { BiographyProps } from '.';

export function Role({ agent }: BiographyProps) {
  return (
    <Box>
      <Center
        as={Text}
        textTransform="uppercase"
        fontWeight="bold"
        justifyContent="start"
      >
        {agent.role.name}{' '}
        <Image
          display="inline-block"
          src={agent.role.icon}
          alt={agent.role.name}
          w="4"
          h="4"
          ml="2"
        />
      </Center>

      <Text mt="2" color="gray.500">
        {agent.role.description}
      </Text>
    </Box>
  );
}
