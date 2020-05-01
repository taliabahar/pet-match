import React from "react";
import "./App.css";
import AppHeader from "./AppHeader";
import { getToken, simpleFetch } from "./api";
//import Resources from './components/Resources';
//import 'semantic-ui-css/semantic.js';

export default function App() {
  getToken().then(console.log("Got a token"));
  return (
    <div className="App">
      <AppHeader />
    </div>
  );
}

function getDogs() {
  simpleFetch("animals", {
    type: "Dog",
    size: "small",
    age: "senior",
    special_needs: "true",
    page: 1,
  }).then((result) => console.log(result));
  // simpleFetch('types', {}).then(result => console.log(result));
}
