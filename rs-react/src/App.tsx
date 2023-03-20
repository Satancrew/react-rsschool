import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }
}
