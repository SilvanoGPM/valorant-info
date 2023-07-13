import { AgentProps } from '$core/domain/entities/agent';
import { Box, Center, Image, Text, VStack } from '@chakra-ui/react';

interface BiographyProps {
  agent: AgentProps;
}

export function Biography({ agent }: BiographyProps) {
  return (
    <VStack flex="1" p="4" spacing="8" pos="relative">
      <Box pos="absolute" boxSize="350px" top="0" right="0" zIndex="-1">
        <Image src={agent.images.background.image} filter="brightness(0.1)" />
      </Box>

      <Box boxSize="150px" alignSelf="start">
        <Image src={agent.images.normal} />
      </Box>

      <Box>
        <Text textTransform="uppercase" fontWeight="bold">
          Descrição
        </Text>

        <Text mt="2" color="gray.500">
          {agent.description}
        </Text>
      </Box>

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
    </VStack>
  );
}
