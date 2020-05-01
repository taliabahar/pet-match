import "./Home.css";

import Navbar from "react-bootstrap/Navbar";
import React from "react";
import dog from "../images/dog.png";
import rabbit from "../images/rabbit.png";
import bird from "../images/bird.png";

export default function Home() {
  return (
    <div className="title">
      <h1>Welcome to Pet match!</h1>
      <h2>Let's find the right pet for you</h2>
      <h3>
        Our Mission <img className="animalPic" src={dog}></img>
      </h3>
      <p id="mission">
        Pet match advocates for the adoption of shelter animals and
        human-companion animal bonds. We provide companion animal suggestions
        based upon your lifestyle and theirs. We make the process of finding
        one's perfect animal as easy as possible. Take our Quiz to find your new
        best friend!
      </p>
      <div id="facts">
        <h3 className="info">
          Shelter Facts <img className="animalPic" src={rabbit}></img>
        </h3>
        <ul>
          <li>Each year, about 3.7 million animals are euthanized </li>
          <li>
            5 in 10 dogs and 7 in 10 cats in shelters are euthanized simply
            because there is no one to adopt them
          </li>
          <li>25 percent of shelter dogs are purebred </li>
          <li>
            Only 10 to 20 percent of dogs and cats owned are adopted from
            shelters
          </li>
          <li>
            Approximately $7.6 million companion animals enter animal shelters
            nationwide every year
          </li>
          <li>The average age of animals entering shelters is 18 months</li>
          <li>
            It costs taxpayers $2 billion annually to round up, house, kill and
            dispose of homeless animals
          </li>
        </ul>
      </div>
      <div id="reasons">
        <h3 className="info">
          Reasons to Adopt From a Shelter{" "}
          <img className="animalPic" src={bird}></img>
        </h3>
        <ul>
          <li>
            The financial cost of adopting a shelter animal is almost always
            less than purchasing an animal from a breeder.
          </li>
          <li>
            Shelter animals are given vaccinations upon arrival and go through a
            behavior screening process{" "}
          </li>
          <li>
            Overburdened shelters take in millions of stray, abused, and lost
            animals every year, and by adopting an animal, you’re making room
            for others.
          </li>
          <li>
            Owning a pet has psychological, emotional and physical benefits
          </li>
          <li>
            {" "}
            Most shelter pets wound up there because of a human problem like a
            move or a divorce, not because the animals did anything wrong. Many
            are already housetrained and used to living with families
          </li>
          <li>
            The average cost of basic food, supplies, medical care and training
            for a dog or cat is $400 to $700 annually
          </li>
          <li>
            {" "}
            By adopting you won’t be supporting the cruel practice of puppy
            mills where dogs are overbred and spend most of their lives in cages
          </li>
        </ul>
      </div>
    </div>
  );
}
