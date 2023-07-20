import { fireEvent, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import { renderWithProvider } from '$utils/tests/render-with-provider';

import { Link } from '.';

describe('<Link />', () => {
  it('should render a next anchor', () => {
    renderWithProvider(<Link href="test">Test Next Link</Link>);

    const link = screen.getByText(/test next link/i);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'test');
  });

  it('should navigates to correct page when clicked', () => {
    mockRouter.push('/');

    renderWithProvider(<Link href="test">Test Next Link</Link>, {
      wrapper: MemoryRouterProvider,
    });

    const link = screen.getByText(/test next link/i);

    fireEvent.click(link);

    expect(mockRouter.asPath).toEqual('/test');
  });
});
