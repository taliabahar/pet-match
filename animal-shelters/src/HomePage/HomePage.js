import HomeTitle from '../HomeTitle/HomeTitle';
import React from 'react';
import './HomePage.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <HomeTitle />

      <div className="body">
        <Router>
          <div>
            <Link to="/quiz">Take Quiz</Link>
            <br />
            <br />
            <Link to="/gallery">View Gallery</Link>
          </div>
        </Router>
      </div>
    </div>
  );
}
