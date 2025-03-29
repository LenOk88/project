
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import lifeImg from '../assets/I_am.jpg';
import lifeImg2 from '../assets/mountain1.jpg';
import lifeImg3 from '../assets/mountain2.jpg';
import DreamsImg1 from '../assets/Barcelona.jpeg';
import DreamsImg2 from '../assets/Madrid.jpg';
import DreamsImg3 from '../assets/Paris.jpg';
import OlenaImg from "../assets/Olena.jpg";


import React from 'react'


export default function About() {

    return (
        <Container>
            <Tab.Container id='ledt-tabs-example' defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column mt-2">
                        <Nav.Item>
                            <Nav.Link eventKey="first">I am</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Programming</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Life</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fifth">Dreams</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className='mt-3'>
                            <Tab.Pane eventKey="first">
                                <div className='box'>
                                <img className='img-about' src={OlenaImg} alt='Olena'/>
                                <p className='text-box'>Привет! Меня зовут Лена. И я начинающий программист. Моя цель - не только высокооплачиваемая работа в IT, а и достижения уважения и значимости своими знаниями и  целеустремленностью.  </p>
                                </div>
                                <p className='text-bottom'></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <div className='box'>
                                <img className='img-about' src="https://www.management.com.ua/notes/5-team-signs.jpg" alt='Team'/>
                                <p className='text-box'>Мечтаю о работе, где каждый член команды - это пазл, без которого не получится полной картинки и где каждый это понимает и ценит каждый пазлик.</p>
                                </div>
                                <p className='text-bottom'></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <div className='box'>
                                <img className='img-about' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75eeH0hC9pRDHHChBHwnf9sGemhKaMojwKw&s" alt='Programming'/>
                                <p className='text-box'>Front-End Basic,  Front-End Pro - это курсы, которые я закончила. HTML, CSS, JS, React, Bootstrap, Node.js...</p>
                                </div>
                                <p className='text-bottom'>Программирование это работа моей мечты, к которой я иду малыми, но уверенными шагами.</p>
                                <p className='text-bottom'></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            <div className='box'>
                                <img src={lifeImg3} alt='life1'/>
                                <img src={lifeImg} alt='life2'/>
                                <img src={lifeImg2} alt='life3'/>
                                </div>
                                <p className='text-bottom'>Совсем недавно узнала, что я очень люблю горы. Это красота, которую не передают фотографии. Приятная усталость, необыкновенная красота, цель и покорение вершины</p>
                                <p className='text-bottom'></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                            <div className='box'>
                                <img src={DreamsImg2}
                                style={{ width: "300px", height: "300px" }}
                                alt='dreams2'/>
                                <img src={DreamsImg1}
                                style={{ width: "300px", height: "300px" }}
                                alt='dreams1'/>
                                <img src={DreamsImg3}
                                style={{ width: "300px", height: "300px" }}
                                alt='dreams3'/>
                                </div>
                                <p className='text-bottom'>Это те места,  о которых я мечтаю, но ещё не побывала. Мадрид - это город мечты, увидеть который загадала себе ещё в детстве. О Барселоне мечтает сын, а Париж это то о чем мечтает почти каждая девочка. </p>
                                <p className='text-bottom'></p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
  }

