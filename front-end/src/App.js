import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home'
import WriteArticle from './components/WriteArticle'
import { observer, inject } from 'mobx-react';

@inject('authStore')
@observer
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home} exact></Route>
          <Route path='/write' component={WriteArticle}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
