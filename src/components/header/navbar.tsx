import { HStack } from '@chakra-ui/react';

import { Link } from './link';

export function Navbar() {
  return (
    <HStack as="nav">
      <Link href="/">Agentes</Link>
      <Link href="/weapons">Armas</Link>
      <Link href="/maps">Mapas</Link>
    </HStack>
  );
}
