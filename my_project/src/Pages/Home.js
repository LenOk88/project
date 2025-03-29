
import CarouselBox from '../Components/CarouselBox';
import { Button, Card, Container, Row } from 'react-bootstrap';

import React from 'react'
export default function About() {
    return (
      <>
      <CarouselBox/>
      <Container>
        <h2 className='text-center m-4'>My support</h2>
        <Row md={3} className='m-4'>
          <Card text='primary' style={{padding: '0'}}>
            <Card.Img variant='top'
             style={{margin: '0'}}
            src="https://images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Card.Body>
              <Card.Title>Family</Card.Title>
              <Card.Text>В первую очередь моя поддержка в жизни это моя семья: мои дети и любимый мужчина. Благодаря им я вижу смысл, цель и радость в жизни.
              </Card.Text>
              <Button variant='primary'>About me</Button>
            </Card.Body>
          </Card>
          <Card text='primary' style={{padding: '0'}}>
            <Card.Body>
              <Card.Title>Work</Card.Title>
              <Card.Text>Ну и конечно же работа! Работа это важная финансовая поддержка. Но если это работа мечты - это подарок судьбы.
              </Card.Text>
              <Button variant='primary'>About me</Button>
            </Card.Body>
            <Card.Img variant='bottom'
            style={{margin: '0'}}
            src="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </Card>
          <Card text='primary' style={{padding: '0'}}>
            <Card.Img variant='top'
            style={{margin: '0'}}
            src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Card.Body>
              <Card.Title>Travel</Card.Title>
              <Card.Text>Путешествия это поддержка, которая вдохновляет меня и даёт понять, что я живу.
              </Card.Text>
              <Button variant='primary'>About me</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container> 
      </>
    );
  }

