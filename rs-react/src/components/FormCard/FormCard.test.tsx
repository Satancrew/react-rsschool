import { render } from '@testing-library/react';
import React from 'react';
import { testFormData } from '@/common/data';
import { FormCard } from './FormCard';

describe('FormCard test', () => {
  const product = testFormData;
  let card: HTMLElement;

  beforeEach(() => {
    render(<FormCard {...product} />);
    card = document.querySelector('.formcard') as HTMLElement;
  });

  it('rendering component', () => {
    expect(card).toBeInTheDocument();
  });

  it('add component props', () => {
    expect(card).toContainHTML(product.image as string);
    expect(card).toContainHTML(product.title);
    expect(card).toContainHTML(product.category);
    expect(card).toContainHTML(product.price.toString());
    expect(card).toContainHTML(product.rating.toString());
    expect(card).toContainHTML(product.stock.toString());
  });
});
