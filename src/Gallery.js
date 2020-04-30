import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="Gallery">
      <h1 id="galleryHeader">Find the Right Animal for You</h1>
      <Card.Group centered itemsPerRow={4}>
        <Card style={{ margin: "25px 30px" }}>
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
        <Card style={{ margin: "25px 30px" }}>
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
        <Card style={{ margin: "25px 30px" }}>
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
        <Card style={{ margin: "25px 30px" }}>
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
        <Card style={{ margin: "25px 30px" }}>
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
        <Card style={{ margin: "25px 30px" }}>
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
      </Card.Group>
    </div>
  );
}

export default Gallery;
