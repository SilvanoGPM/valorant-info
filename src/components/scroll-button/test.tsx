import { fireEvent, screen } from '@testing-library/react';

import { renderWithProvider } from '$utils/tests/render-with-provider';

import { ScrollButton } from '.';

describe('<ScrollButton />', () => {
  it('should render a button', () => {
    renderWithProvider(
      <ScrollButton dataScroll="test-scroll-button">
        Test Scroll Button
      </ScrollButton>,
    );

    const scrollButton = screen.getByText(/test scroll button/i);

    expect(scrollButton).toBeInTheDocument();
  });

  it('should call beforeScroll when click', () => {
    const beforeScroll = jest.fn();

    renderWithProvider(
      <ScrollButton dataScroll="test-scroll-button" beforeScroll={beforeScroll}>
        Test Scroll Button
      </ScrollButton>,
    );

    const scrollButton = screen.getByText(/test scroll button/i);

    fireEvent.click(scrollButton);

    expect(beforeScroll).toHaveBeenCalledTimes(1);
  });
});
