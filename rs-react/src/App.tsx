import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </>
    );
  }
}

export default App;
