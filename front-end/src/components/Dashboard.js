import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Cadastro from './cadastro/Cadastro';
import Controle from './controle/Controle';
import Conta from './conta/Conta';
import Menu from './menu/index';
import Hamburger from './menu/hamburger';
import DropdownUser from './dropdown/User';
import './Dashboard.css';

class Dashboard extends Component {
    state = { 
        menuAberto : true
    }

    handleClick = ()=> {
        this.setState({
            menuAberto: this.state.menuAberto ? false : true
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div id="cabecalho" className="row">
                    <div onClick={this.handleClick}>
                        <Hamburger />
                    </div>
                    <div className="col-3 titulo"><h3>Titulos</h3></div>
                    <div className="col">
                        <DropdownUser />
                    </div>
                </div>
                <div id="tamanho-row" className="row">

                <Menu aberto={this.state.menuAberto}/>

                <div id="coluna-corpo" className="col-9 p-card">
                    <Row className="scrol">
                        <Route 
                            path="/Dashboard/Controle" 
                            component={Controle} 
                        />
                        <Route 
                            path="/Dashboard/Cadastro" 
                            component={Cadastro} 
                        />
                        <Route 
                            path="/Dashboard/Conta" 
                            component={Conta} 
                        />
                    </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
