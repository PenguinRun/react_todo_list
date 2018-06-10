import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import './App.css';
import './container/Home/components/css/Header.css'
import './container/Home/components/css/Add.css'
import './container/Home/components/css/Speech.css'

import Header from './container/Home/components/Header'
import Add from './container/Home/components/Add'
import Speech from './container/Home/components/Speech'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <Add />
        </div>
        <div>
          <Container>
            <Row>
              <Col xs="12" sm="12">
                <Table borderless className="table">
                  <Speech />
                </Table>
              </Col>
              <Col xs="12" sm="12">
                <Table borderless className="table">
                  <Speech />
                </Table>
              </Col>
              <Col xs="12" sm="12">
                <Table borderless className="table">
                  <Speech />
                </Table>
              </Col>
              <Col xs="12" sm="12">
                <Table borderless className="table">
                  <Speech />
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
