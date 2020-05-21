import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home"><h2><i class="fas fa-genderless"></i> Siege</h2></Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#home"><h5><i class="fas fa-home"></i> Home</h5></Nav.Link>
          <Nav.Link href="#portfolio"><h5><i class="fas fa-folder-open"></i>  Portfolio</h5></Nav.Link>
          <Nav.Link href="#contact"><h5><i class="fas fa-address-card"></i> Contact</h5></Nav.Link>
        </Nav>
      </Navbar>

      <Container>
        <Row>
          <Col> </Col>
        </Row>
      </Container>
    </div >
  );
}

export default App;
