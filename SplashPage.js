import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Button } from "react-bootstrap";

function SplashPage() {
  return (
      <Container>
      <Jumbotron>
        <h1>Welcome To My Twitter Search API</h1>
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
