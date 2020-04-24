import React from 'react';
import { getToken, simpleFetch } from './api';
import './App.css';
import HomePage from './HomePage/HomePage';

export default function App() {
  getToken().then(console.log('Got a token'));
  return (
    <div className="App">
      <HomePage />
      <button onClick={getDogs}>Get some dogs</button>
    </div>
  );
}

function getDogs() {
  //  simpleFetch('animals', { type: 'Rabbit', page: 1 }).then(result => console.log(result));
  simpleFetch('types', {}).then(result => console.log(result));
}
