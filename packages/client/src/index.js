import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

import App from './core/containers/App';

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);

registerServiceWorker();
