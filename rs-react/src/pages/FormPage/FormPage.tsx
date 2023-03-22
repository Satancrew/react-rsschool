import { ModalProps } from '../../common/interface';
import React, { Component } from 'react';
import './FormPage.scss';

export class FormPage extends Component<ModalProps, { visible: boolean }> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <div className="modal">
        <form className="form">
          <div className="form__group">
            <label className="form__label">
              Название товара:
              <br />
              <input type="text" />
            </label>
          </div>
          <div className="form-group">
            <label className="form__label">
              Категория:
              <br />
              <select>
                <option>Men`s clothing</option>
                <option>Jewerly</option>
                <option>Electronics</option>
                <option>Women`s clothing</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label className="form__label">
              Price:
              <br />
              <input type="number" />
            </label>
          </div>
          <div className="form-group">
            <label className="form__label">
              Rating:
              <br />
              <input type="number" />
            </label>
          </div>

          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}
