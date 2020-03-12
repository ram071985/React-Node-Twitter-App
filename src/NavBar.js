import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import SplashPage from "./SplashPage.js";

function NavBar() {
  return (
    <Container>
      <Navbar className="color-nav" fixed="top" expand="lg" variant="dark">
        <Navbar.Brand onClick={<SplashPage />} href="#home">Twitter Search Api</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Search</Nav.Link>
            <Nav.Link href="#link">Random</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBar;
