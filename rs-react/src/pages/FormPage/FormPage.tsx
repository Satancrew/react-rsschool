import { ModalProps } from '../../common/interface';
import React, { ChangeEvent, Component } from 'react';
import './FormPage.scss';

export class FormPage extends Component<ModalProps, { visible: boolean }> {
  carName: React.RefObject<HTMLInputElement>;
  carModel: React.RefObject<HTMLInputElement>;
  carPrice: React.RefObject<HTMLInputElement>;
  carProbeg: React.RefObject<HTMLInputElement>;
  carChecked: React.RefObject<HTMLInputElement>;
  constructor(props: ModalProps) {
    super(props);
    this.carName = React.createRef();
    this.carModel = React.createRef();
    this.carPrice = React.createRef();
    this.carProbeg = React.createRef();
    this.carChecked = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      visible: false,
    };
  }

  handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    console.log(this.carName.current?.value, '- name');
    console.log(this.carModel.current?.value, '- model');
    console.log(this.carPrice.current?.value, '- price');
    console.log(this.carProbeg.current?.value, '- probeg');
    console.log(this.carChecked.current?.value, '- checked');
    event.preventDefault();
  }

  render() {
    return (
      <div className="modal">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__group">
            <label className="form__label">
              Car name:
              <br />
              <input
                className="form__label-text"
                type="text"
                name="carName"
                defaultValue=""
                ref={this.carName}
              />
            </label>
          </div>
          <div className="form__group">
            <label className="form__label">
              Model:
              <br />
              <input
                className="form__label-text"
                type="text"
                name="carModel"
                defaultValue=""
                ref={this.carModel}
              />
            </label>
          </div>
          <div className="form__group-numbers">
            <label className="form__label">
              Price:
              <br />
              <input type="number" name="carPrice" defaultValue="0" ref={this.carPrice} />
            </label>
            <label className="form__label">
              Probeg:
              <br />
              <input type="number" name="carProbeg" defaultValue="0" ref={this.carProbeg} />
            </label>
          </div>
          <div className="form__group-checkbox">
            <label className="form__label-checkbox">
              <input
                type="checkbox"
                defaultChecked={false}
                name="carChecked"
                ref={this.carChecked}
              />
              Check me if u want add car to page
            </label>
          </div>
          <input className="submit" type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}
