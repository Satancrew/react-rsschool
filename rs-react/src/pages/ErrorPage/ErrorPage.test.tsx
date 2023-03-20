import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('should have headline', () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Home/i)).toBeInTheDocument;
  });
});
