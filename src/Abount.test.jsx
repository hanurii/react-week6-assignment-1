import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  const { getByText } = render((
    <AboutPage />
  ));

  expect(getByText('헤더')).not.toBeNull();
});
