import { screen } from '@testing-library/react';

import { renderWithProvider } from '$utils/tests/render-with-provider';
import { Header } from '.';

jest.mock('next/router', () => require('next-router-mock'));

describe('<Header />', () => {
  it('should render a header with a logo and navbar', () => {
    renderWithProvider(<Header />);

    const header = screen.getByTestId('header');

    const agentsLink = screen.getByRole('link', {
      name: /agentes/i,
    });

    const mapsLink = screen.getByRole('link', {
      name: /mapas/i,
    });

    const weaponsLink = screen.getByRole('link', {
      name: /armas/i,
    });

    const playNowLink = screen.getByRole('link', {
      name: /jogue agora/i,
    });

    expect(header).toBeInTheDocument();

    expect(agentsLink).toBeInTheDocument();
    expect(agentsLink).toHaveAttribute('href', '/agents');

    expect(mapsLink).toBeInTheDocument();
    expect(mapsLink).toHaveAttribute('href', '/maps');

    expect(weaponsLink).toBeInTheDocument();
    expect(weaponsLink).toHaveAttribute('href', '/weapons');

    expect(weaponsLink).toBeInTheDocument();

    expect(playNowLink).toBeInTheDocument();
    expect(playNowLink).toHaveAttribute('target', '_blank');
    expect(playNowLink).toHaveAttribute(
      'href',
      'https://playvalorant.com/pt-br',
    );
  });
});
