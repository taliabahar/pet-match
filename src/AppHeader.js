import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Gallery from "./Resources/Resources.js";
// import { Button } from "react-bootstrap";
import Quiz from "./Quiz";
import Home from "./Home/Home";
import magnifyingGlass from "./images/search.png";

import "./AppHeader.css";

export default function AppHeader() {
  return (
    <Router>
      <Navbar>
        <Link to="/" className="header-logo">
          Pet Match <img src={magnifyingGlass} className="header-img"></img>
        </Link>
        <Nav className="header-links">
          <Link to="/gallery">Resources</Link>
          <Link to="/quiz">Quiz</Link>
        </Nav>
      </Navbar>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/gallery">
            <Gallery />
          </Route> */}
          <Route path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
