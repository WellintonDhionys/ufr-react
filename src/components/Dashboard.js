import React, { Component } from 'react';
import { Dropdown, Card, CardGroup, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { options } from './acordion/dados';
import Menu from './menu';
import './Dashboard.css';
import CanvasJSReact from './canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
                                <Dropdown.Item className="item"><Link to="/"><i class="fas fa-sign-out-alt"></i>Exit</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div id="tamanho-row" className="row">

                <Menu aberto={this.state.menuAberto}/>

                <div id="coluna-corpo" className="col-9 p-card">
                    <Row className="scrol">
                        <Col style={{paddingRight: 5}} sm={12} md={7}>
                            <CardGroup>
                            <Card>
                                <p style={{marginBottom: 0}}>Carteira</p>
                                <Card.Body>
                                <Table>
                                <tbody>
                                    <tr>
                                    <td>Saldo</td>
                                    <td style={{ color: 'green'}}>+ R$ 2.000</td>
                                    </tr>
                                    <tr>
                                    <td>Despesas</td>
                                    <td style={{ color: 'red'}}>- R$ 43.000</td>
                                    </tr>
                                    <tr style={{ backgroundColor: '#F5F5F5', fontWeight: 700}}>
                                    <td>Receita Total</td>
                                    <td>R$ 45.000</td>
                                    </tr>
                                </tbody>
                                </Table>
                                </Card.Body>
                            </Card>
                            
                            </CardGroup>
                            <div style={{marginTop: 10}}>
                            <CanvasJSChart options = {options}
                                /* onRef = {ref => this.chart = ref} */
                            />
                            </div>
                        </Col>
                        <Col style={{paddingLeft: 5}} sm={12} md={5}>
                            <Card border="light" style={{ width: '100%', minWidth: 269}}>
                            <p>Categorias</p>
                            <Card.Body>
                            <Table>
                            <tbody>
                                <tr>
                                <td>
                                    <span class="badge badge-pill badge-primary">45</span>Transporte
                                </td>
                                <td style={{}}>R$ 9.000</td>
                                </tr>
                                <tr>
                                <td><span class="badge badge-pill badge-primary">45</span>Educação</td>
                                <td style={{}}>R$ 9.000</td>
                                </tr>
                                <tr style={{}}>
                                <td><span class="badge badge-pill badge-primary">45</span>Alimentação</td>
                                <td>R$ 9.000</td>
                                </tr>
                                <tr style={{}}>
                                <td><span class="badge badge-pill badge-primary">45</span>Gastos pessoais</td>
                                <td>R$ 9.000</td>
                                </tr>
                                <tr style={{}}>
                                <td><span class="badge badge-pill badge-primary">45</span>Outros</td>
                                <td>R$ 9.000</td>
                                </tr>
                            </tbody>
                            </Table> 
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
