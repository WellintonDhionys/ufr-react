import React, { Component } from 'react';
import './Autenticar.css';
import Login from './Login';
import { Link } from 'react-router-dom';

class Autenticar extends Component {
    render(){
      return (
        <div className="containerLogin">
          <Link to="/"> Voltar </Link>
          <div className="main">
		      <div className="tituloLogin"><h3>Login</h3></div>
            <div className="content">
              <Login />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Autenticar;
