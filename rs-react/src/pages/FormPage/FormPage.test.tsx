import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { FormPage } from './FormPage';
import store from '@/store/store';
import { Provider } from 'react-redux';

describe('FormPage', () => {
  it('should have headline', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument;
  });
});
