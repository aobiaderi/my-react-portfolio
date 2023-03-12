import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Header() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand as={NavLink} to="/" className="my-nav1">Obiaderi Agbonrofo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" exact className="my-nav" >Home</Nav.Link>
          <Nav.Link href="#abt-section1" className="my-nav">About</Nav.Link> 
          <Nav.Link href="#my-projectsgallery" className="my-nav">ProjectsGallery</Nav.Link>
          <Nav.Link href="#contact" className="my-nav">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;