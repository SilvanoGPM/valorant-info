import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

interface RenderWithProviderOptions {
  wrapper?: React.JSXElementConstructor<{ children: React.ReactElement }>;
}

export function renderWithProvider(
  children: JSX.Element,
  options: RenderWithProviderOptions = {},
) {
  return render(<ChakraProvider>{children}</ChakraProvider>, options);
}
