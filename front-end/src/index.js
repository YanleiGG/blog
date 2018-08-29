import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import stores from './store/stores'

import 'react-quill/dist/quill.snow.css';
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>
, document.getElementById('root'));

