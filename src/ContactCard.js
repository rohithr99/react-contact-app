import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';



function ContactCard({ data }) {
  return (
    <Container>
      <Row>

        {
          data.map(i => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <Link to={`contactView/${i.id}`} style={{textDecoration: 'none'}}>
                <Card className="ms-2 mt-2">
                  <Card.Img className="p-1" variant="top" src={i.profile} style={{ height: "300px" }} />
                  <Card.Body>
                    <Card.Title>{i.username}</Card.Title>
                    <Card.Title>Mobile : {i.mobile}</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Place : {i.place}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Link>

            </Col>))
        }

      </Row>
    </Container>
  )
}

export default ContactCard