import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__links">
          <a className="header__btn" href="/home">
            Home page
          </a>
          <a className="header__btn" href="/about">
            About us
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
