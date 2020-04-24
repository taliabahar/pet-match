import HomeTitle from "../HomeTitle/HomeTitle";
import React from "react";
import Button from "react-bootstrap/Button";
import "./HomePage.css";
//import Quiz from "./Quiz";
//import Gallery from "../Gallery";


export default function HomePage({ setData }) {


  return (
    <div>
      <HomeTitle/>

      <div className="body">
      <Button variant="danger" >
          Take Quiz
      </Button>
      <br/>
      <br/>
      <Button variant="danger" >
          View Gallery
      </Button> 
      </div>

    </div>
  );
}