import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Portfolio = () => (
    <Row><Col>
        <Row>
            <Col><h3>Portfolio.js</h3></Col>
        </Row>
        <Row>
            <Col lg={4} md={6} sm={12}><a href="https://hamberder.herokuapp.com/"><Image src="/assets/img/screenshots/hamberder.png" thumbnail></Image></a></Col>
            <Col lg={4} md={6} sm={12}><a href="https://potatofinder.herokuapp.com/"><Image src="/assets/img/screenshots/potatofinder.png" thumbnail></Image></a></Col>
            <Col lg={4} md={6} sm={12}><a href="https://newsdredger.herokuapp.com/"><Image src="/assets/img/screenshots/newsdredger.png" thumbnail></Image></a></Col>
            <Col lg={4} md={6} sm={12}><a href="https://react-demo-click-game.herokuapp.com/"><Image src="/assets/img/screenshots/react-demo-click-game.png" thumbnail></Image></a></Col>
            <Col lg={4} md={6} sm={12}><a href="https://react-review-google-books.herokuapp.com/"><Image src="/assets/img/screenshots/react-review-google-books.png" thumbnail></Image></a></Col>
        </Row>
    </Col></Row>
);

export default Portfolio;