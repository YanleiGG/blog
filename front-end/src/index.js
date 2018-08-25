import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';

import 'react-quill/dist/quill.snow.css';
import "antd/dist/antd.css";

import authStore from './store/authStore'
import writeArticleStore from './store/writeArticleStore'

const stores = {
  authStore,
  writeArticleStore
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>
, document.getElementById('root'));

