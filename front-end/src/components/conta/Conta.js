import React, { Component } from 'react';
import { Card, Row, Col, Form, Tabs, Tab, Button } from 'react-bootstrap';
import { listCategoria } from '../acordion/dados';

class Conta extends Component {
    state = { 
        selecionado : ''
    }

    handleSelected = (event)=> {
        this.setState({
            selecionado: event.target.value,
        })
    }
    
    render() {
        return (
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
                                Object.keys(listCategoria).map(function(key){
                                    return <option>{ listCategoria[key].nome }</option>
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
                                Object.keys(listCategoria).map(items => {
                                    if (listCategoria[items].nome === this.state.selecionado){
                                        return listCategoria[items].subCat.map(key =>
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
        );
    }
}

export default Conta;
