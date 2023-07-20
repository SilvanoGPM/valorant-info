import { renderWithProvider } from '$utils/tests/render-with-provider';
import { screen } from '@testing-library/react';

import { ExternalLink } from '.';

describe('<ExternalLink />', () => {
  it('should render anchor to external site', () => {
    renderWithProvider(
      <ExternalLink href="https://www.example.com">
        External Link Test
      </ExternalLink>,
    );

    const externalLink = screen.getByText(/external link test/i);

    expect(externalLink).toBeInTheDocument();
    expect(externalLink).toHaveAttribute('target', '_blank');
    expect(externalLink).toHaveAttribute('rel', 'noopener');
    expect(externalLink).toHaveAttribute('href', 'https://www.example.com');
  });
});
