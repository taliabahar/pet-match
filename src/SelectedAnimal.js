import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Gallery.css";
import { Grid, Segment } from "semantic-ui-react";

function SelectedAnimal() {
  return (
    <div className="selectedAnimal">
      <h1 id="selectedAnimalHeader">It's a Match!</h1>
      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Card style={{ margin: "0 auto", width: "70%" }}>
              <Image
                src="https://react.semantic-ui.com/images/wireframe/white-image.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Animal Name</Card.Header>
                <Card.Meta>Animal Type/Breed</Card.Meta>
                <div className="wrapper">
                  <Card.Description>
                    {/* Age: 3 &#x25CD; Sex: F &#x25CD; Size: 20lbs */}
                    Age: 3 / Sex: F / Size: 20lbs
                  </Card.Description>
                  <Card.Description>ZipCode: 90035</Card.Description>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Segment style={{ margin: "0 auto", width: "90%", height: "20%" }}>
              <p style={{ fontSize: "20px", marginBottom: "70px" }}>
                Description:{" "}
              </p>
              <ul
                style={{
                  textAlign: "left",
                  fontSize: "20px",
                  lineHeight: "30px",
                }}
              >
                <div id="left" style={{ float: "left" }}>
                  <li>House Trained: </li>
                  <li>Good with Children: </li>
                  <li>Good with Dogs: </li>
                  <li>Good with Cats: </li>
                </div>
                <div id="right" style={{ float: "right" }}>
                  <li>Declawed: </li>
                  <li>Spayed/Neutered: </li>
                  <li>Special Needs: </li>
                  <li>Current Shots: </li>
                </div>
              </ul>
            </Segment>
            <Segment
              style={{ margin: "0 auto", width: "90%", marginTop: "20px" }}
            >
              2
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default SelectedAnimal;
