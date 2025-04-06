import React from 'react';
import { Container, Figure, Col, Row, Card, ListGroup } from 'react-bootstrap';
import Js from "../assets/js.png";
import Html from "../assets/html_css_js.png";
import Book from "../assets/120.1.jpg";
import Skills from "../assets/soft_skills.webp";

export default function Blog() {
  return (
    <Container>
      <Row>
        <Col className='blog-box'>
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
              src={Html} alt="html"
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
              src={Book} alt="book"
            />
            <Figure.Caption className='text-blog'>
              <h5>С чего начать?
              </h5>
              <p>Начало пути - изучение документации. В категориях справа вы найдёте подробную информацию о языках программирования, с помощью которых можно создать сайт.</p>
            </Figure.Caption>
          </Figure>
          <Figure className='blog-box'>
            <Figure.Image
              width={150}
              height={100}
              className='img-box'
              src={Skills} alt="skills"
            />
            <Figure.Caption className='text-blog'>
              <h5>Soft skills</h5>
              <p>Дополнительные качества разработчика - самообучение, гибкость, работа в команде, уверенность, решение проблем, коммуникация, творчество, креативное мышление, целеустремлённость и умение доводить начатое до конца.
              </p>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col className='sidebar' md='3'>
          <h5 className='text-center mt-5'>Categories</h5>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item action href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                HTML/CSS
              </ListGroup.Item>
              <ListGroup.Item action href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                JavaScript
              </ListGroup.Item>
              <ListGroup.Item action href="https://reactjs.org/">
                React
              </ListGroup.Item>
              <ListGroup.Item action href="https://getbootstrap.com/">
                Bootstrap
              </ListGroup.Item>
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

