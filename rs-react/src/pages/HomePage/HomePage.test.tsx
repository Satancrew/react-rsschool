import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { HomePage } from './HomePage';
import store from '@/store/store';
import { Provider } from 'react-redux';

describe('HomePage', () => {
  it('should have headline', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument;
  });
});
