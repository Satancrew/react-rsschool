import { render } from '@testing-library/react';
import { Form } from './Form';
import React from 'react';
import store from '@/store/store';
import { Provider } from 'react-redux';

describe('Form', () => {
  let formElement: HTMLFormElement;

  const init = () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    formElement = document.querySelector('.form') as HTMLFormElement;
  };

  it('render component', () => {
    init();
    expect(formElement).toBeInTheDocument();
  });
});
