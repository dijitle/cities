import React from "react";
import Papa from "papaparse";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState(["Name"]);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch("/data/uscities.csv");
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setRows(rows);
    }
    getData();
  }, []); // [] means just do this once, after initial render
  return (
    <div className="App container-fluid">
      <input
        className="CityInput fs-3 fw-bold m-3 p-3 bg-dark bg-gradient text-white"
        type="text"
        spellcheck="false"
        placeholder="Enter city name"
      />
    </div>
  );
}

export default App;
