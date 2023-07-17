import { Flex, Text } from '@chakra-ui/react';

interface StatProps {
  label: string;
  stat?: string | number;
}

export function Stat({ stat, label }: StatProps) {
  if (!stat) {
    return null;
  }

  return (
    <Flex w="full" justify="space-between">
      <Text color="gray.500">{label}:</Text>
      <Text fontWeight="bold">{stat}</Text>
    </Flex>
  );
}
