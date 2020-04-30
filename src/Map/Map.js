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

  const accessToken =
    "pk.eyJ1IjoiamlnYXJzd2FtIiwiYSI6ImNrOW1pdDJiZTA3OXMzZHRzYXBhMDZ5b3cifQ.3TL43jnbxJ9p50K62fH1lQ";

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
