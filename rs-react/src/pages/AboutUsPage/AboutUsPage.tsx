import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';

export class AboutUsPage extends Component {
  render() {
    return (
      <>
        <Header checkAboutBtn={true} checkHomeBtn={false} />
        <h1>About page</h1>
      </>
    );
  }
}
