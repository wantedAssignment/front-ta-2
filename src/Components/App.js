import React, { Component } from 'react';
//
import GlobalStyles from './GlobalStyles';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Router />
      </>
    );
  }
}

export default App;
