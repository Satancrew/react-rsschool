import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import { Character } from '@/common/interface';
import { Card } from '@/components/Card/Card';
import './HomePage.scss';
import { Search } from '@/components/Search/Search';
import axios from 'axios';

export const HomePage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [term, setTerm] = useState(localStorage.getItem('value') || '');
  const [response, setResponse] = useState(
    'https://rickandmortyapi.com/api/character' + `/?name=${term}`
  );
  const [modalWindow, setModalWindow] = useState(false);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  return (
    <>
      <Header checkHomeBtn={true} checkAboutBtn={false} />
      <main className="main">
        <Search
          term={term}
          setTerm={setTerm}
          setCharactersArr={setCharacters}
          response={response}
          setResponse={setResponse}
        />
        <div className="main__wrapper">
          {characters.map((el: Character) => (
            <Card key={el.id} {...el} />
          ))}
        </div>
      </main>
    </>
  );
};
