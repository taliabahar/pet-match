import React, { useState } from "react";
import "./Resources.css";
import logo1 from "../images/logo1.png";
import { Table } from "react-bootstrap";

const Resources = (props) => {
  const [showResource, setShowResource] = useState(false); // move this to App.js

  const id = props.results;

  return (
    <div className="resourcesTable">
      <Table>
        <thead>
          <tr>
            <th>Resource</th>
            <th>Description</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Humane Society</td>
            <td>
              A helpful guide on adopting from shelters and how to find/look for
              the pet you want to adopt, equiped with its own library of
              resources.
            </td>
            <td>
              <form
                action="https://www.humanesociety.org/resources/adopting-animal-shelter-or-rescue-group"
                target="_blank"
              >
                <button type="submit">
                  <img
                    id="source"
                    src={
                      "https://pbs.twimg.com/profile_images/991013942968422400/Iguu7NGr_400x400.jpg"
                    }
                  ></img>
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>Paws</td>
            <td>
              A great guide on what to do immediately after adopting a dog or a
              cat.
            </td>
            <td>
              <form
                action="https://www.paws.org/adopt/after-you-adopt/"
                target="_blank"
              >
                <button type="submit">
                  <img
                    id="source"
                    src="https://www.underconsideration.com/brandnew/archives/paws_logo_paw_a.png"
                  ></img>
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>Petfinder</td>
            <td>
              A comprehensive guide on all steps within the pet-adoption
              process.
            </td>
            <td>
              <form
                action="https://www.petfinder.com/pet-adoption/dog-adoption/the-pet-adoption-guide/"
                target="_blank"
              >
                <button type="submit">
                  <img
                    id="source"
                    src="https://www.underconsideration.com/brandnew/archives/petfinder_monogram.png"
                  ></img>
                </button>
              </form>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
//https://www.petfinder.com/pet-adoption/dog-adoption/the-pet-adoption-guide/
export default Resources;
