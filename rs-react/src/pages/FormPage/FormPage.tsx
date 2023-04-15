import { IProduct } from '@/common/interface';
import React from 'react';
import Header from '@/components/Header/Header';
import { Form } from '@/components/Form/Form';
import { FormCard } from '@/components/FormCard/FormCard';
import { useAppSelector } from '../../hooks/redux';
import './FormPage.scss';

export const FormPage = () => {
  const { products } = useAppSelector((state) => state.formSlice);
  return (
    <>
      <Header checkAboutBtn={false} checkHomeBtn={false} />
      <Form />
      <div className="form__list-items">
        {products.map((el: IProduct) => (
          <FormCard key={el.id} {...el} />
        ))}
      </div>
    </>
  );
};
