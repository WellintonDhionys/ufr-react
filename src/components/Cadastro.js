import React, { Component } from 'react';
import { Dropdown, Row, Col } from 'react-bootstrap';
import  ListAcordion  from './acordion/Acordion';
import Menu from './menu';
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

                <div class="hamburger-button" onClick={this.handleClick}>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                </div>

                    <div className="col-3 titulo"><h3>Titulo</h3></div>
                    <div className="col">
                        <Dropdown alignRight className="dropdown-user">
                            <Dropdown.Toggle className="toggle-user" id="dropdown-basic">
                                <i class="fas fa-user"></i>
                            </Dropdown.Toggle>
                               <Dropdown.Menu>
                                <Dropdown.Item className="item"><i class="fas fa-user"></i>User</Dropdown.Item>
                                <Dropdown.Item className="item"><i class="fas fa-cog"></i>Settings</Dropdown.Item>
                                <Dropdown.Item className="item"><i class="fas fa-sign-out-alt"></i>Exit
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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