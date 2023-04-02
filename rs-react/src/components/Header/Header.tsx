import { Search } from '../Search/Search';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from '../../common/interface';
import './Header.scss';

export const Header = (props: HeaderProps) => {
  const { checkHomeBtn, checkAboutBtn } = props;
  const homePageBtnStyles = checkHomeBtn ? 'header__btn active' : 'header__btn';
  const aboutPageBtnStyles = checkAboutBtn ? 'header__btn active' : 'header__btn';
  const formPageBtnStyles = !checkHomeBtn && !checkAboutBtn ? 'header__btn active' : 'header__btn';
  return (
    <header className="header">
      <div className="header__links">
        <Link className={homePageBtnStyles} to="/">
          Home page
        </Link>
        <Link className={aboutPageBtnStyles} to="/about">
          About us
        </Link>
        <Link className={formPageBtnStyles} to="/form">
          Form Page
        </Link>
      </div>
      <Search />
    </header>
  );
};
