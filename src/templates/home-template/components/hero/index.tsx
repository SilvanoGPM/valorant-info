import { Flex, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { AiFillEye } from 'react-icons/ai';

import { HighlightText } from '$components/highlight-text';
import { ScrollButton } from '$components/scroll-button';

import { AgentImage } from './agent-image';

export function Hero() {
  return (
    <Flex
      justify="space-around"
      w="full"
      direction={{ base: 'column', lg: 'row' }}
    >
      <VStack
        spacing="8"
        justify="center"
        align={{ base: 'center', md: 'start' }}
      >
        <Heading
          fontWeight="bold"
          textTransform="none"
          maxW="600px"
          textAlign={{ base: 'center', md: 'start' }}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
        >
          Transforme-se em um mestre no <HighlightText>Valorant</HighlightText>{' '}
          através do aprendizado!
        </Heading>

        <Text maxW="600px" textAlign={{ base: 'center', md: 'start' }}>
          Afinal, informação é poder, então veja dados sobre os agentes, mapas e
          armas e torne-se um jogador implacável.
        </Text>

        <ScrollButton
          dataScroll="content"
          variant="outline"
          size="lg"
          rightIcon={<Icon as={AiFillEye} />}
        >
          Visualizar contéudo
        </ScrollButton>
      </VStack>

      <AgentImage />
    </Flex>
  );
}
