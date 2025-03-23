import React, { Component } from 'react';
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
        <Container>
            <Tab.Container id='ledt-tabs-example' defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column mt-2">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Design</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Programming</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Fromeworks</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className='mt-3'>
                            <Tab.Pane eventKey="first">
                                <img src="https://lh6.googleusercontent.com/proxy/jbl-ZwXr7ZkSjyvbiVLsXNagL1bT2ti22axEebq4NQZAV2Gz0vkJ5ZrNld_FsOwn6nkmqEvYKQv28Ak" alt='1'/>
                                <p>Lorem</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img src="https://lh6.googleusercontent.com/proxy/jbl-ZwXr7ZkSjyvbiVLsXNagL1bT2ti22axEebq4NQZAV2Gz0vkJ5ZrNld_FsOwn6nkmqEvYKQv28Ak" alt='2'/>
                                <p>Lorem</p>
                                <p>Lorem</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img src="https://lh6.googleusercontent.com/proxy/jbl-ZwXr7ZkSjyvbiVLsXNagL1bT2ti22axEebq4NQZAV2Gz0vkJ5ZrNld_FsOwn6nkmqEvYKQv28Ak" alt='3'/>
                                <p>Lorem</p>
                                <p>Lorem</p>
                                <p>Lorem</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img src='https://lh6.googleusercontent.com/proxy/jbl-ZwXr7ZkSjyvbiVLsXNagL1bT2ti22axEebq4NQZAV2Gz0vkJ5ZrNld_FsOwn6nkmqEvYKQv28Ak' alt='4'/>
                                <p>Lorem</p>
                                <p>Lorem</p>
                                <p>Lorem</p>
                                <p>Lorem</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img src='https://lh6.googleusercontent.com/proxy/jbl-ZwXr7ZkSjyvbiVLsXNagL1bT2ti22axEebq4NQZAV2Gz0vkJ5ZrNld_FsOwn6nkmqEvYKQv28Ak' alt='5'/>
                                <p>Lorem</p>
                                <p>Lorem</p>
                                <p>Lorem</p>
                                <p>Lorem</p>
                                <p>Lorem</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
  }
}
