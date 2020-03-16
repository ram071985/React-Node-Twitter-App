import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './index.css';
import Reid from "./images/reid.png";

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
                <Button as="input" type="button" value="Search By User Handle" />
                <Button className="d-inline ml-5 topic-button" as="input" type="button" value="Search By Topic" />
                </Col>
            </Row>
            <br />
            <Row className="tweet-row">
              <Col>
              <Image src={Reid} />
              <h6 className="real-name ml-5 mt-3">Reid Muchow</h6>
              </Col>
            </Row>
            <br />
        </Container>
    )
  }
}

export default Search;
