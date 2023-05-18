import { HStack } from '@chakra-ui/react';

import { NavLink } from './navbar-link';

export function Navbar() {
  return (
    <HStack as="nav">
      <NavLink href="/" shouldMatchExactHref>
        Agentes
      </NavLink>

      <NavLink href="/weapons">Armas</NavLink>
      <NavLink href="/maps">Mapas</NavLink>
    </HStack>
  );
}
