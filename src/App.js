import React from "react";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import HomeTitle from "./HomeTitle/HomeTitle";
import AnimalMap from "./Map/Map";
import { getToken, simpleFetch } from "./api";
//import Resources from './components/Resources';
//import 'semantic-ui-css/semantic.js';

export default function App() {
  getToken().then(console.log("Got a token"));
  return (
    <div className="App">
      <HomeTitle />
      <HomePage />
      <AnimalMap />
      {/* <Resources /> */}
      <button onClick={getDogs}>Get some dogs</button>
    </div>
  );
}

function getDogs() {
  //  simpleFetch('animals', { type: 'Rabbit', page: 1 }).then(result => console.log(result));
  simpleFetch("types", {}).then((result) => console.log(result));
}
