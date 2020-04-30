import "./HomeTitle.css";

import Navbar from "react-bootstrap/Navbar";
import React from "react";

export default function HomeTitle() {
  return (
    <div className="title">
      <Navbar bg="light">
        <Navbar.Brand id="test" href="/">
          Pet Match
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
