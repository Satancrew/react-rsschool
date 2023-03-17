import App from './App';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe('App', () => {
  it('should have headline', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Home/i)).toBeInTheDocument;
  });
});
