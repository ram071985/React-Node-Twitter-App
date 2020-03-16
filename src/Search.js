import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './index.css';

class Search extends Component {
  render() {
    return (
        <Container>
          <br />
          <br />
            <Row>
                <Col>
                <Form.Group>
                <Form.Control className="control-form" type="input" placeholder="Search Twitter..." />
                </Form.Group>
                <Button as="input" type="button" value="Seach By User Handle" />
                <Button className="d-inline ml-5 topic-button" as="input" type="button" value="Search By Topic" />
                </Col>
            </Row>
            <br />
            <br />
        </Container>
    )
  }
}

export default Search;
