import React from "react";
import "./HomePage.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Gallery from "../Gallery";
import { Button } from "react-bootstrap";
import Quiz from "../Quiz";
import Navbar from "react-bootstrap/Navbar";

export default function HomePage() {
  return (
    <div>
      <div className="homeBody">
        <Router>
          <div>
            <Link to="/quiz">
              <Button id="quiz" color="white" className="is-rounded">
                <span>Take Quiz</span>
              </Button>
            </Link>
            <br />
            <br />
            <Link to="/gallery">
              <Button id="gallery" color="white" className="is-rounded">
                <span>View Gallery</span>
              </Button>
            </Link>
            <Switch>
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/quiz">
                <Quiz />
              </Route>
              {/* <Route path="/Gallery" component={Gallery} /> */}
              {/* <Route path="/Quiz" component={Quiz} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}
