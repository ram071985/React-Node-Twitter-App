import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import './index.css';
import Reid from "./images/reid.png";
import ReTweet from "./images/retweet-action.png"
import Like from "./images/like-action.png"

class Random extends Component {
    render() {
        return (
            <Container className="container-random">
                <Row>
                    <Col className=" column-one">
                    <h6 className="d-inline favorite-name-random"><strong>Reid Muchow</strong></h6>
                    </Col>
                    <Col className="column-two">
                    <h6 className="d-inline favorite-name-random ml-1 mt-1"><strong>Reid Muchow</strong></h6>
                    </Col>
                    <Col className="col-4-3">
                    <h6 className="d-inline favorite-name-random ml-1 mt-1"><strong>Reid Muchow</strong></h6>
                    </Col>
                    <Col className="col-4-4">
                    <h6 className="d-inline favorite-name-random ml-1 mt-1"><strong>Reid Muchow</strong></h6>
                    </Col>
                    <Col className="col-4-5">
                    <h6 className="d-inline favorite-name-random ml-1 mt-1"><strong>Reid Muchow</strong></h6>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Random;