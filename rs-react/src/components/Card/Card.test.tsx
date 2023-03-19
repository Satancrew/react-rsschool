import { render } from '@testing-library/react';
import React from 'react';
import Card from './Card';

describe('Card test', () => {
  test('should show card', () => {
    render(
      <Card
        key={5}
        id={5}
        title={'title'}
        price={400}
        image={'some img string'}
        rating={{ rate: 5, count: 20 }}
        category={'some category'}
      />
    );
  });
});
