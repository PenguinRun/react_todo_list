import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <header>
                <Container>
                    <Row>
                        <ul className="header-ul">
                            <Col xs="12" sm="12">
                                <li className="header-li header-my-task">My Tasks</li>
                                <li className="header-li header-in-progress">In Progress</li>
                                <li className="header-li header-completed">Completed</li>
                            </Col>
                        </ul>
                    </Row>
                </Container>
            </header >
        )
    }
}

export default Header;