import React from "react";
import Map from "./Components/Map";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [cities, setCities] = React.useState([
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Dallas",
    "Fort Worth",
    "Denver",
    "Miami",
    "Philadelphia",
    "Austin",
    "San Antonio",
    "Aurora",
    "Indianapolis",
    "Chesteron",
    "Portage",
    "New Haven",
    "Boston",
    "Providence",
    "Lansing",
    "Columbus",
    "Honolulu",
    "Boise",
    "Nashville",
    "Memphis",
    "Knoxville",
    "Chattanooga",
  ]);

  return (
    <div className="App">
      <div className="InputMap">
        <input
          className="CityInput fs-3 fw-bold m-3 p-3 bg-dark bg-gradient text-white"
          type="text"
          spellCheck="false"
          placeholder="Enter city name"
        />
        <Map />
      </div>
      <div className="MyCities">
        <ul>
          {cities.map((city) => (
            <li>{city}</li>
          ))}
        </ul>
      </div>
      <div className="MyCities">
        <ul>
          {cities.map((city) => (
            <li>{city}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
