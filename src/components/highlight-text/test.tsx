import { screen } from '@testing-library/react';

import { renderWithProvider } from '$utils/tests/render-with-provider';

import { HighlightText } from '.';

describe('<HighlightText />', () => {
  it('should render text', () => {
    renderWithProvider(<HighlightText>Test Text</HighlightText>);

    const testText = screen.getByText(/test text/i);

    expect(testText).toBeInTheDocument();
  });
});
