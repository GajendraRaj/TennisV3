import React from "react";
import Player from "./player";
import Score from "./score";
import Constants from "../../constant";

const TennisGame = () => {
  return (
    <div>
      <div className="playerContainer">
        <div className="leftContainer">
          <Player name={Constants.PLAYER1_NAME} />
        </div>
        <Player name={Constants.PLAYER2_NAME} />
      </div>
      <div>
        <Score />
      </div>
    </div>
  );
};

export default TennisGame;
