import React, { ChangeEvent } from 'react';
import { ISearch } from '@/common/interface';
import './Search.scss';
import axios from 'axios';

export const Search = ({
  term,
  setTerm,
  response,
  setResponse,
  setCharactersArr,
  setLoaderStatus,
}: ISearch) => {
  const onSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setTerm(ev.target.value);
    setLoaderStatus!(true);
  };

  const getCharacters = async () => {
    return axios
      .get(response)
      .then((elements) => {
        setCharactersArr!(elements.data.results);
      })
      .catch(() => {
        setCharactersArr!([]);
      })
      .finally(() => {
        setLoaderStatus!(false);
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
