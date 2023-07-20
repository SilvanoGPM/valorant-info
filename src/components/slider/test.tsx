import { screen } from '@testing-library/react';

import { renderWithProvider } from '$utils/tests/render-with-provider';

import { Slide, Slider } from '.';

describe('<Slider />', () => {
  it('should render a slider', () => {
    renderWithProvider(
      <Slider settings={{ slidesPerView: 1 }}>
        <Slide>Slide 1</Slide>
        <Slide>Slide 2</Slide>
      </Slider>,
    );

    const slide1 = screen.getByText(/slide 1/i);
    const slide2 = screen.getByText(/slide 2/i);

    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
  });
});
