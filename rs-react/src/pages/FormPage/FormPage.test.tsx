import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { FormPage } from './FormPage';

describe('ErrorPage', () => {
  it('should have headline', () => {
    render(<FormPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Home/i)).toBeInTheDocument;
  });
});
