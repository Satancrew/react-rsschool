import { App } from './App';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

describe('App', () => {
  it('should have headline', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument;
  });
});
