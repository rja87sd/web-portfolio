'use client';

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="My Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://rja87sd.github.io/5e-Lookup/">
                5e Spell Lookup
              </NavDropdown.Item>
              <NavDropdown.Item href="https://rja87sd.github.io/simple-weather-app/">
                Simple Weather App
              </NavDropdown.Item>
              <NavDropdown.Item href="https://rja87sd.github.io/capstone-level-1/">
                Looking For Gamers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/rja87sd">
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
