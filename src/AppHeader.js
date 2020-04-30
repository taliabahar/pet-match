import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Gallery from "./Gallery";
// import { Button } from "react-bootstrap";
import Quiz from "./Quiz";
import HomeTitle from "./HomeTitle/HomeTitle";
// import Link from "react-bootstrap/Nav";

import "./AppHeader.css";
// import resume from "./resume.pdf";

export default function AppHeader() {
  return (
    <Router>
      {/* <div className="header-navbar"> */}
      <Navbar>
        <Link to="/home" className="header-logo">
          Pet Match
        </Link>
        <Nav className="header-links">
          <Link to="/gallery">Gallery</Link>
          <Link to="/quiz">Quiz</Link>
        </Nav>
      </Navbar>
      {/* </div> */}
      <div>
        <Switch>
          <Route path="/home">
            <HomeTitle />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
