import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import HomeTitle from './HomeTitle/HomeTitle';
//import Resources from './components/Resources';
//import 'semantic-ui-css/semantic.js';

function App() {
  return (
    <div className="App">
      <HomeTitle /> 
      <HomePage />
          


      {/* <Resources /> */}
    </div>
  );
}

export default App;
