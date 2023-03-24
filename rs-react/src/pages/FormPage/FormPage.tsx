import { ModalProps } from '../../common/interface';
import React, { ChangeEvent, Component } from 'react';
import { Header } from '../../components/Header/Header';
import { Form } from '../../components/Form/Form';
import './FormPage.scss';

export class FormPage extends Component<ModalProps> {
  render() {
    return (
      <>
        <Header checkAboutBtn={false} checkHomeBtn={false} />
        <Form />
      </>
    );
  }
}
