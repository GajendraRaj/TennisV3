import React from "react";
import TennisGame from "./tennis-game";
import Constants from "../constant";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>{Constants.APP_TITLE}</h1>
      <TennisGame />
    </div>
  );
};

export default App;
