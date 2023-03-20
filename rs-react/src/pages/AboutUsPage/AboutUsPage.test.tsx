import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { AboutUsPage } from './AboutUsPage';

describe('AboutUsPage', () => {
  it('should have headline', () => {
    render(<AboutUsPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Home/i)).toBeInTheDocument;
  });
});
