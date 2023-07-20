import { screen } from '@testing-library/react';

import { renderWithProvider } from '$utils/tests/render-with-provider';
import { BackgroundImage } from '.';

describe('<BackgroundImage />', () => {
  it('should render a background image', () => {
    renderWithProvider(<BackgroundImage />);

    expect(screen.getByTestId('background-image')).toBeInTheDocument();
  });
});
