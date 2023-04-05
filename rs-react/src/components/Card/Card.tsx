import { Character } from '@/common/interface';
import React from 'react';
import './Card.scss';

export const Card = ({ gender, image, name, status }: Character) => {
  return (
    // <div className="card">
    //   <img className="card__image" src={image} />
    //   <div className="card__wrapper">
    //     <h3 className="card__title">{title}</h3>
    //     <div className="card__details">
    //       <div className="card__category">Category: {category}</div>
    //       <div className="card__price">Price: {price}</div>
    //       <div className="card__rating">Rating: {rating}</div>
    //       <div className="card__stock">Stock: {stock}</div>
    //     </div>
    //   </div>
    // </div>
    <div className="card">
      <img className="card__image" src={image} />
      <div>Name: {name}</div>
      <div>Gender: {gender}</div>
      <div>Status: {status}</div>
    </div>
  );
};
