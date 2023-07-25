import { Box, Center, Heading, Text } from '@chakra-ui/react';

import { HighlightText } from '$components/highlight-text';
import { MapProps } from '$core/domain/entities/map';
import { glassmorphismContainer } from '$styles/tokens';

import { MapsList } from './components/maps-list';

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

      <MapsList maps={maps} />
    </Center>
  );
}
