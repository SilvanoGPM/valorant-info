import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

interface RenderWithProviderOptions {
  wrapper?: React.JSXElementConstructor<{ children: React.ReactElement }>;
}

export function renderWithProvider(
  children: JSX.Element,
  options: RenderWithProviderOptions = {},
) {
  // Workaround for "TypeError: window.matchMedia is not a function"
  // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  return render(<ChakraProvider>{children}</ChakraProvider>, options);
}
