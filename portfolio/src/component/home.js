import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home"><h2 class="throb"><i class="fas fa-genderless"></i> Siege</h2></Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href="/home"><h5 class="throb"><i class="fas fa-home"></i> Home</h5></Nav.Link>
                    <Nav.Link href="/portfolio"><h5 class="throb"><i class="fas fa-folder-open"></i> Portfolio</h5></Nav.Link>
                    <Nav.Link href="/contact"><h5 class="throb"><i class="fas fa-address-card"></i> Contact</h5></Nav.Link>
                </Nav>
            </Navbar>
            <Container>
                <Row><Col></Col></Row>
                <Row>
                    <Col lg={3} md={6}><Image src="/assets/img/022820.jpg" thumbnail fluid></Image></Col>
                    <Col lg={9} md={6}><h3>Home.js</h3>Wayfarers flexitarian 3 wolf moon tattooed fingerstache. Deep v prism dreamcatcher venmo kale chips direct trade vexillologist plaid migas artisan raclette kogi butcher green juice master cleanse. Bicycle rights 8-bit crucifix, normcore locavore ennui snackwave unicorn austin master cleanse hoodie. Tacos craft beer gentrify tofu succulents quinoa, kitsch migas snackwave retro austin tumeric you probably haven't heard of them freegan deep v. Sustainable roof party try-hard bespoke. Whatever sriracha pickled lomo kombucha cardigan selvage PBR&B la croix farm-to-table yuccie chambray edison bulb. Artisan chillwave williamsburg, vinyl flannel sartorial shaman woke chicharrones bicycle rights kickstarter.</Col>
                </Row>
                <Row><Col><hr></hr></Col></Row>
            </Container>
        </div>
    );
}

export default App;
