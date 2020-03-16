import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
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
              <Image className="d-inline mt-1 mr-1 ml-1" src={Reid} />
              <h6 className="d-inline real-name ml-1 mt-2">Reid Muchow</h6>
              </Col>
            </Row>
            <br />
        </Container>
    )
  }
}

export default Search;
