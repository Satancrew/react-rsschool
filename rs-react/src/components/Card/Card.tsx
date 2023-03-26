import { IProduct } from 'common/interface';
import React, { Component } from 'react';
import './Card.scss';

export class Card extends Component<IProduct> {
  render() {
    const { title, price, image, rating, stock, category } = this.props;
    return (
      <div className="card">
        <img className="card__image" src={image} />
        <div className="card__wrapper">
          <h3 className="card__title">{title}</h3>
          <div className="card__details">
            <div className="card__category">Category: {category}</div>
            <div className="card__price">Price: {price}</div>
            <div className="card__rating">Rating: {rating}</div>
            <div className="card__stock">Stock: {stock}</div>
          </div>
        </div>
      </div>
    );
  }
}
