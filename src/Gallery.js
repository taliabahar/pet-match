import React from "react";
import { Card, Image, GridColumn, CardDescription } from "semantic-ui-react";
import "./Gallery.css";

function Gallery(props) {
  console.log("props: ", props);
  return (
    <div className="outer">
      <Card.Group centered itemsPerCol={4}>
      {props &&
        props.results &&
        props.results.animals &&
        props.results.animals.map((result) => (
          <div className="Gallery">
              <Card classname="pet-card" style={{ margin: "25px 30px" }}>
                <Image
                  src={result.primary_photo_cropped.small}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>{result.name}</Card.Header>
                  <Card.Meta>{result.breeds.primary}</Card.Meta>
                  <div className="wrapper">
                    <Card.Description>
                      {/* Age: 3 &#x25CD; Sex: F &#x25CD; Size: 20lbs */}
                      Age: {result.age} / Sex: {result.gender} / Size:
                      {result.size}
                    </Card.Description>
                    <Card.Description>
                      {result.contact.address.city},{" "}
                      {result.contact.address.state}{" "}
                      {result.contact.address.postcode}
                    </Card.Description>
                    <br />
                    <CardDescription>
                      <a href={result.url}>Learn More</a>
                    </CardDescription>
                  </div>
                </Card.Content>
              </Card>
          </div>
        ))}
      </Card.Group>
    </div>
  );
}

export default Gallery;
