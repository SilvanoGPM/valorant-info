import { HighlightText } from '$components/highlight-text';
import { MapProps } from '$core/domain/entities/map';
import { glassmorphismContainer } from '$styles/tokens';
import {
  AbsoluteCenter,
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

export interface MapsTemplateProps {
  maps: MapProps[];
}

export function MapsTemplate({ maps }: MapsTemplateProps) {
  return (
    <Center
      flex="1"
      w="full"
      p="8"
      rounded="lg"
      flexDir="column"
      sx={glassmorphismContainer({ showBorder: false })}
    >
      <Box textAlign="center" mb="8">
        <Heading mb="4">Mapas</Heading>

        <Text maxW="650px" color="gray.300">
          Com um conjunto de <HighlightText>{maps.length} mapas</HighlightText>{' '}
          exclusivos à sua disposição, você terá a oportunidade de aprimorar
          suas habilidades de mira ou participar de emocionantes partidas
          competitivas.
        </Text>
      </Box>

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
    </Center>
  );
}
