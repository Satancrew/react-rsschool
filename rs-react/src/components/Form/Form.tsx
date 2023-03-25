import { IProduct, IForm } from '../../common/interface';
import React, { ChangeEvent, Component } from 'react';
import { validationProductCategory, validationProductName, validationProductNumbers } from '../../common/validationRules';
import './Form.scss';

export class Form extends Component<IForm> {
  productName: React.RefObject<HTMLInputElement>;
  productPrice: React.RefObject<HTMLInputElement>;
  productStock: React.RefObject<HTMLInputElement>;
  productCategory: React.RefObject<HTMLSelectElement>;
  productRating: React.RefObject<HTMLInputElement>;
  productImage: React.RefObject<HTMLInputElement>;
  inputChecked: React.RefObject<HTMLInputElement>;
  constructor(props: IForm) {
    super(props);
    this.productName = React.createRef();
    this.productPrice = React.createRef();
    this.productStock = React.createRef();
    this.productCategory = React.createRef();
    this.productRating = React.createRef();
    this.productImage = React.createRef();
    this.inputChecked = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formClearing(): void {
    this.productName.current!.value = '';
    this.productPrice.current!.value = '';
    this.productStock.current!.value = '';
    this.productCategory.current!.value = '';
    this.productImage.current!.value = '';
    this.inputChecked.current!.checked = false;
  }

  validationInputs(): void {
    const validateName = validationProductName(this.productName.current!.value || '');
    const validatePrice = validationProductNumbers(this.productPrice.current!.value || '');
    const validateStock = validationProductNumbers(this.productStock.current!.value || '');
    const validateCategory = validationProductCategory(this.productCategory.current!.value || '');
    console.log(validatePrice);
  }

  handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const image = this.productImage.current?.files?.[0];
    const elem: IProduct = {
      id: Math.floor(Math.random() * 50000),
      title: this.productName.current?.value || '',
      price: this.productPrice.current?.value || '0',
      stock: this.productStock.current?.value || '0',
      category: this.productCategory.current?.value || '',
      image: (image && URL.createObjectURL(image)) || '',
      rating: this.productRating.current?.value || '',
    };
    this.validationInputs();
    this.formClearing();
    this.props.onAddProduct(elem);
  }
  render() {
    return (
      <div className="modal">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__group">
            <label className="form__label">
              Product name:
              <br />
              <input
                className="form__label-text"
                type="text"
                name="productName"
                defaultValue=""
                ref={this.productName}
              />
            </label>
          </div>
          <div className="form__group">
            <label className="form__label">
              Category:
              <br />
              <select className="form__label-select" ref={this.productCategory}>
                <option value="jewerly">jewerly</option>
                <option value="electronic">electronic</option>
                <option value="women shoes">women shoes</option>
                <option value="man shoes">men shoes</option>
              </select>
            </label>
          </div>
          <div className="form__group">
            <label className="form__label">
              Take image
              <br />
              <input type="file" accept=".jpeg, .png, .jpg, .svg" ref={this.productImage} />
            </label>
          </div>
          <div className="form__group-numbers">
            <label className="form__label">
              Price:
              <br />
              <input type="number" name="productPrice" defaultValue="" ref={this.productPrice} />
            </label>
            <label className="form__label">
              Stock:
              <br />
              <input type="number" name="productStock" defaultValue="" ref={this.productStock} />
            </label>
          </div>
          <div className="form__group-checkbox">
            <label className="form__label-checkbox">
              <input
                type="checkbox"
                defaultChecked={false}
                name="inputChecked"
                ref={this.inputChecked}
              />
              Check me if u want add product
            </label>
          </div>
          <button className="submit" type="submit" value="Добавить">
            Add product
          </button>
        </form>
      </div>
    );
  }
}
