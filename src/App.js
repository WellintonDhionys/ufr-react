import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cadastro from './components/Cadastro';
import Conta from './components/Conta';
import Autenticar from './components/Autenticar';
import Home from './components/Home';
import './fontawesome/css/all.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Home />
          <Switch>
            <Route path="/components/" exact component={Home} />
            <Route path="/components/Autenticar" component={Autenticar} />
            <Route path="/components/Dashboard" component={Dashboard} />
            <Route path="/components/Cadastro" component={Cadastro} />
            <Route path="/components/Conta" component={Conta} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
