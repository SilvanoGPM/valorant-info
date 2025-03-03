import { Center, Image, Text, VStack } from '@chakra-ui/react';

import credsImg from '$assets/images/creds.png';
import { WeaponStats } from '$core/domain/entities/weapon';
import { glassmorphismContainer } from '$styles/tokens';

import { useEffect, useRef } from 'react';
import { Stat } from './stat';

interface WeaponCardProps {
  name: string;
  helpMessage?: string;
  image: string;
  price: number;
  stats: WeaponStats;
}

export function WeaponCard({
  name,
  helpMessage,
  image,
  price,
  stats,
}: WeaponCardProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          imageRef.current?.setAttribute('src', image);
        }
      }
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <Center
      flexDir="column"
      h={{ base: '500px', md: '600px' }}
      w="full"
      px="4"
      rounded="lg"
      sx={glassmorphismContainer()}
    >
      <Image
        ref={imageRef}
        alt={name}
        objectFit="cover"
        maxH="200px"
        loading="lazy"
      />

      <Text
        mt="8"
        textAlign="center"
        lineHeight="1"
        fontWeight="bold"
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
      >
        {name}
      </Text>

      {helpMessage && (
        <Text color="gray.500" textAlign="center">
          {helpMessage}
        </Text>
      )}

      <Center mt="1">
        <Image mr="1" src={credsImg.src} boxSize="2" filter="grayscale(100%)" />
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
  );
}
