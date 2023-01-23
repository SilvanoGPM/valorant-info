import { render, screen } from '@testing-library/react';

import { Main } from '.';

describe('<Main />', () => {
  test('should render the heading', () => {
    const { container } = render(<Main />);

    const expected = screen.getByRole('heading', { name: /next boilerplate/i });

    expect(expected).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
