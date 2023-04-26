import React from 'react';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

export const render = (
  url: string | Partial<Location>,
  options: RenderToPipeableStreamOptions | undefined
) => {
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    options
  );
};
