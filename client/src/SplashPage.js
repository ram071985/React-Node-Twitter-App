import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./index.css";
import twitterContainer from "./clipart-2-13-12-55-41.png";

function SplashPage() {
  return (
    <Container className="container" fluid>
      <Row>
        <Col className="d-inline mt-5 mb-5">
        <h2 className="welcome-text text-center">Welcome To Twitter Search Api</h2>
        <h6 className="d-block text-center describe"><strong>Search</strong> for user and topic tweets or view a <strong>random</strong> tweet from one of my five favorite twitter users.</h6>
        <Image className="d-inline mt-3 mb-4 ml-5 twitter-logo" src={twitterContainer} />
        </Col>
      </Row>
    
    </Container>
  );
}

export default SplashPage;
