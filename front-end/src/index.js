import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "antd/dist/antd.css";
import authStore from './store/authStore'
import { Provider } from 'mobx-react';

const stores = { 
  authStore
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>
, document.getElementById('root'));

