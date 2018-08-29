import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { observer, inject } from 'mobx-react';

import Home from './components/Home'
import CreateArticle from './components/CreateArticle'
import Login from './components/Login'

@inject('authStore')
@observer
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home} exact></Route>
          <Route path='/create-article' component={CreateArticle}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
