import HelloImg from "../assets/Hello.jpg";

import { Button, Card, Container, Row } from 'react-bootstrap';

import React from 'react'
export default function Home() {
  return (
    <div className="home-bg">
      <div className='backgrund'>
        <div className='dark-screen'>
          <div className="before">
            <h3 className="dark-screen-text">Hello!</h3>
            <h4 className="dark-screen-text">My name is Olena Shevchenko.</h4>
            <p className="dark-screen-text">I am a Front-End developer</p>
          </div>
        </div>

        <img className='img-home' src={HelloImg} alt='Hello' />
      </div>
      <Container className="home-box">
        <h2 className='text-center m-4'>My support</h2>
        <Row md={3} className='m-4'>
          <Card text='primary' style={{ padding: '0' }}>
            <Card.Img variant='top'
              style={{ margin: '0' }}
              src="https://images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Card.Body>
              <Card.Title>Family</Card.Title>
              <Card.Text>В первую очередь моя поддержка в жизни это моя семья: мои дети и любимый мужчина. Благодаря им я вижу смысл, цель и радость в жизни.
              </Card.Text>
              <Button action href="https://zn.ua/SOCIUM/skromnoe_obayanie_ukrainskoy_semi.html" variant='primary'>About this</Button>
            </Card.Body>
          </Card>
          <Card text='primary' style={{ padding: '0' }}>
            <Card.Body>
              <Card.Title>Work</Card.Title>
              <Card.Text>Ну и конечно же работа! Работа это важная финансовая поддержка. Но если это работа мечты - это подарок судьбы.
              </Card.Text>
              <Button action href="https://www.facebook.com/story.php?story_fbid=577904227660922&id=100063240489560" variant='primary'>About this</Button>
            </Card.Body>
            <Card.Img variant='bottom'
              style={{ margin: '0' }}
              src="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </Card>
          <Card text='primary' style={{ padding: '0' }}>
            <Card.Img variant='top'
              style={{ margin: '0' }}
              src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Card.Body>
              <Card.Title>Travel</Card.Title>
              <Card.Text>Путешествия это поддержка, которая вдохновляет меня и даёт понять, что я живу.
              </Card.Text>
              <Button action href="https://www.ef.com/kz/blog/language/50-luchshih-citat-o-puteshestvijah/" variant='primary'>About this</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

