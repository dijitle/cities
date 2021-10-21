import React, { useState, useEffect } from "react";
import "./Place.css";

export default function Place(props) {
  const [size, setSize] = useState(1);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const farWest = -125;
  const farSouth = 25;

  const mapWidth = 959;
  const mapHeight = 593;

  useEffect(function init() {
    const calcCoord = (lat, lon) => {
      setCoords({
        x: (parseFloat(lon) - farWest) * 10,
        y: (farSouth + parseFloat(lat)) * 5,
      });
    };

    const calcSize = (pop) => {
      setSize(props.pop / 200000);
    };

    calcCoord(props.lat, props.lon);
    calcSize(props.pop);
  }, []);

  return (
    <circle className="City" cx={coords.x} cy={coords.y} r={size}>
      <title>{props.name}</title>
    </circle>
  );
}
