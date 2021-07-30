import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
//
import Navigation from './Navigation';
import Product from '../Routers/Product';
import Detail from '../Routers/Detail';
import Recent from '../Routers/Recent';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/product" exact component={Product}></Route>
          <Route path="/product/:id" component={Detail}></Route>
          <Route path="/recentList" component={Recent}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
