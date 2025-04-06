import { Button, Container, Form } from 'react-bootstrap';
import React from 'react';

export default function Contacts() {
  return (
    <Container className='form-box' style={{ width: "500px" }}>
      <Form className='form'>
        <Form.Group controlId='formBasicEmail'>

          <h1 className='text-center'>Contact me</h1>
          <Form.Label>Email address</Form.Label>
          <Form.Control className='input-form' style={{ width: "475px" }} type='email' placeholder='Enter email' />
          <Form.Text>
            We will never share your email with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Example textarea</Form.Label>
          <Form.Control className='textarea-form' as='textarea' rows='3' />
        </Form.Group>

        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>

        <Button variant='primary' type='submit'>Submit</Button>

      </Form>
    </Container>
  )
}

