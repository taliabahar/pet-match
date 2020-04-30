import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Gallery.css";

function Gallery(props) {
  console.log("props: ", props);
  return (
    <div className="outer">
      {/* <h1 id="galleryHeader">Find the Right Animal for You</h1> */}
      {props &&
        props.results &&
        props.results.animals &&
        props.results.animals.map((result) => (
          <div className="Gallery">
            <Card.Group centered itemsPerRow={4}>
              <Card style={{ margin: "25px 30px" }}>
                <Image
                  src={result.primary_photo_cropped.medium}
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
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        ))}
    </div>
  );
}

export default Gallery;
