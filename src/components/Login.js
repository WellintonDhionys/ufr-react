import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    nome: '',
    senha: ''
  }

  handleNameChange = (event)=> {
    this.setState({
      nome: event.target.value
    })
  }

  handlePasswordChange = (event)=> {
    this.setState({
      senha: event.target.value
    })
  }

  handEnable = ()=> {
    const habilitar = this.state.nome.length > 0 && this.state.senha.length > 0
    return habilitar ? false : true
  }

  render(){
    return (
      <div>
        <Form action="Dashboard">
          <Form.Group>
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              value={ this.state.nome }
              onChange={ this.handleNameChange }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              type="password"
              value={ this.state.senha }
              onChange={ this.handlePasswordChange }
            />
          </Form.Group>
          <Form.Group>
            <Link to="/">Cadastrar</Link>
          </Form.Group>
          <Button type="submit" variant="secondary" disabled={this.handEnable()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
