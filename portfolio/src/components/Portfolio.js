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
            <Col lg={4} md={6} sm={12}><Image src="/assets/img/screenshots/hamberder.png" thumbnail></Image></Col>
            <Col lg={4} md={6} sm={12}><Image src="/assets/img/screenshots/potatofinder.png" thumbnail></Image></Col>
            <Col lg={4} md={6} sm={12}><Image src="/assets/img/screenshots/newsdredger.png" thumbnail></Image></Col>
            <Col lg={4} md={6} sm={12}><Image src="/assets/img/screenshots/react-demo-click-game.png" thumbnail></Image></Col>
            <Col lg={4} md={6} sm={12}><Image src="/assets/img/screenshots/react-review-google-books.png" thumbnail></Image></Col>
        </Row>
    </Col></Row>
);

export default Portfolio;