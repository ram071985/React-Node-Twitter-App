import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import './index.css';

class Search extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col>
                <Form.Group>
                <Form.Control type="text" placeholder="Search for @username or topic..." />
                </Form.Group>
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Search;
