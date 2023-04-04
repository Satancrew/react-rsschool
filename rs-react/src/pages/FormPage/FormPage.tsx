import { IProduct } from '@/common/interface';
import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import { Form } from '@/components/Form/Form';
import { Card } from '@/components/Card/Card';
import './FormPage.scss';

export const FormPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const onAddProduct = (el: IProduct) => {
    const prodsArr = [...products, el];
    setProducts(prodsArr);
  };

  return (
    <>
      <Header checkAboutBtn={false} checkHomeBtn={false} />
      <Form onAddProduct={onAddProduct} />
      <div className="form__list-items">
        {products.map((el: IProduct) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    </>
  );
};
