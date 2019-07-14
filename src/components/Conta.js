import React, { Component } from 'react';
import { Dropdown, Card, Row, Col, Form, Tabs, Tab, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { categoria } from './acordion/dados';
import Menu from './menu';
import './Dashboard.css';

class Conta extends Component {
    state = { 
        menuAberto : true,
        selecionado : ''
    }

    handleSelected = (event)=> {
        this.setState({
            selecionado: event.target.value,
        })
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
                                <Link to="/"><Dropdown.Item className="item"><i class="fas fa-sign-out-alt"></i>Exit</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div id="tamanho-row" className="row">

                <Menu aberto={this.state.menuAberto}/>
                
                    <div id="coluna-corpo" className="col-9 p-card">
                    <Row>
                        <Col style={{paddingRight: 5}}>
                        <Tabs style={{backgroundColor: '#f2f2f2'}} defaultActiveKey="despesas" id="uncontrolled-tab-example">
                            <Tab eventKey="despesas" title="Despesas">
                            <Card style={{borderTop: 'none'}}>
                            <div style={{backgroundColor: '#fff', padding: 10}}>
                            <Form>
                                <Row>
                                    <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Categoria</Form.Label>
                                        <Form.Control as="select" onChange={ this.handleSelected }>
                                        <option selected disabled>Selecione a Categoria</option>
                                        {
                                            Object.keys(categoria).map(function(key){
                                                return <option>{ categoria[key].nome }</option>
                                            })
                                        }
                                        </Form.Control>
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Subcategoria</Form.Label>
                                        <Form.Control as="select">
                                        {
                                            Object.keys(categoria).map(items => {
                                                if (categoria[items].nome === this.state.selecionado){
                                                    return categoria[items].subCat.map(key =>
                                                        <option>{ key.nome }</option>)
                                                }
                                            })
                                        }
                                        </Form.Control>
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6} md={4}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Valor</Form.Label>
                                        <Form.Control type="text" placeholder="R$ 0.00" />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Button variant="primary">Adcionar</Button>
                                </Form.Group>
                                </Col>
                                </Row>
                                </Form>
                            </div>
                            </Card>
                            </Tab>
                            <Tab eventKey="receita" title="Receita">
                                <Card style={{borderTop: 'none'}}>
                                <div style={{backgroundColor: '#fff', padding: 10}}>
                                <Form>
                                    <Row>
                                        <Col sm={6} md={4}>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Valor</Form.Label>
                                            <Form.Control type="text" placeholder="R$ 0.00" />
                                        </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Button variant="primary">Adcionar</Button>
                                    </Form.Group>
                                    </Col>
                                    </Row>
                                    </Form>
                                </div>
                                </Card>
                            </Tab>
                        </Tabs>
                        </Col>
                    </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conta;
