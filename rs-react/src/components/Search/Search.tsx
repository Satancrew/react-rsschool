import React, { ChangeEvent } from 'react';
import { ISearch } from '@/common/interface';
import './Search.scss';

export const Search = ({ term, setTerm, setApiLink }: ISearch) => {
  const apiLinkNew = 'https://rickandmortyapi.com/api/character';
  const onSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setTerm(ev.target.value);
  };

  const onSearchClick = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      setApiLink(apiLinkNew + `/?name=${term}`);
      localStorage.setItem('value', term);
      setTerm('');
    }
  };

  return (
    <div className="search">
      <div className="search__wrapper">
        <input
          type="text"
          name="text"
          className="search__input"
          placeholder="Enter character name"
          value={term}
          onChange={onSearchChange}
          onKeyDown={onSearchClick}
        />
      </div>
    </div>
  );
};
