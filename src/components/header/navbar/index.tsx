import { Center, Slide, useBreakpointValue } from '@chakra-ui/react';

import { useUIStore } from '$stores/ui-store';

import { NavbarContent } from './content';
import { NavbarCloseButton } from './close-button';
import { NavbarOpenButton } from './open-button';

export function Navbar() {
  const { navbarIsOpen } = useUIStore();

  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isMobileVersion) {
    return (
      <>
        <Center
          as={Slide}
          direction="top"
          in={navbarIsOpen}
          pos="absolute"
          top="0"
          left="0"
          w="100vw"
          overflow="hidden"
          h="100vh"
          bg="background.500"
          zIndex="popover"
        >
          <NavbarCloseButton />
          <NavbarContent isMobile />
        </Center>

        <NavbarOpenButton />
      </>
    );
  }

  return <NavbarContent isMobile={false} />;
}
