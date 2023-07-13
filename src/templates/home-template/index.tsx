import {
  AbsoluteCenter,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';
import { AiFillEye } from 'react-icons/ai';
import { HighlightText } from '$components/highlight-text';

import agentImg from '$assets/images/agent.png';
import weaponsImg from '$assets/images/weapons.png';
import mapsImg from '$assets/images/maps.png';
import agentsImg from '$assets/images/agents.png';
import Link from 'next/link';
import { ScrollButton } from '$components/scroll-button';

export function HomeTemplate() {
  return (
    <Center
      flex="1"
      w="full"
      p="8"
      rounded="lg"
      flexDir="column"
      sx={glassmorphismContainer({ showBorder: false })}
    >
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
            Transforme-se em um mestre no{' '}
            <HighlightText>Valorant</HighlightText> através do aprendizado!
          </Heading>

          <Text maxW="600px" textAlign={{ base: 'center', md: 'start' }}>
            Afinal, informação é poder, então veja os dados sobre os agentes,
            mapas e armas e torne-se um jogador implacável.
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

        <Center pos="relative">
          <AbsoluteCenter
            zIndex="-1"
            boxSize="100px"
            bg="brand.500"
            pos="absolute"
            filter="blur(100px)"
          />

          <Image
            src={agentImg.src}
            alt="Agente Breach"
            boxSize={{ base: '300px', lg: '500px' }}
            objectFit="cover"
          />
        </Center>
      </Flex>

      <div data-scroll="content" />

      <Flex w="full" direction="column" mt="32">
        <Heading textAlign="center" mb="32">
          Nosso conteúdo
        </Heading>

        <Flex
          mb={{ base: '4rem', lg: '32' }}
          gap={{ base: '4rem', lg: '1rem' }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Center
            w="full"
            flexDir="column"
            borderColor="brandAlpha.100"
            borderWidth="1px"
            rounded="lg"
            p="8"
            pos="relative"
            h="300px"
          >
            <Image
              src={weaponsImg.src}
              w="350px"
              objectFit="contain"
              transform="translateY(-20px) rotate(30deg)"
            />

            <Center flexDir="column" mb="16">
              <Heading>Armas</Heading>
              <Text color="gray.500">Decubra cada detalhe de suas armas.</Text>

              <Link href="/weapons">
                <Button size="lg" variant="outline" mt="8">
                  Visualizar
                </Button>
              </Link>
            </Center>
          </Center>

          <Center
            w="full"
            flexDir="column"
            borderColor="brandAlpha.100"
            borderWidth="1px"
            rounded="lg"
            p="8"
            pos="relative"
            h="300px"
          >
            <Image
              src={mapsImg.src}
              maxW="250px"
              objectFit="contain"
              transform="translateY(-20px)"
              clipPath="polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
            />

            <Center flexDir="column" mb="16">
              <Heading>Mapas</Heading>
              <Text color="gray.500">Entenda mais sobre os mapas.</Text>

              <Link href="/maps">
                <Button size="lg" variant="outline" mt="8">
                  Visualizar
                </Button>
              </Link>
            </Center>
          </Center>
        </Flex>

        <Center
          w="full"
          flexDir="column"
          borderColor="brandAlpha.100"
          borderWidth="1px"
          rounded="lg"
          p="8"
          pos="relative"
          h="300px"
        >
          <Image
            src={agentsImg.src}
            w="350px"
            objectFit="contain"
            transform="translateY(-50px)"
          />

          <Center flexDir="column" mb="16">
            <Heading>Agentes</Heading>
            <Text color="gray.500">Conheça tudo sobre os agentes.</Text>

            <Link href="/agents">
              <Button size="lg" variant="outline" mt="8">
                Visualizar
              </Button>
            </Link>
          </Center>
        </Center>
      </Flex>
    </Center>
  );
}
