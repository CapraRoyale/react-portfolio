import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/home"><h2>Siege</h2></Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/home"><h5><i className="fad fa-home"></i> Home</h5></Nav.Link>
          <Nav.Link href="/portfolio"><h5><i className="fad fa-folder-open"></i> Portfolio</h5></Nav.Link>
          <Nav.Link href="/contact"><h5><i className="fad fa-address-card"></i> Contact</h5></Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Row></Row>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </Router>
        <Row><Col><hr></hr></Col></Row>
      </Container>
    </div>
  );
}

export default App;
