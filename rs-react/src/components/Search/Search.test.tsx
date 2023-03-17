import { test } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import Search from './Search';
import React from 'react';

describe('Search />', () => {
  test('The input field and its props', () => {
    render(<Search />);
    const input = document.querySelector('input') as HTMLInputElement;

    // input exists in the form component
    expect(input).toBeTruthy();

    // is empty
    expect(input?.textContent).toBe('');

    if (input) {
      // test the input text
      input.textContent = 'Something';
      expect(input.textContent).toBe('Something');

      // test the type prop
      expect(input.type).toBe('text');

      // test the name prop
      expect(input.name).toBe('text');

      // test the value prop
      fireEvent.change(input, {
        target: {
          value: '',
        },
      });
      expect(input.value).toBe('');

      // test the required prop with the jest-dom
      // expect(input).toBeRequired();
    }
  });
});
