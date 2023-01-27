import { Flex, Text, VStack } from '@chakra-ui/react';

import type { AgentProps } from '$core/domain/entities/agent';

import { PreviewImage } from './preview-image';
import { Role } from './role';
import { Abilities } from './abilities';

interface AgentDetailsProps {
  agent: AgentProps;
  showImage: boolean;
  onImageLoad: () => void;
}

export function AgentDetails({
  agent,
  showImage,
  onImageLoad,
}: AgentDetailsProps) {
  return (
    <Flex align="start">
      <PreviewImage
        src={agent.images.full}
        showImage={showImage}
        onLoad={onImageLoad}
      />

      <VStack align="start" spacing="8">
        <Role agent={agent} />

        <Text maxW="400px" textAlign="justify">
          {agent.description}
        </Text>

        <Abilities agent={agent} />
      </VStack>
    </Flex>
  );
}
