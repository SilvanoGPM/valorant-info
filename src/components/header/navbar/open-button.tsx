import { IconButton, Icon } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

import { useUIStore } from '$stores/ui-store';

export function NavbarOpenButton() {
  const { openNavbar } = useUIStore();

  return (
    <IconButton
      aria-label="Abre a navbar no mobile"
      icon={<Icon as={AiOutlineMenu} />}
      colorScheme="blackAlpha"
      onClick={openNavbar}
    />
  );
}
