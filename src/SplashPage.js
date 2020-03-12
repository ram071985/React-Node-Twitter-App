import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Button } from "react-bootstrap";
import './index.css'



let sectionStyle = {
  backgroundImage: `url(${Background})`
};

function SplashPage() {
  return (
    <Container>
      <br />
      <br />
      <Jumbotron className="mt-5 jumbotron">
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
