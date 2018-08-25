import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home'
import { observer, inject } from 'mobx-react';

@inject('authStore')
@observer
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={Home}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
