import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

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
        <Row></Row>
        <Route exact path="/home" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />

        <Row><Col><hr></hr></Col></Row>
      </Container>
    </div>
  );
}

export default App;
