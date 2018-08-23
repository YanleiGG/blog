import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/home' component={Home}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
