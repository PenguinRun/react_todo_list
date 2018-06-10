import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class Add extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" sm="12">
                        <Button className="add" outline color="secondary">＋ Add Task</Button>{' '}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Add;