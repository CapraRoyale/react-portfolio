import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Contact = () => (
    <Row>
        <Col className="text-center" lg={9} md={6} ><h3>Contact.js</h3>
            <a className="btn btn-lg btn-dark m-1" href="https://github.com/CapraRoyale">
                <i className="fab fa-github-alt fa-4x"></i>
            </a>
            <a className="btn btn-lg btn-dark m-1" href="https://www.linkedin.com/in/capraroyale/">
                <i className="fab fa-linkedin fa-4x"></i>
            </a>
        </Col>
        <Col lg={3} md={6}><Image src="/assets/img/022820-512.png" thumbnail className="contact-img"></Image></Col>
    </Row>
);

export default Contact;