import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Home = () => (
    <Row>
        <Col lg={3} md={6}>
            <Image src="/assets/img/022820-512.png" thumbnail fluid></Image>
        </Col>
        <Col lg={9} md={6}>
            <h3>Home.js</h3>
            <hr></hr>
            <div class="center">Web Developer, Data Analyst, familiar with Javascript ES5 & Python 3</div>
        </Col>
    </Row>
);

export default Home;