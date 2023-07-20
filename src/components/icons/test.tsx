import { renderWithProvider } from '$utils/tests/render-with-provider';

import { ValorantIcon } from './valorant-icon';

describe('Custom Icons', () => {
  it('should render a custom valorant svg', () => {
    const { container } = renderWithProvider(<ValorantIcon />);

    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
