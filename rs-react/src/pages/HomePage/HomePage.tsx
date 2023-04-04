import React from 'react';
import { Header } from '../../components/Header/Header';
import { IProduct } from '../../common/interface';
import { Card } from '../../components/Card/Card';
import { mockData } from '../../common/data';
import './HomePage.scss';

export const HomePage = () => {
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
  </>;
};
