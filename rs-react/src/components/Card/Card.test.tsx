import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';
import { testData } from '../../common/data';

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
    expect(card).toContainHTML(product.image);
    expect(card).toContainHTML(product.title);
    expect(card).toContainHTML(product.category);
    expect(card).toContainHTML(product.price.toString());
    expect(card).toContainHTML(product.rating.rate.toString());
    expect(card).toContainHTML(product.rating.count.toString());
  });
});
