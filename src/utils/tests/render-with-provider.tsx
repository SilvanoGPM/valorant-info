import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

export function renderWithProvider(children: JSX.Element) {
  return render(<ChakraProvider>{children}</ChakraProvider>);
}
