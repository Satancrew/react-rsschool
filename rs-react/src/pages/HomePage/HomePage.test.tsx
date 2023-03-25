import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('should have headline', () => {
    render(<HomePage products={[]} />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Home/i)).toBeInTheDocument;
  });
});
