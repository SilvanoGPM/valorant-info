import { screen } from '@testing-library/react';

import { renderWithProvider } from '$utils/tests/render-with-provider';

import { SplashScreen } from '.';

describe('<SplashScreen />', () => {
  it('should render a spinner with loader id and a text', () => {
    const { container } = renderWithProvider(<SplashScreen />);

    const spinner = container.querySelector('#loader');
    const text = screen.getByText('Carregando...');

    expect(spinner).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
