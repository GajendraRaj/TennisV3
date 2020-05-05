import React from "react";
import Player from "./player";
import Score from "./score";

const TennisGame = () => {
  return (
    <div>
      <div>
        <Player />
      </div>
      <div>
        <Score />
      </div>
    </div>
  );
};

export default TennisGame;
