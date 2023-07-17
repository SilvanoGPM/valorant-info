import { Center, Image, Text, VStack } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';
import credsImg from '$assets/images/creds.png';
import { WeaponStats } from '$core/domain/entities/weapon';
import { Slide } from '$components/slider';

import { Stat } from './stat';

interface WeaponCardProps {
  name: string;
  image: string;
  price: number;
  stats: WeaponStats;
}

export function WeaponCard({ name, image, price, stats }: WeaponCardProps) {
  return (
    <Slide>
      <Center
        flexDir="column"
        h="500px"
        w="full"
        px="4"
        rounded="lg"
        sx={glassmorphismContainer()}
      >
        <Image src={image} alt={name} objectFit="cover" maxH="200px" />

        <Text
          mt="8"
          textAlign="center"
          lineHeight="1"
          fontWeight="bold"
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        >
          {name}
        </Text>

        <Center mt="1">
          <Image
            mr="1"
            src={credsImg.src}
            boxSize="2"
            filter="grayscale(100%)"
          />
          <Text color="gray.500">{price}</Text>
        </Center>

        <VStack w="full" mt="8">
          <Stat label="Taxa de disparos" stat={stats?.fireRate} />
          <Stat label="Capacidade da munição" stat={stats?.magazineSize} />

          <Stat
            label="Multiplicador de velocidade"
            stat={stats?.runSpeedMultiplier && `${stats?.runSpeedMultiplier}x`}
          />

          <Stat
            label="Precisão da primeira bala"
            stat={stats?.firstBulletAccurancy}
          />
        </VStack>
      </Center>
    </Slide>
  );
}
