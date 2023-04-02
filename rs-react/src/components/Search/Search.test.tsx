import { test } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Search } from './Search';
import React from 'react';

describe('Search />', () => {
  test('The input field and its props', () => {
    render(<Search />);
    const input = document.querySelector('.search__input') as HTMLInputElement;

    expect(input).toBeTruthy();

    expect(input?.textContent).toBe('');

    if (input) {
      input.textContent = 'Something';
      expect(input.textContent).toBe('Something');

      expect(input.type).toBe('text');

      expect(input.name).toBe('text');

      fireEvent.change(input, {
        target: {
          value: '',
        },
      });
      expect(input.value).toBe('');
    }
  });
});
