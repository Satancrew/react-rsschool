import React from 'react';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

export const render = (url: string, options: RenderToPipeableStreamOptions) => {
  return renderToPipeableStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    </React.StrictMode>,
    options
  );
};
