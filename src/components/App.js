import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';

import Home from './Home';
import Album from './Album';
import Photo from './Photo';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/album/:id' component={Album} />
        <Route path='/photo/:id' component={Photo} />
      </Router>
    )
  }
}
