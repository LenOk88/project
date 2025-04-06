import React from 'react'
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import lifeImg from '../assets/I_am.jpg';
import lifeImg2 from '../assets/mountain1.jpg';
import lifeImg3 from '../assets/mountain2.jpg';
import DreamsImg1 from '../assets/Barcelona.jpeg';
import DreamsImg2 from '../assets/Madrid.jpg';
import DreamsImg3 from '../assets/Paris.jpg';
import OlenaImg from "../assets/Olena.jpg";
import Job from "../assets/job.jpg";
import Krakov from "../assets/Krakov.jpg";
import Puzzle from "../assets/5-team-signs.jpg";
import Teamwork from "../assets/teamwork.jpg";
import Team from "../assets/team.jpg";
import Code from "../assets/code.jpg";
import Komp from "../assets/komp.jpeg";
import FrontEnd from "../assets/front-end.jpg";


export default function About() {

    return (
        <Container>
            <Tab.Container id='ledt-tabs-example' defaultActiveKey="first">
                <Row>
                    <Col>
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
                    <Col className='about-box' sm={9}>
                        <Tab.Content className='mt-3'>
                            <Tab.Pane eventKey="first">
                                <div className='box'>
                                    <img src={OlenaImg}
                                        style={{ width: "300px", height: "300px" }}
                                        alt='Olena' />
                                    <img src={Job}
                                        style={{ width: "300px", height: "300px" }}
                                        alt='job' />
                                    <img src={Krakov}
                                        style={{ width: "300px", height: "300px" }}
                                        alt='krakov' />
                                </div>
                                <p className='text-bottom'>Привет! Меня зовут Лена. И я начинающий программист. Моя цель - не только высокооплачиваемая работа в IT, а и достижения уважения и значимости своими знаниями и  целеустремленностью. Я могу быть разной и выполняла любую работу, но стремлюсь к тому, чтобы выполнять любимую.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className='box'>
                                    <img src={Puzzle}
                                        style={{ width: "300px", height: "300px" }}
                                        alt='team-puzzle' />
                                    <img src={Teamwork}
                                        style={{ width: "300px", height: "300px", border: "1px solid" }}
                                        alt='teamwork' />
                                    <img src={Team}
                                        style={{ width: "300px", height: "300px" }}
                                        alt='team' />
                                </div>
                                <p className='text-bottom'>Мечтаю о работе, где каждый член команды - это пазл и механизм, без которого не получится полной картинки и где каждый это понимает и ценит. Стремлюсь попасть в команду, где буду учиться и отдаваться работе на 100%</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div className='box'>
                                    <img src={Code}
                                        style={{ width: "300px", height: "300px" }}
                                        alt='code' />
                                    <img src={Komp}
                                        style={{ width: "300px", height: "300px", border: "1px solid" }}
                                        alt='komp' />
                                    <img src={FrontEnd}
                                        style={{ width: "300px", height: "300px" }}
                                        alt='FrontEnd' />
                                </div>
                                <p className='text-bottom'>Программирование это работа моей мечты, к которой я иду малыми, но уверенными шагами.</p>
                                <p className='text-bottom'>Front-End Basic,  Front-End Pro - это курсы, которые я закончила. HTML, CSS, JS, React, Bootstrap, Node.js...</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <div className='box'>
                                    <img src={lifeImg3} alt='life1' />
                                    <img src={lifeImg} alt='life2' />
                                    <img src={lifeImg2} alt='life3' />
                                </div>
                                <p className='text-bottom'>Совсем недавно узнала, что я очень люблю горы. Это красота, которую не передают фотографии. Приятная усталость, необыкновенная красота, цель и покорение вершины</p>
                                <p className='text-bottom'></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <div className='box'>
                                    <img src={DreamsImg2}
                                        style={{ width: "300px", height: "300px" }}
                                        alt='dreams2' />
                                    <img src={DreamsImg1}
                                        style={{ width: "300px", height: "300px" }}
                                        alt='dreams1' />
                                    <img src={DreamsImg3}
                                        style={{ width: "300px", height: "300px" }}
                                        alt='dreams3' />
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

