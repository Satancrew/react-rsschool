import { IProduct, ModalProps } from '../../common/interface';
import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { Form } from '../../components/Form/Form';
import { Card } from '../../components/Card/Card';
import './FormPage.scss';

export class FormPage extends Component<ModalProps, { products: IProduct[] }> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      products: [],
    };
    this.onAddCard = this.onAddCard.bind(this);
  }

  onAddCard(card: IProduct) {
    this.setState((prevState) => ({
      products: [...prevState.products, card],
    }));
  }
  render() {
    return (
      <>
        <Header checkAboutBtn={false} checkHomeBtn={false} />
        <Form />
        <div className="form__list-items">
          {this.state.products?.map((el) => (
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
        </div>
      </>
    );
  }
}
