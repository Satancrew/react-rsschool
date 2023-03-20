import { Search } from '../Search/Search';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export class Header extends Component<{ checkHomeBtn: boolean; checkAboutBtn: boolean }> {
  render() {
    const { checkHomeBtn, checkAboutBtn } = this.props;
    const homePageBtnStyles = checkHomeBtn ? 'header__btn active' : 'header__btn';
    const aboutPageBtnStyles = checkAboutBtn ? 'header__btn active' : 'header__btn';
    return (
      <header className="header">
        <div className="header__links">
          <>
            <Link className={homePageBtnStyles} to="/">
              Home page
            </Link>
            <Link className={aboutPageBtnStyles} to="/about">
              About us
            </Link>
          </>
        </div>
        <Search />
      </header>
    );
  }
}
