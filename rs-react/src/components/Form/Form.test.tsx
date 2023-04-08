import { render } from '@testing-library/react';
import { vitest } from 'vitest';
import { Form } from './Form';
import React from 'react';

describe('<Form />', () => {
  let formElement: HTMLFormElement;

  const init = () => {
    const mockData = vitest.fn();
    render(<Form onAddProduct={mockData} />);
    formElement = document.querySelector('.form') as HTMLFormElement;
  };

  it('render component', () => {
    init();
    expect(formElement).toBeInTheDocument();
  });
});
