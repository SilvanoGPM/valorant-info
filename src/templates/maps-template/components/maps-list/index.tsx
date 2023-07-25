import {
  AbsoluteCenter,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import { MapsTemplateProps } from '$templates/maps-template';

export function MapsList({ maps }: MapsTemplateProps) {
  return (
    <SimpleGrid
      w="full"
      spacing={4}
      minChildWidth={{ base: '200px', sm: '400px' }}
      justifyItems="center"
    >
      {maps.map((map) => (
        <Center
          key={map.id}
          pos="relative"
          borderColor="whiteAlpha.100"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
        >
          <AbsoluteCenter zIndex="1" textAlign="center">
            <Heading fontWeight="black">{map.name}</Heading>
            <Text color="gray.300">{map.coordinates}</Text>
          </AbsoluteCenter>

          <Image
            src={map.images.splash}
            alt={map.name}
            w="full"
            filter="brightness(50%)"
            transition="0.2s ease-in-out"
            _hover={{ transform: 'scale(1.2)' }}
          />
        </Center>
      ))}
    </SimpleGrid>
  );
}
