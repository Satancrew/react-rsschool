import { IProduct, IProducts, IModal } from '../../common/interface';
import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { Form } from '../../components/Form/Form';
import { Card } from '../../components/Card/Card';
import './FormPage.scss';

export class FormPage extends Component<IModal, IProducts> {
  constructor(props: IModal) {
    super(props);
    this.state = {
      products: [],
    };
    this.onAddProduct = this.onAddProduct.bind(this);
  }

  onAddProduct(el: IProduct) {
    this.setState((prev) => ({
      products: [...prev.products, el],
    }));
  }
  render() {
    return (
      <>
        <Header checkAboutBtn={false} checkHomeBtn={false} />
        <Form onAddProduct={this.onAddProduct} />
        <div className="form__list-items">
          {this.state.products?.map((el) => (
            <Card
              key={el.id}
              id={el.id}
              title={el.title}
              price={el.price}
              image={el.image}
              rating={el.rating}
              stock={el.stock}
              category={el.category}
            />
          ))}
        </div>
      </>
    );
  }
}
