import Search from '../Search/Search';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component<{ checkBtn: boolean }> {
  render() {
    const { checkBtn } = this.props;
    return (
      <header className="header">
        <div className="header__links">
          {checkBtn ? (
            <>
              <Link className="header__btn active" to="/home">
                Home page
              </Link>
              <Link className="header__btn" to="/about">
                About us
              </Link>
            </>
          ) : (
            <>
              <Link className="header__btn" to="/home">
                Home page
              </Link>
              <Link className="header__btn active" to="/about">
                About us
              </Link>
            </>
          )}
        </div>
        <Search />
      </header>
    );
  }
}

export default Header;
