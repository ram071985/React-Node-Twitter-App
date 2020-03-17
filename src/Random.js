import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.css";
import Reid from "./images/reid.png";
import ReTweet from "./images/retweet-action.png";
import Like from "./images/like-action.png";

class Random extends Component {
  render() {
    return (
      <Container className="container-random">
        <Row>
          <Col>
          <h4 className="text-center mt-3 choose-text">Choose from one of my <strong>5</strong> favorite twitter users to see <strong>10</strong> of their random tweets.</h4>
          </Col>
        </Row>
        <Row>
          <Col className=" column-one">
            <button className="button-one" size="lg">
              Large button
            </button>
          </Col>
          <Col className="column-two">
            <button className="button-two" size="lg">
              Large button
            </button>
          </Col>
          <Col className="col-4-3">
            <button className="button-three" size="lg">
              Large button
            </button>
          </Col>
          <Col className="col-4-4">
            <button className="button-four" size="lg">
              Large button
            </button>
          </Col>
          <Col className="col-4-5">
            <button className="button-five" size="lg">
              Large button
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Random;
