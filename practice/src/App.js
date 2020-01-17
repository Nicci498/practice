import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PlanetCard from "./components/card";
import { useLocalStorage } from "./components/hooks/useLocalStorage";

import { Button } from "reactstrap";

//"https://swapi.co/api/planets/"
const App = () => {
  const [user, setUser] = useState([]);
  const [favoriteStatus, setFavoriteStatus] = useLocalStorage("favorites", []);

  useEffect(
    () =>
      axios
        .get("https://swapi.co/api/planets/")
        .then(response => {
          console.log(response.data.results);
          setUser(response.data.results);
          console.log("our new state");
        })
        .catch(error => {
          console.log(error);
        }),

    []
  );

  const saveToFavorites = e => {
    e.preventDefault();

    setFavoriteStatus(e.target.value);
  };

  console.log("rendering...");

  if (user.length === 0) {
    return "Retrieving data...";
  }

  console.log("Our favorite planets:", favoriteStatus);

  return (
    <div>
        <h2>Favorite Planets:</h2>
        {/* <ul>
        {!favoriteStatus ? "none" : favoriteStatus.map(planet => (<li>{planet}</li>))}
        </ul> */}
      
      {user.map(planetData => (
        <>
          <PlanetCard planets={planetData} key={planetData.name} />
          <Button
            value={planetData.name}
            onClick={saveToFavorites}
            style={{ marginBottom: "1rem", marginLeft: "1rem" }}
          >
            💖
          </Button>
        </>
      ))}
    </div>
  );
};

export default App;
