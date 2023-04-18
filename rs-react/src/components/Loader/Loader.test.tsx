import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Loader from './Loader';
import React from 'react';

describe('Loader', () => {
  it('renders notification', () => {
    render(<Loader />);
    const notification = screen.getAllByText('');
    expect(notification).toBeInTheDocument;
  });
});
