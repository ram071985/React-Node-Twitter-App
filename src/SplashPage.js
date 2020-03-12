import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Button } from "react-bootstrap";
import './index.css'
import colImage from './SUNRISE-BUILDING-PHOTOGRAPHY-809801.jpeg';




function SplashPage() {
  const imageUrl = window.innerWidth >= 650 ? colImage : colImage;
  return (
    <Container>
      <br />
      <br />
      <Jumbotron className="mt-5 jumbotron" style={{backgroundImage: `url(${imageUrl})`}}>
        <h1 className="headline">Welcome To My Twitter Search Api</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Search now!</Button>
        </p>
      </Jumbotron>
    </Container>
  );
}

export default SplashPage;
