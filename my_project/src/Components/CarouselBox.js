import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from "../assets/forest.jpg";
import mountain1Img from "../assets/mountain1.jpg";
import mountain2Img from "../assets/mountain2.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            className='d-block w-100'
            src={forestImg}
            alt="Forest"
            />
            <Carousel.Caption>
                <h3>Forest Img</h3>
                <p>Loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
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
                <h3>Mountain1 Img</h3>
                <p>Lorem mountain1
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
                <h3>Mountain2 Img</h3>
                <p>Lorem
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
  }
}
