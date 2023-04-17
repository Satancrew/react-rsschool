import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsLoading, setSearch, setTerm } from '@/store/slices/searchSlice';
import './Search.scss';

export const Search = () => {
  const { term } = useAppSelector((state) => state.searchSlice);
  const dispatch = useAppDispatch();

  const onSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTerm(ev.target.value));
    localStorage.setItem('value', ev.target.value);
  };

  const onSearchClick = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      setTimeout(() => {
        dispatch(setIsLoading(false));
        dispatch(setSearch(term));
        localStorage.setItem('value', term as string);
      }, 500);
      dispatch(setIsLoading(true));
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
