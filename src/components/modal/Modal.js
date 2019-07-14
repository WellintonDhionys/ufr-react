import React from 'react';
import { Modal, Button, Col, Form } from 'react-bootstrap';
import '../Dashboard.css';

class ModalCategoria extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
            <Button style={{margin: 14}} 
              variant="primary float-right" 
              onClick={this.handleShow}>
                Nova Categoria
            </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Adcionar Categoria</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text" placeholder="Nome Categoria" />
                </Form.Group>
                </Col>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Fechar
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Adcionar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
export default ModalCategoria;