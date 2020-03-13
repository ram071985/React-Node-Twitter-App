import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import './index.css';
import NavBar from './NavBar.js'

class Search extends Component {
  render() {
    return (
    <NavBar />
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
