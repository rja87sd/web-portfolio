"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className={`bg-body-tertiary ${styles.cyberpunkBg} ${styles.neonBorder} ${styles.sleekHeader}`}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className={`${styles.neonText} ${styles.largeText}`}
        >
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={styles.neonText}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" className={styles.neonText}>
              About
            </Nav.Link>
            <NavDropdown
              title="My Projects"
              id="basic-nav-dropdown"
              className={styles.neonText}
            >
              <NavDropdown.Item
                href="https://rja87sd.github.io/5e-Lookup/"
                className={styles.sleekNavDropdownItem}
              >
                5e Spell Lookup
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://rja87sd.github.io/simple-weather-app/"
                className={styles.sleekNavDropdownItem}
              >
                Simple Weather App
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://rja87sd.github.io/capstone-level-1/"
                className={styles.sleekNavDropdownItem}
              >
                Looking For Gamers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://github.com/rja87sd"
                className={styles.sleekNavDropdownItem}
              >
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
