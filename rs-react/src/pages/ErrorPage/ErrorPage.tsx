import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

export const ErrorPage = () => {
  <section className="error-page">
    <div className="error-page__content">
      <h2 className="error-page__title"> 404 Error </h2>
      <h3>Page not found</h3>
      <p className="error-page__text"> Sorry, this page isn`t available </p>
      <Link to="/" className="error-page__link">
        Back to home
      </Link>
    </div>
  </section>;
};
