import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  ImageProps,
  Link,
  Text,
} from '@chakra-ui/react';

interface CardProps {
  title: string;
  text: string;
  link: string;
  image: string;
  imageProps?: ImageProps;
}

export function Card({ title, text, link, image, imageProps }: CardProps) {
  return (
    <Flex
      w="full"
      flexDir="column"
      align="center"
      justify="end"
      borderColor="brandAlpha.100"
      borderWidth="1px"
      rounded="lg"
      p="8"
      pos="relative"
      h="300px"
    >
      <Image
        src={image}
        w={{ base: '200px', sm: '350px' }}
        objectFit="contain"
        pos="absolute"
        top={{ base: '-20%', sm: '-30%' }}
        {...imageProps}
      />

      <Center flexDir="column" textAlign="center">
        <Heading>{title}</Heading>
        <Text color="gray.500">{text}</Text>

        <Link href={`/${link}`}>
          <Button size="lg" variant="outline" mt="8">
            Visualizar
          </Button>
        </Link>
      </Center>
    </Flex>
  );
}
