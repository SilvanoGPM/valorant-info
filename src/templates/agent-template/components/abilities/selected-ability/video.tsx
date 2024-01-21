import { useRef } from 'react';

import {
  AbsoluteCenter,
  Box,
  HStack,
  Icon,
  IconButton,
  Spinner,
  Text,
  useBoolean,
} from '@chakra-ui/react';

import {
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
  BsFullscreen,
} from 'react-icons/bs';

import { ExternalLink } from '$components/external-link';
import { useShimmerAnimation } from '$hooks/use-shimmer-animation';
import { getAbilityVideoSrc, Key } from '$utils/get-ability-video-src';

interface VideoProps {
  abilityKey: string;
  agentName: string;
}

export function Video({ abilityKey, agentName }: VideoProps) {
  const [muted, mutedActions] = useBoolean(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const shimmerAnimation = useShimmerAnimation();

  if (abilityKey === '-') {
    return null;
  }

  function handleFullScreen() {
    videoRef.current?.requestFullscreen.bind(videoRef.current)();
  }

  const src = getAbilityVideoSrc({
    agentName,
    key: abilityKey as Key,
  });

  return (
    <Box pos="relative" w="full">
      <AbsoluteCenter>
        <Spinner pos="absolute" size="lg" color="brand.500" zIndex="-1" />
      </AbsoluteCenter>

      <Box
        w="full"
        h={{ base: '200px', md: '300px', lg: '400px' }}
        pos="relative"
        overflow="hidden"
        borderBottomColor="whiteAlpha.100"
        borderBottomWidth="1px"
      >
        <HStack pos="absolute" zIndex="1" right="2" top="2">
          <IconButton
            aria-label={muted ? 'Ativar som' : 'Desativar som'}
            colorScheme="blackAlpha"
            onClick={mutedActions.toggle}
            icon={
              <Icon as={muted ? BsFillVolumeMuteFill : BsFillVolumeUpFill} />
            }
          />

          <IconButton
            aria-label="Tela cheia"
            colorScheme="blackAlpha"
            onClick={handleFullScreen}
            icon={<Icon as={BsFullscreen} />}
          />
        </HStack>

        <Box
          as="video"
          w="full"
          h="full"
          objectFit="cover"
          autoPlay
          loop
          muted={muted}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={videoRef as any}
          src={src}
          {...shimmerAnimation}
        />
      </Box>

      <Text color="gray.500" textAlign="right" mt="4" pr="4">
        Video retirado do site{' '}
        <ExternalLink href="https://blitz.gg/valorant">blitz.gg</ExternalLink>
      </Text>
    </Box>
  );
}
