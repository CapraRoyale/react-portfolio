import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const projectList = [
    { "a": "https://hamberder.herokuapp.com/", "title": "Hamberder", "desc": "To-Do style app, but with burders [sic]", "img": "/assets/img/screenshots/hamberder.png" },
    { "a": "https://potatofinder.herokuapp.com/", "title": "Potato Finder", "desc": "10-question partner-matching app, but with potatoes", "img": "/assets/img/screenshots/potatofinder.png" },
    { "a": "https://newsdredger.herokuapp.com/", "title": "News Dredger", "desc": "Scrape news from OpenSource.org unironically", "img": "/assets/img/screenshots/newsdredger.png" },
    { "a": "https://react-demo-click-game.herokuapp.com/", "title": "React-App Memory Game", "desc": "Memory game with ASL hand signs", "img": "/assets/img/screenshots/react-demo-click-game.png" },
    { "a": "https://react-review-google-books.herokuapp.com/", "title": "React-App Personal Library", "desc": "React-App personal library using Google Books API", "img": "/assets/img/screenshots/react-review-google-books.png" }
];

const cards = projectList.map((card, index) =>
    <Col key={index.toString()} lg={4} md={6} sm={12}>
        <Card className="mb-3 img-thumbnail">
            <a className="portfolio-link" href={card.a}>
                <Card.Img alt={card.desc} variant="top" src={card.img} />
                <Card.Body className="text-center">
                    <Card.Title>
                        {card.title}
                    </Card.Title>
                    <Card.Text>
                        <sub>{card.desc}</sub>
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    </Col>
);

const Portfolio = () => (
    <Row><Col>
        <Row>
            <Col><h3>Portfolio.js</h3></Col>
        </Row>
        <Row>
            {cards}
        </Row>
    </Col></Row>
);

export default Portfolio;