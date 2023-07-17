import { Center, Flex, Image, Text, VStack } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';
import credsImg from '$assets/images/creds.png';
import { WeaponStats } from '$core/domain/entities/weapon';

interface WeaponCardProps {
  name: string;
  image: string;
  price: number;
  stats: WeaponStats;
}

export function WeaponCard({ name, image, price, stats }: WeaponCardProps) {
  return (
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

      <Center>
        <Image mr="1" src={credsImg.src} boxSize="2" filter="grayscale(100%)" />
        <Text color="gray.500">{price}</Text>
      </Center>

      <VStack w="full" mt="8">
        {stats?.fireRate && (
          <Flex w="full" justify="space-between">
            <Text color="gray.500">Taxa de disparos:</Text>
            <Text fontWeight="bold">{stats.fireRate}</Text>
          </Flex>
        )}

        {stats?.magazineSize && (
          <Flex w="full" justify="space-between">
            <Text color="gray.500">Capacidade da munição:</Text>
            <Text fontWeight="bold">{stats.magazineSize}</Text>
          </Flex>
        )}

        {stats?.runSpeedMultiplier && (
          <Flex w="full" justify="space-between">
            <Text color="gray.500">Multiplicador de velocidade:</Text>
            <Text fontWeight="bold">{stats.runSpeedMultiplier}x</Text>
          </Flex>
        )}

        {stats?.firstBulletAccurancy && (
          <Flex w="full" justify="space-between">
            <Text color="gray.500">Precisão da primeira bala:</Text>
            <Text fontWeight="bold">{stats.firstBulletAccurancy}</Text>
          </Flex>
        )}
      </VStack>
    </Center>
  );
}
