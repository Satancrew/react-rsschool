import { Character } from '@/common/interface';
import React from 'react';
import './Card.scss';

export const Card = ({ gender, image, name, id, showModal }: Character) => {
  return (
    <div className="card" key={id} onClick={() => showModal!(true)}>
      <img className="card__image" src={image} />
      <div className="card__data">Name: {name}</div>
      <div className="card__data">Gender: {gender}</div>
    </div>
  );
};
