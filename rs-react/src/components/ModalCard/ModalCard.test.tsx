import { render } from '@testing-library/react';
import React from 'react';
import { testData } from '@/common/data';
import ModalCard from './ModalCard';

describe('FormCard test', () => {
  const character = testData;
  let modal: HTMLElement;

  beforeEach(() => {
    render(<ModalCard />);
    modal = document.querySelector('.modal__content') as HTMLElement;
  });

  it('rendering component', () => {
    expect(modal).toBeInTheDocument();
  });

  it('add component props', () => {
    expect(modal).toContainHTML(character.image as string);
    expect(modal).toContainHTML(character.gender);
    expect(modal).toContainHTML(character.name);
  });
});
