import React, { useState } from "react";
import Player from "./player";
import Score from "./score";
import Constants from "../../constant";

const TennisGame = () => {
  const [score, setScore] = useState(0);

  const updateScore = (player) => {
    setScore(1);
  };

  return (
    <div>
      <div className="playerContainer">
        <div className="leftContainer">
          <Player name={Constants.PLAYER1_NAME} onUpdateScore={updateScore} />
        </div>
        <Player name={Constants.PLAYER2_NAME} onUpdateScore={updateScore} />
      </div>
      <div>
        <Score scores={score} />
      </div>
    </div>
  );
};

export default TennisGame;
