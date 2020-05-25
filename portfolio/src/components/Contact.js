import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Contact = () => (
    <Row>
        <Col lg={3} md={6}><Image src="/assets/img/022820.jpg" thumbnail className="contact-img"></Image></Col>
        <Col className="text-center" lg={9} md={6} class><h3>Contact.js</h3>
            <a href="https://github.com/CapraRoyale" className="throb"><i class="fab fa-github-alt"></i></a>
            <a href="https://www.linkedin.com/in/capraroyale/" className="throb"><i class="fab fa-linkedin"></i></a>
        </Col>
    </Row>
);

export default Contact;