import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage';
import { FormPage } from './pages/FormPage/FormPage';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
