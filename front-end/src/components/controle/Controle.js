import React from 'react';
import { Card, CardGroup, Col, Table } from 'react-bootstrap';
import { options } from '../acordion/dados';

import CanvasJSReact from './canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Controle() {
  return (
    <>
      <Col style={{paddingRight: 5}} sm={12} md={7}>
        <CardGroup>
        <Card>
            <p className="texto" style={{marginBottom: 0}}>Carteira</p>
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
          <p className="texto">Categorias</p>
          <Card.Body>
          <Table>
          <tbody>
              <tr>
              <td>
                  <span className="badge badge-pill badge-primary">45</span>Transporte
              </td>
              <td style={{}}>R$ 9.000</td>
              </tr>
              <tr>
              <td><span className="badge badge-pill badge-primary">45</span>Educação</td>
              <td style={{}}>R$ 9.000</td>
              </tr>
              <tr style={{}}>
              <td><span className="badge badge-pill badge-primary">45</span>Alimentação</td>
              <td>R$ 9.000</td>
              </tr>
              <tr style={{}}>
              <td><span className="badge badge-pill badge-primary">45</span>Gastos pessoais</td>
              <td>R$ 9.000</td>
              </tr>
              <tr style={{}}>
              <td><span className="badge badge-pill badge-primary">45</span>Outros</td>
              <td>R$ 9.000</td>
              </tr>
          </tbody>
          </Table> 
          </Card.Body>
          </Card>
      </Col>
    </>
  );
}
