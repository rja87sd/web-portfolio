"use client"; // Indicates that this component uses client-side rendering

import React from "react"; // Importing React library
import Container from "react-bootstrap/Container"; // Importing Container component from react-bootstrap
import Nav from "react-bootstrap/Nav"; // Importing Nav component from react-bootstrap
import Navbar from "react-bootstrap/Navbar"; // Importing Navbar component from react-bootstrap
import NavDropdown from "react-bootstrap/NavDropdown"; // Importing NavDropdown component from react-bootstrap
import styles from "./Header.module.css"; // Importing CSS module for styling

// Functional component named Header
export default function Header() {
  return (
    // Navbar component with various classes for styling
    <Navbar
      bg="dark" // Dark background
      data-bs-theme="dark" // Bootstrap dark theme
      expand="lg" // Expand the navbar on large screens
      className={`bg-body-tertiary ${styles.cyberpunkBg} ${styles.neonBorder} ${styles.sleekHeader}`}
    >
      <Container>
        {/* Navbar brand with a link to home and custom styling */}
        <Navbar.Brand
          href="#home"
          className={`${styles.neonText} ${styles.largeText}`}
        >
          My Portfolio
        </Navbar.Brand>
        {/* Toggle button for collapsing the navbar */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Collapsible navbar content */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav component to hold the navigation links */}
          <Nav className="me-auto">
            {/* Nav.Link components with links to different pages and custom styling */}
            <Nav.Link href="/" className={styles.neonText}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" className={styles.neonText}>
              About
            </Nav.Link>
            {/* NavDropdown component for dropdown menu */}
            <NavDropdown
              title="My Projects"
              id="basic-nav-dropdown"
              className={styles.neonText}
            >
              {/* Dropdown items with links to different projects and custom styling */}
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
              {/* Divider for separating sections in the dropdown */}
              <NavDropdown.Divider />
              {/* Dropdown item with link to GitHub and custom styling */}
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
