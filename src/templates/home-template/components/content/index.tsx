import { Flex, Heading } from '@chakra-ui/react';

import weaponsImg from '$assets/images/weapons.png';
import mapsImg from '$assets/images/maps.png';
import agentsImg from '$assets/images/agents.png';
import { Card } from './card';

export function Content() {
  return (
    <>
      <div data-scroll="content" />

      <Flex w="full" direction="column" mt="32">
        <Heading textAlign="center" mb="32">
          Nosso conteúdo
        </Heading>

        <Flex
          mb={{ base: '8rem', lg: '32' }}
          gap={{ base: '8rem', lg: '1rem' }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Card
            title="Armas"
            text="Decubra cada detalhe de suas armas."
            link="weapons"
            image={weaponsImg.src}
            imageProps={{ transform: 'rotate(30deg) translateY(25px)' }}
          />

          <Card
            title="Mapas"
            text="Entenda mais sobre os mapas."
            link="maps"
            image={mapsImg.src}
            imageProps={{
              clipPath:
                'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
            }}
          />
        </Flex>

        <Card
          title="Agentes"
          text="Conheça tudo sobre os agentes."
          link="agents"
          image={agentsImg.src}
        />
      </Flex>
    </>
  );
}
