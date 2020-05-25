import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Home = () => (
    <Row>
        <Col lg={3} md={6}><Image src="/assets/img/022820.jpg" thumbnail fluid></Image></Col>
        <Col lg={9} md={6}><h3>Home.js</h3>Tacos pitchfork polaroid paleo. Butcher coloring book vinyl wayfarers, asymmetrical mixtape narwhal pug everyday carry. Bitters vaporware vegan gochujang locavore, palo santo succulents pickled aesthetic humblebrag activated charcoal artisan pabst butcher. Banh mi mlkshk godard, locavore meggings retro letterpress pop-up lyft listicle williamsburg flannel gochujang schlitz af. Knausgaard vaporware affogato twee quinoa ethical.</Col>
    </Row>
);

export default Home;