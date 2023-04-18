import { fireEvent, render } from '@testing-library/react';
import { Search } from './Search';
import React from 'react';
import store from '@/store/store';
import { Provider } from 'react-redux';

describe('Search />', () => {
  it('render', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
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
          value: 'Something',
        },
      });
      expect(input.value).toBe('Something');
    }
  });
});
