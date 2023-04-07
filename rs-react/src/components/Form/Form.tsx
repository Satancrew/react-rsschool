import { IProduct, IForm, InputTypes } from '@/common/interface';
import React, { useState } from 'react';
import {
  validationProductCategoryImage,
  validationProductName,
  validationProductPriceStock,
} from '@/common/validationRules';
import { useForm } from 'react-hook-form';
import './Form.scss';

export const Form = (props: IForm) => {
  const [prodId, setProdId] = useState<number>(0);
  const { onAddProduct } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onAdded = (prod: InputTypes) => {
    const image = URL.createObjectURL(prod.image[0]);
    const card: IProduct = {
      id: prodId,
      title: prod.title,
      price: prod.price,
      stock: prod.stock,
      category: prod.category,
      image: image,
      rating: prod.rating,
      rules: prod.rules,
    };
    onAddProduct(card);
    reset();
    setProdId(prodId + 1);
  };

  return (
    <div className="wrapper-form">
      <form className="form" onSubmit={handleSubmit(onAdded)}>
        <div className="form__group">
          <label className="form__label">
            Product name:
            <br />
            <input
              className="form__label-text"
              type="text"
              {...register('title', {
                required: true,
                validate: {
                  validate: (textInput) => validationProductName(textInput),
                },
              })}
            />
            {errors.title && (
              <p className="form__error">Product name must contain more than three letters</p>
            )}
          </label>
        </div>
        <div className="form__group">
          <label className="form__label">
            Category:
            <br />
            <select
              className="form__label-select"
              {...register('category', {
                required: true,
                validate: {
                  validate: (categoryInput) => validationProductCategoryImage(categoryInput),
                },
              })}
            >
              <option value=""></option>
              <option value="jewerly">jewerly</option>
              <option value="electronic">electronics</option>
              <option value="women shoes">women shoes</option>
              <option value="man shoes">men shoes</option>
              <option value="accessory">accessory</option>
              <option value="other">other</option>
            </select>
            {errors.category && <p className="form__error">Pick any category</p>}
          </label>
        </div>
        <div className="form__group">
          <label className="form__label">
            Take image
            <br />
            <input
              type="file"
              accept=".jpeg, .png, .jpg, .svg, .pdf"
              {...register('image', {
                required: true,
                validate: {
                  validate: (imageInput) => validationProductCategoryImage(imageInput[0].name),
                },
              })}
            />
            {errors.image && <p className="form__error">Choose any picture</p>}
          </label>
        </div>
        <div className="form__group-numbers">
          <label className="form__label form__label-price">
            Price:
            <br />
            <input
              type="number"
              defaultValue=""
              {...register('price', {
                required: true,
                validate: {
                  validate: (priceInput) => validationProductPriceStock(priceInput),
                },
              })}
            />
          </label>
          <label className="form__label form__label-stock">
            Stock:
            <br />
            <input
              type="number"
              defaultValue=""
              {...register('stock', {
                required: true,
                validate: {
                  validate: (stockInput) => validationProductPriceStock(stockInput),
                },
              })}
            />
          </label>
          <br />
        </div>
        <div className="form__error-price-stock">
          {errors.price && <p className="form__error form__error-small">Enter the number</p>}
          {errors.stock && <p className="form__error form__error-small">Enter the number</p>}
        </div>
        <div className="form__group-checkbox">
          <label className="form__label-checkbox">
            <input
              type="checkbox"
              defaultChecked={false}
              {...register('rules', {
                required: true,
                validate: {
                  validate: (rulesInput) => (rulesInput ? true : false),
                },
              })}
            />
            Check me if u want add product
          </label>
          {errors.rules && <p className="form__error">Accept the rules to continue</p>}
        </div>
        <button className="submit" type="submit" value="Добавить">
          Add product
        </button>
      </form>
    </div>
  );
};
