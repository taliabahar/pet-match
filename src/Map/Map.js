import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";

const AnimalMap = (props) => {
  const [viewport, setViewport] = useState({
    width: "400px",
    height: "400px",
    latitude: 42.430472,
    longitude: -123.334102,
    zoom: 16,
  });

  const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_KEY;

  return (
    <div className="animalMap">
      <ReactMapGL
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        mapboxApiAccessToken={accessToken}
      ></ReactMapGL>
    </div>
  );
};

export default AnimalMap;
