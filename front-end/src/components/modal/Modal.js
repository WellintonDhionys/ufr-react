import React from 'react';
import { Modal, Button, Col, Form } from 'react-bootstrap';
import '../Dashboard.css';

class ModalCategoria extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleAdd = this.handleAdd.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        inputTex: ''
      };
    }
  
    handleClose() {
      this.props.handleClick(false)
      this.setState({ show: false });
    }
  
    handleAdd() {
      this.inputTex == ''
      ? this.props.handleClick(false)
      : this.props.handleClick(this.inputTex.value)
      this.setState({ show: false });
    }
  
    render() {
      const { aberto } = this.props
      return (
        <>
  
          <Modal show={aberto} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Adcionar Categoria</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control ref={(input) => this.inputTex = input} type="text" placeholder="Nome Categoria" />
                </Form.Group>
                </Col>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Fechar
              </Button>
              <Button variant="primary" onClick={this.handleAdd}>
                Adcionar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
export default ModalCategoria;