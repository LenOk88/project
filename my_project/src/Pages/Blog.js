import React from 'react';
import { Container, Figure, Col, Row, Card, ListGroup } from 'react-bootstrap';
import Js from "../assets/js.png";

export default function Blog() {
    return (
      <Container>
        <Row>
          <Col>
            <Figure className='blog-box'>
              <Figure.Image
              width={150}
              height={100}
              className='img-box'
              src={Js} alt="js"
              />
              <Figure.Caption className='text-blog'>
                <h5>Мой выбор</h5>
                <p>Я выбрала для себя Front-End разработку, потому что между кодированием и красотой, которая предстает перед вашими глазами, есть лишь тонкая грань, и это то, что я люблю больше всего.
                </p>
              </Figure.Caption>
            </Figure>
            <Figure className='blog-box'>
              <Figure.Image
              width={150}
              height={100}
              className='img-box'
              src={Js} alt="js"
              />
              <Figure.Caption className='text-blog'>
                <h5>Что должен знать Frontend-разработчик</h5>
                <p>Основные технические навыки, которые нужно знать: – HTML, CSS и JavaScript: эти три языка работают вместе, они определяют внешний вид и функциональность страницы сайта.
                </p>
              </Figure.Caption>
            </Figure>
            <Figure className='blog-box'>
              <Figure.Image
              width={150}
              height={100}
              className='img-box'
              src={Js} alt="js"
              />
              <Figure.Caption className='text-blog'>
                <h5>С чего начать?
                </h5>
                <p>Начало пути - изучение документации.
              https://developer.mozilla.org/ru/docs/Web/HTML
              https://developer.mozilla.org/ru/docs/Web/CSS/Reference
              https://developer.mozilla.org/ru/docs/Web/JavaScript
</p>
              </Figure.Caption>
            </Figure>
            <Figure className='blog-box'>
              <Figure.Image
              className='img-box'
              src={Js} alt="js"
              />
              <Figure.Caption className='text-blog'>
                <h5>Soft skills</h5>
                <p>Дополнительные качества разработчика - самообучение, гибкость, работа в команде, уверенность, решение проблем, коммуникация, творчество, креативное мышление, целеустремлённость и умение доводить начатое до конца.
                </p>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md='3'>
            <h5 className='text-center mt-5'>Categories</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>Bootstrap</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className='mt-3' bg='light'>
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>Данные категории позволяют работают вместе, чтобы создать динамичные и красивые веб-страницы
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }

