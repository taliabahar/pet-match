import "./HomeTitle.css";

import Navbar from "react-bootstrap/Navbar";
import React from "react";

export default function HomeTitle() {
  return (
    <div className="center-navbar">
      <Navbar bg="danger" expand="lg">
        <Navbar.Brand href="/" className="navbar-brand-custom">
          Pet Match
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}