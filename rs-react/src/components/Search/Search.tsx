import React, { ChangeEvent } from 'react';
import { ISearch } from '@/common/interface';
import './Search.scss';
import axios from 'axios';

export const Search = ({ term, setTerm, response, setResponse, setCharactersArr }: ISearch) => {
  const onSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const term = ev.target.value;
    localStorage.setItem('value', term);
    setTerm(term);
  };

  const getCharacters = async () => {
    return axios
      .get(response)
      .then((elements) => {
        setCharactersArr(elements.data.results);
        console.log(elements.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSearchClick = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      setResponse('https://rickandmortyapi.com/api/character' + `/?name=${term}`);
      getCharacters();
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
