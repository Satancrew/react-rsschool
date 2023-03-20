import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import './HomePage.scss';
import { IProduct } from '../../common/interface';

class HomePage extends Component {
  state = {
    products: [] as IProduct[],
  };

  componentDidMount() {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      const products: IProduct[] = res.data;
      this.setState({ products });
    });
  }

  render() {
    return (
      <>
        <Header checkBtn={true} />
        <main className="main">
          {this.state.products.map((el: IProduct) => (
            <Card
              key={el.id}
              id={el.id}
              title={el.title}
              price={el.price}
              image={el.image}
              rating={el.rating}
              category={el.category}
            />
          ))}
        </main>
      </>
    );
  }
}

export default HomePage;
