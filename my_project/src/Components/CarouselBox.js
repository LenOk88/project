import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from "../assets/forest.jpg";
import mountain1Img from "../assets/mountain1.jpg";
import mountain2Img from "../assets/mountain2.jpg";


export default function CarouselBox() {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            className='d-block w-100'
            src={forestImg}
            alt="Forest"
            />
            <Carousel.Caption>
                <h3>Важно помнить</h3>
                <p>Самое прекрасное, что я имею - это жизнь!
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className='d-block w-100'
            src={mountain1Img}
            alt="Mountain1"
            />
            <Carousel.Caption>
                <h3>Цитата</h3>
                <p>Всё, что нас не убивает, делает нас сильнее.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className='d-block w-100'
            src={mountain2Img}
            alt="mountain2"
            />
            <Carousel.Caption>
                <h3>Горы</h3>
                <p>Лучше гор могут быть только горы, на которых ещё не бывал.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
  }

