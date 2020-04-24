import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HomePage/>
      
      <Switch> 
        <Route path="/quiz"> 
          <Quiz /> 
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
