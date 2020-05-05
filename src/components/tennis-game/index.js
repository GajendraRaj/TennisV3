import React from "react";
import Player from "./player";
import Score from "./score";

const TennisGame = () => {
  return (
    <div>
      <div className="playerContainer">
        <div className="leftContainer">
          <Player name="Player 1" />
        </div>
        <Player name="Player 2" />
      </div>
      <div>
        <Score />
      </div>
    </div>
  );
};

export default TennisGame;
