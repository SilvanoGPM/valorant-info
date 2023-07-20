import { Button, ButtonProps } from '@chakra-ui/react';

import { scrollToElement } from '$utils/scroll-to-element';

interface ScrollButtonProps extends ButtonProps {
  dataScroll: string;
  beforeScroll?: () => void;
}

export function ScrollButton({
  dataScroll,
  beforeScroll,
  children,
  ...props
}: ScrollButtonProps) {
  function handleScroll() {
    beforeScroll?.();
    scrollToElement(dataScroll);
  }

  return (
    <Button onClick={handleScroll} {...props}>
      {children}
    </Button>
  );
}
