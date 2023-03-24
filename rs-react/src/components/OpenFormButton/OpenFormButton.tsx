import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './OpenFormButton.scss';

export class OpenFormButton extends Component<{ onClick: (e: MouseEvent) => void }> {
  render() {
    return (
      <Link className="form-btn" to="/form">
        Add card
      </Link>
    );
  }
}
