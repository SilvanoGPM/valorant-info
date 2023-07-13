import { Box, Text } from '@chakra-ui/react';

import { BiographyProps } from '.';

export function Description({ agent }: BiographyProps) {
  return (
    <Box>
      <Text textTransform="uppercase" fontWeight="bold">
        Descrição
      </Text>

      <Text mt="2" color="gray.500">
        {agent.description}
      </Text>
    </Box>
  );
}
