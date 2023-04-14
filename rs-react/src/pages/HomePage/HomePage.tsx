import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import { Character } from '@/common/interface';
import { Card } from '@/components/Card/Card';
import { Search } from '@/components/Search/Search';
import axios from 'axios';
import ModalWindow from '@/components/ModalWindow/ModalWindow';
import ModalCard from '@/components/ModalCard/ModalCard';
import Loader from '@/components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCharactersList } from '@/store/slices/searchSlice';
import './HomePage.scss';

export const HomePage = () => {
  const { term, isLoading, apiLink } = useAppSelector((state) => state.searchSlice);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [character, setCharacter] = useState<Character>({} as Character);
  // const [term, setTerm] = useState(localStorage.getItem('value') || '');
  // const [apiLink, setApiLink] = useState(
  //   'https://rickandmortyapi.com/api/character' + `/?name=${term}`
  // );
  const [modalWindowVisible, setModalWindowVisible] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState(false);

  useEffect(() => {
    setLoaderStatus(true);
    setTimeout(() => {
      axios
        .get(apiLink)
        .then((res) => {
          setCharacters(res.data.results);
        })
        .catch(() => {
          setCharacters([]);
        })
        .finally(() => {
          setLoaderStatus(false);
        });
    }, 300);
  }, [apiLink]);

  return (
    <>
      <Header checkHomeBtn={true} checkAboutBtn={false} />
      <main className="main">
        <Search />
        <ModalWindow
          modalWindowVisible={modalWindowVisible}
          setModalWindowVisible={setModalWindowVisible}
        >
          <ModalCard character={character} />
        </ModalWindow>
        <div className="main__wrapper">
          {loaderStatus ? (
            <Loader />
          ) : characters.length !== 0 ? (
            characters.map((el: Character) => (
              <Card
                key={el.id}
                {...el}
                showModal={setModalWindowVisible}
                getCharacter={setCharacter}
              />
            ))
          ) : (
            <h2 className="main__no-characters">
              Unfortunately, the characters are not found. Try a different name.
            </h2>
          )}
        </div>
      </main>
    </>
  );
};
