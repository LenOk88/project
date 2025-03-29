import React from 'react';
import { Button, Container, FormControl, Navbar, Nav, Form } from 'react-bootstrap';
import logo from './img.png';
export default function Header() {
    return (
        <>
            <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            style={{ width: "30px", height: "30px", borderRadius: "15px" }}
                            alt='Logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/about'>About</Nav.Link>
                            <Nav.Link href='/contacts'>Contacts</Nav.Link>
                            <Nav.Link href='/blog'>Blog</Nav.Link>
                        </Nav>
                        <Form className='container'>
                            <FormControl
                                type='text'
                                placeholder='Search'
                            />
                            <Button variant='outline-info'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
