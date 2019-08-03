import React, { Component } from 'react';
import { listCategoria } from './dados';
import { Card, Accordion, Button, Table } from 'react-bootstrap';
import ModalCategoria from '../modal/Modal';
import ModalSubcategoria from '../modal/Modal1';

class ListAcordion extends Component {
    state = {
        categoria: listCategoria,
        msg: 'não a categoria cadastrada!',
        stato: false//se stato for true abre o modal
    }

    modalCategoria(e) {
        this.setState({
            stato: true
        })
    }

    removeCategoria(item) {
        const newCategoria = this.state.categoria.filter(categoria => 
            categoria.id != item
        )
        this.setState({
            categoria: newCategoria
        })
    }

    handleStato(e) {
        this.setState({ stato: true });
    }

    addCategoria(item) { 
        const categoria = this.state.categoria

        const aux = this.state.categoria.filter(categoria => 
            categoria.nome == item
        )

        const newCategoria = {
            nome: item,
            id: this.state.categoria.length + 1,
            subCat: []
        }

        const tCategoria = item == false || aux.length > 0
        ? categoria
        : [newCategoria, ...this.state.categoria]
        
        this.setState({
            categoria: tCategoria,
            stato: false
        })
    }

    render() {
        const categorias = this.state.categoria
        return (
            <Card>
                <div className="cardCategoria">
                    <div style={{margin: 21}} className="float-left"><h5>Categorias</h5></div>
                    <div>
                    <Button style={{margin: 14}} 
                    variant="primary float-right" 
                    onClick={(e) => this.modalCategoria(e)}>
                        Nova Categoria
                    </Button>
                    <ModalCategoria
                        aberto={this.state.stato}
                        handleClick={this.addCategoria.bind(this)} 
                    />
                    </div>
                </div>
            {
                categorias.length == 0
                ? <p style={{textAlign: 'center', color: '#dc3545'}}>{this.state.msg}</p> 
                : <Accordion style={{padding: 10}}>
                {
                    Object.keys(categorias).map(key => {
                        return (
                            <Card key={ categorias[key].id }>
                                <Card.Header>
                                <Accordion.Toggle 
                                    as={Button} variant="link" 
                                    eventKey={ categorias[key].id }
                                >
                                    <i 
                                        style={{paddingRight: 5}} 
                                        className="fas fa-angle-down"
                                    ></i>
                                    { categorias[key].nome }
                                </Accordion.Toggle>
                                    <i 
                                        onClick={ (e) => this.removeCategoria(categorias[key].id) } 
                                        style={{padding: 10, cursor: 'pointer'}} 
                                        className="fas fa-trash-alt float-right"
                                    ></i>
                                    <i 
                                        style={{padding: 10}} 
                                        className="fas fa-edit float-right"
                                    ></i>
                                </Card.Header>
                                <Accordion.Collapse eventKey={ categorias[key].id }>
                                <Card.Body>
                                <div style={{margin: 5}}><h5>Subcategoria</h5></div>
                                    <Table>
                                    <tbody>
                                    {
                                        categorias[key].subCat.map((items, i) =>
                                        <tr key={i}>
                                            <td>{ items.nome }</td>
                                            <td>
                                                <i
                                                    style={{paddingRight: 10}} 
                                                    className="fas fa-edit"
                                                ></i>
                                                <i className="fas fa-trash-alt"></i>
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
            }
            </Card>
        );
    }
}

export default ListAcordion;