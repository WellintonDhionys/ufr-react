import React, { Component } from 'react';
import { categoria } from './dados';
import { Card, Accordion, Button, Table } from 'react-bootstrap';
import ModalCategoria from '../modal/Modal';
import ModalSubcategoria from '../modal/Modal1';

class ListAcordion extends Component {
    render() {
        return (
            <Card>
                <div className="cardCategoria">
                    <div style={{margin: 21}} className="float-left"><h5>Categorias</h5></div>
                    <ModalCategoria />
                </div>
            <Accordion style={{padding: 10}}>
            { 
                Object.keys(categoria).map((key) => {
                    return (
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={ categoria[key].id }>
                                <i style={{paddingRight: 5}} class="fas fa-angle-down"></i>
                                { categoria[key].nome }
                            </Accordion.Toggle>
                                <i style={{padding: 10}} class="fas fa-trash-alt float-right"></i>
                                <i style={{padding: 10}} class="fas fa-edit float-right"></i>
                            </Card.Header>
                            <Accordion.Collapse eventKey={ categoria[key].id }>
                            <Card.Body>
                                <Table>
                                <tbody>
                                {
                                    categoria[key].subCat.map(items =>
                                    <tr>
                                        <td>{ items.nome }</td>
                                        <td>
                                            <i style={{paddingRight: 10}} class="fas fa-edit"></i>
                                            <i class="fas fa-trash-alt"></i>
                                        </td>
                                    </tr>)
                                }
                                </tbody>
                                </Table>
                                <ModalSubcategoria />
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                    )
                }) 
            }
            </Accordion>
            </Card>
        );
    }
}

export default ListAcordion;