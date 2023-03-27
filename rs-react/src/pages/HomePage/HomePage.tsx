import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';
import './HomePage.scss';
import { IProduct } from '../../common/interface';
import { Card } from '../../components/Card/Card';
import { mockData } from '../../common/data';

export class HomePage extends Component<{ products: IProduct[] }> {
  render() {
    return (
      <>
        <Header checkHomeBtn={true} checkAboutBtn={false} />
        <main className="main">
          <div className="main__wrapper">
            {mockData.map((el: IProduct) => (
              <Card
                key={el.id}
                id={el.id}
                title={el.title}
                price={el.price}
                image={el.image}
                rating={el.rating}
                category={el.category}
                stock={el.stock}
              />
            ))}
          </div>
        </main>
      </>
    );
  }
}
