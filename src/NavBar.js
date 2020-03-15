import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Search from "./Search.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SplashPage from "./SplashPage.js"

export default function NavBar() {
  return (
    <Router>
      <Container>
        <Navbar className="color-nav" fixed="top" expand="lg" variant="dark">
          <Navbar.Brand as={link} to="/">
            Twitter Search Api
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={link} to="/Search">
                Search
              </Nav.Link>
              <Nav.Link as={link} to="/Random">
                Random
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
             <SplashPage />
          </Route>
          <Route path="/Search">
             <Search />
          </Route>
          <Route path="/Random">

          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
