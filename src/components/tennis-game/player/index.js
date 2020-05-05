import React from "react";
import Constants from "../../../constant";

const Player = () => {
  return (
    <div>
      <h5>{Constants.PLAYER1_NAME}</h5>
      <button>{Constants.SCORE}</button>
    </div>
  );
};

export default Player;
