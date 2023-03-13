import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__links">
          <Link className="header__btn" to="/home">
            Home page
          </Link>
          <Link className="header__btn" to="/about">
            About us
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
