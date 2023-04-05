import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import { Character } from '@/common/interface';
import { Card } from '@/components/Card/Card';
import './HomePage.scss';
import { Search } from '@/components/Search/Search';
import axios from 'axios';

export const HomePage = () => {
  const [character, setCharacter] = useState<Character[]>([]);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then((res) => {
      console.log(res);
      setCharacter(res.data.results);
    });
  }, []);
  return (
    <>
      <Header checkHomeBtn={true} checkAboutBtn={false} />
      <main className="main">
        <Search />
        <div className="main__wrapper">
          {character.map((el: Character) => (
            <Card key={el.id} {...el} />
          ))}
        </div>
      </main>
    </>
  );
};
