import React, { useState, ChangeEvent, useEffect } from 'react';
import './Search.scss';

export const Search = () => {
  const [term, setTerm] = useState(localStorage.getItem('value') || '');

  useEffect(() => {
    const term = localStorage.getItem('value');
    if (term || term === '') setTerm(term);
  }, []);

  const onSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const term = ev.target.value;
    localStorage.setItem('value', term);
    setTerm(term);
  };

  return (
    <div className="search">
      <div className="search__wrapper">
        <input
          type="text"
          name="text"
          className="search__input"
          placeholder="What are u looking for?"
          value={term}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
};
