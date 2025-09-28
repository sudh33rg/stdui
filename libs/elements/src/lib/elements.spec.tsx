import { render } from '@testing-library/react';

import StudioUiElements from './elements';

describe('StudioUiElements', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StudioUiElements />);
    expect(baseElement).toBeTruthy();
  });
});
