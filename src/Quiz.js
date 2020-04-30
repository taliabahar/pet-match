import React, { useState } from "react";
import { getToken, simpleFetch } from "./api";

function Quiz() {
  // getToken().then(console.log("Got a token"));
  const [animalType, setAnimalType] = useState("");
  const [size, setSize] = useState({});
  const [age, setAge] = useState({});
  const [hasKids, setHasKids] = useState("");
  const [hasDogs, setHasDogs] = useState("");
  const [hasCats, setHasCats] = useState("");
  // const [experienced, setExperienced] = useState("");
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState(null);

  const onKeyDownHandler = (e) => {
    e.preventDefault();
    grabData();
  };

  async function grabData() {
    try {
      simpleFetch("animals", {
        type: animalType,
        size: size,
        age: age,
        location: postcode,
        good_with_children: hasKids,
        good_with_dogs: hasDogs,
        good_with_cats: hasCats,
        // special_needs: experienced,
        status: "adoptable",
        page: 1,
      }).then((result) => console.log(result));
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  }

  return (
    <div className="Quiz">
      <h1 id="QuizHeader">Let's Find Your Match</h1>
      <form>
        <p>What kind of animal are you looking for?</p>
        <input
          placeholder="Dog, Cat, Rabbit, Bird, etc."
          type="text"
          onChange={(e) => setAnimalType(e.target.value)}
          value={animalType}
        ></input>

        <p>What is your postal code?</p>
        <input
          placeholder=""
          type="text"
          onChange={(e) => setPostcode(e.target.value)}
          value={postcode}
        ></input>

        <p>Do you have a desired Age?</p>
        <input
          type="radio"
          id="baby"
          name="age"
          value="baby"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <label htmlFor="baby">Baby</label>
        <input
          type="radio"
          id="young"
          name="age"
          value="young"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <label htmlFor="large">Young</label>
        <input
          type="radio"
          id="adult"
          name="age"
          value="adult"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <label htmlFor="adult">Adult</label>
        <input
          type="radio"
          id="senior"
          name="age"
          value="senior"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <label htmlFor="senior">Senior</label>
        <p>What size animal are you looking for?</p>
        <input
          type="radio"
          id="small"
          name="size"
          value="small"
          onChange={(e) => setSize(e.target.value)}
        ></input>
        <label htmlFor="small">Small</label>
        <input
          type="radio"
          id="medium"
          name="size"
          value="medium"
          onChange={(e) => setSize(e.target.value)}
        ></input>
        <label htmlFor="medium">Medium</label>
        <input
          type="radio"
          id="large"
          name="size"
          value="large"
          onChange={(e) => setSize(e.target.value)}
        ></input>
        <label htmlFor="large">Large</label>
        <input
          type="radio"
          id="xlarge"
          name="size"
          value="xlarge"
          onChange={(e) => setSize(e.target.value)}
        ></input>
        <label htmlFor="xlarge">X-Large</label>

        <p>Do you have kids?</p>
        <input
          type="radio"
          id="yes"
          name="kids"
          value="true"
          onChange={(e) => setHasKids(e.target.value)}
        ></input>
        <label htmlFor="yes">Yes</label>
        <input
          type="radio"
          id="no"
          name="kids"
          value="false"
          onChange={(e) => setHasKids(e.target.value)}
        ></input>
        <label htmlFor="no">No</label>

        <p>Do you have dogs?</p>
        <input
          type="radio"
          id="yes"
          name="dogs"
          value="true"
          onChange={(e) => setHasDogs(e.target.value)}
        ></input>
        <label htmlFor="yes">Yes</label>
        <input
          type="radio"
          id="no"
          name="dogs"
          value="false"
          onChange={(e) => setHasDogs(e.target.value)}
        ></input>
        <label htmlFor="no">No</label>

        <p>Do you have cats?</p>
        <input
          type="radio"
          id="yes"
          name="cats"
          value="true"
          onChange={(e) => setHasCats(e.target.value)}
        ></input>
        <label htmlFor="yes">Yes</label>
        <input
          type="radio"
          id="no"
          name="cats"
          value="false"
          onChange={(e) => setHasCats(e.target.value)}
        ></input>
        <label htmlFor="no">No</label>

        {/* <p>Are you an experienced adopter?</p>
        <input
          type="radio"
          id="yes"
          name="experienced"
          value="true"
          onChange={(e) => setExperienced(e.target.value)}
        ></input>
        <label htmlFor="yes">Yes</label>
        <input
          type="radio"
          id="no"
          name="experienced"
          value="false"
          onChange={(e) => setExperienced(e.target.value)}
        ></input>
        <label htmlFor="no">No</label> */}
      </form>
      <button id="submit" onClick={onKeyDownHandler}>
        SUBMIT
      </button>
    </div>
  );
}
export default Quiz;
