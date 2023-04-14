import React, { ChangeEvent } from 'react';
// import { ISearch } from '@/common/interface';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setApiLink, setTerm } from '@/store/slices/searchSlice';
import './Search.scss';

export const Search = () => {
  const { term } = useAppSelector((state) => state.searchSlice);
  const dispatch = useAppDispatch();
  const apiLinkNew = 'https://rickandmortyapi.com/api/character';

  const onSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTerm(ev.target.value));
    localStorage.setItem('value', ev.target.value);
  };

  const onSearchClick = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      dispatch(setApiLink(apiLinkNew + `/?name=${term}`));
      localStorage.setItem('value', term as string);
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
          value={term as string}
          onChange={onSearchChange}
          onKeyDown={onSearchClick}
        />
      </div>
    </div>
  );
};
