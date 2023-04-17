import React from 'react';
import Header from '@/components/Header/Header';
import { Character } from '@/common/interface';
import { Card } from '@/components/Card/Card';
import { Search } from '@/components/Search/Search';
import ModalWindow from '@/components/ModalWindow/ModalWindow';
import ModalCard from '@/components/ModalCard/ModalCard';
import Loader from '@/components/Loader/Loader';
import { useAppSelector } from '../../hooks/redux';
import { apiSlice } from '@/store/slices/apiSlice';
import './HomePage.scss';

export const HomePage = () => {
  const { search, isLoading } = useAppSelector((state) => state.searchSlice);
  const { data, error } = apiSlice.useGetCharactersByNameQuery(search);
  return (
    <>
      <Header checkHomeBtn={true} checkAboutBtn={false} />
      <main className="main">
        <Search />
        <ModalWindow>
          <ModalCard />
        </ModalWindow>
        <div className="main__wrapper">
          {isLoading ? (
            <Loader />
          ) : !error ? (
            data && data.results.map((el: Character) => <Card key={el.id} {...el} />)
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
