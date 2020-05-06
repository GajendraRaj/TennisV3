import React, { useState } from "react";
import Player from "./player";
import Score from "./score";
import Constants from "../../constant";

const TennisGame = () => {
  const state = {
    player1Score: 0,
    player2Score: 0,
  };
  const [score, setScore] = useState(state);

  const updateScore = (player) => {
    if (player === Constants.PLAYER1_NAME) {
      setScore((prevState) => ({
        ...prevState,
        player1Score: prevState.player1Score + 1,
      }));
    } else {
      setScore((prevState) => ({
        ...prevState,
        player2Score: prevState.player2Score + 1,
      }));
    }
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
        <Score
          player1Score={score.player1Score}
          player2Score={score.player2Score}
        />
      </div>
    </div>
  );
};

export default TennisGame;
