import { render } from '@testing-library/react';
import React from 'react';
import { testData } from '../../common/data';
import { Card } from './Card';

describe('Card test', () => {
  const product = testData;
  let card: HTMLElement;

  beforeEach(() => {
    render(<Card {...product} />);
    card = document.querySelectorAll('.card')[0] as HTMLElement;
  });

  it('rendering component', () => {
    expect(card).toBeInTheDocument();
  });

  it('add component props', () => {
    expect(card).toContainHTML(product.image as string);
    expect(card).toContainHTML(product.name);
    expect(card).toContainHTML(product.gender);
  });
});
