import { render } from '@testing-library/react';
import React from 'react';
import { testData } from '../../common/data';
import { Card } from './Card';
import store from '@/store/store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

describe('Card test', () => {
  const product = testData;
  let card: HTMLElement;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Card {...product} />
      </Provider>
    );
    card = document.querySelectorAll('.card')[0] as HTMLElement;
  });

  it('rendering component', () => {
    expect(card).toBeInTheDocument();
  });

  it('add component props', () => {
    expect(card).toContainHTML(product.image as string);
    expect(card).toContainHTML(product.name);
    expect(card).toContainHTML(product.gender);
    expect(card).toContainHTML(product.image);
  });
});
