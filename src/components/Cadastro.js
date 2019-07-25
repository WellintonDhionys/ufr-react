import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import  ListAcordion  from './acordion/Acordion';
import Menu from './menu/index';
import Hamburger from './menu/hamburger';
import DropdownUser from './dropdown/User';
import './Dashboard.css';

class Cadastro extends Component {
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
                    <div className="col-3 titulo"><h3>Titulo</h3></div>
                    <div className="col">
                        <DropdownUser />
                    </div>
                </div>
                <div id="tamanho-row" className="row">

                <Menu aberto={this.state.menuAberto}/>

                    <div id="coluna-corpo" className="col-9 p-card">
                    <Row className="scrol">
                        <Col style={{paddingRight: 5}}>
                            <ListAcordion />
                        </Col>
                    </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cadastro;