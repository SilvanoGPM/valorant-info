import { AbsoluteCenter, Box, Spinner, Text } from '@chakra-ui/react';

import { getAbilityVideoSrc } from '$utils/get-ability-video-src';
import { ExternalLink } from '$components/external-link';

interface VideoProps {
  abilityKey: string;
  agentName: string;
}

export function Video({ abilityKey, agentName }: VideoProps) {
  if (abilityKey === '-') {
    return null;
  }

  const src = getAbilityVideoSrc({
    agentName,
    key: abilityKey,
  });

  return (
    <Box pos="relative" w="full">
      <AbsoluteCenter>
        <Spinner pos="absolute" size="lg" color="brand.500" zIndex="-1" />
      </AbsoluteCenter>

      <Box
        w="full"
        h={{ base: 'auto', lg: '400px' }}
        pos="relative"
        overflow="hidden"
        borderBottomColor="whiteAlpha.100"
        borderBottomWidth="1px"
      >
        <video autoPlay loop muted src={src} />
      </Box>

      <Text color="gray.500" textAlign="right" mt="4" pr="4">
        Video retirado do site{' '}
        <ExternalLink href="https://blitz.gg/valorant">blitz.gg</ExternalLink>
      </Text>
    </Box>
  );
}
