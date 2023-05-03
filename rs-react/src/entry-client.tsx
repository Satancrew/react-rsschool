import './App.scss';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';

const domNode = document.getElementById('root') as HTMLElement;
hydrateRoot(
  domNode,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
