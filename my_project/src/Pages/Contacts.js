import { Button, Container, Form } from 'react-bootstrap';
import React from 'react';

export default function Contacts() {
  return (
      <Container style={{ width: "500px"}}>
        <h1 className='text-center'>Contact me</h1>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{ width: "475px"}} type='email' placeholder='Enter email'/>
            <Form.Text>
            We will never share your email with anyone else
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as='textarea' rows='3'/>
          </Form.Group>

          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out'/>
          </Form.Group>

          <Button variant='primary' type='submit'>Submit</Button>

        </Form>
      </Container>
    )
  }

