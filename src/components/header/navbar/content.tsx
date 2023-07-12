import { Spacer, Stack } from '@chakra-ui/react';
import { Additional } from './additional';

import { NavLink } from './link';

interface NavbarContentProps {
  isMobile: boolean;
}

export function NavbarContent({ isMobile }: NavbarContentProps) {
  return (
    <Stack
      flex="1"
      as="nav"
      direction={isMobile ? 'column' : 'row'}
      spacing={isMobile ? 8 : 0}
      alignItems="center"
    >
      <NavLink href="/" shouldMatchExactHref isMobile={isMobile}>
        Agentes
      </NavLink>

      <NavLink href="/weapons" isMobile={isMobile}>
        Armas
      </NavLink>

      <NavLink href="/maps" isMobile={isMobile}>
        Mapas
      </NavLink>

      {!isMobile && <Spacer />}

      <Additional />
    </Stack>
  );
}
