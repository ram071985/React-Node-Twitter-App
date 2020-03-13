import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import './index.css';

class Search extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col>
                <Form.Group>
                <Form.Control type="text" placeholder="Normal text" />
                </Form.Group>
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Search;
