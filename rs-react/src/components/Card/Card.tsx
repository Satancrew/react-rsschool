import { Character } from '@/common/interface';
import { useAppDispatch } from '../../hooks/redux';
import { setCharacter, setIsModalActive } from '@/store/slices/modalSlice';
import React from 'react';
import './Card.scss';

export const Card = (props: Character) => {
  const { gender, image, id, name } = props;
  const dispatch = useAppDispatch();
  return (
    <div
      className="card"
      key={id}
      onClick={() => {
        dispatch(setIsModalActive(true));
        dispatch(setCharacter(props));
        // getCharacter!(props);
      }}
    >
      <img className="card__image" src={image} />
      <div className="card__data">Name: {name}</div>
      <div className="card__data">Gender: {gender}</div>
    </div>
  );
};
