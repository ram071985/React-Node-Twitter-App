import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./index.css";
import colImage from "./SILHOUETTE-PHOTOGRAPHY-OF-CLOUDS-692116.jpeg";
import twitterContainer from "./Twitter_Logo_WhiteOnImage.png";

function SplashPage() {
  return (
    <Container fluid>
      <br />
      <br />
      <br />
      <Row>
        <Col >
        <h1 className="top-left" id="header-text">Welcome To Twitter Search Api</h1>
        <Image className="mt-5 jumbotron" src={colImage} fluid />
        <Image className="twitter-logo" src={twitterContainer} />
        </Col>
      </Row>
    </Container>
  );
}

export default SplashPage;
