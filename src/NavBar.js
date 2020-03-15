import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Search from './Search.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function NavBar() {
  return (
    <Router>
    <Container>
    
      <Navbar className="color-nav" fixed="top" expand="lg" variant="dark">
        <Navbar.Brand  <Link to="/SplashPage.js">Twitter Search Api</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link onClick={<Search />}>Search</Nav.Link>
            <Nav.Link href="#link">Random</Nav.Link>
          </Nav>
          <Switch>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    </Router>
  );
}

export default NavBar;
