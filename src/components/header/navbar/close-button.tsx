import { IconButton, Icon } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

import { useUIStore } from '$stores/ui-store';

export function NavbarCloseButton() {
  const { closeNavbar } = useUIStore();

  return (
    <IconButton
      aria-label="Fecha a navbar no mobile"
      icon={<Icon as={AiOutlineClose} />}
      pos="absolute"
      right="4"
      top="4"
      variant="unstyled"
      fontSize="4xl"
      onClick={closeNavbar}
      display={{ base: 'block', lg: 'none' }}
    />
  );
}
