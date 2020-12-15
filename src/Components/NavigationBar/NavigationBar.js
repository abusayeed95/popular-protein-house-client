import React from "react";
import logo from "../../assets/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar id="navigation" className="px-md-5" expand="lg">
      <Link className="navbar-brand" to="/">
        <img className="logo" src={logo} alt="logo(popular protein house)" />
      </Link>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
          <Link className="nav-link" to="/blogs">
            Blogs
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
