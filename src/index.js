import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { characterReducer } from './redux/characterReducer';

import App from './App';

import './index.scss';
import reportWebVitals from './reportWebVitals';

const store = createStore(characterReducer);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
