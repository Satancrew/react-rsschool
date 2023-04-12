import { IProduct } from '@/common/interface';
import React from 'react';
import './FormCard.scss';

export const FormCard = ({ title, price, image, rating, stock, category }: IProduct) => {
  return (
    <div className="formcard">
      <img className="formcard__image" src={image} />
      <div className="formcard__wrapper">
        <h3 className="formcard__title">{title}</h3>
        <div className="formcard__details">
          <div className="formcard__category">Category: {category}</div>
          <div className="formcard__price">Price: {price}</div>
          <div className="formcard__rating">Rating: {rating}</div>
          <div className="formcard__stock">Stock: {stock}</div>
        </div>
      </div>
    </div>
  );
};
