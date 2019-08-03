import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Autenticar from './components/autenticar/Autenticar';
import Home from './components/Home';
import './fontawesome/css/all.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Autenticar" component={Autenticar} />
            <Route path="/Dashboard" component={Dashboard} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
