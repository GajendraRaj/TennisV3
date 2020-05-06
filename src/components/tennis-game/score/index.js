import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Score = (props) => {
  const SCORE_LOOKUP = ["0", "15", "30", "40"];
  const [score, setScore] = useState("0");
  const { player1Score, player2Score } = props;

  useEffect(() => {
    const gameScore = () => {
      const isPlayersScoreEqual = player1Score === player2Score;
      const isDeuce = player1Score >= 3;

      if (isPlayersScoreEqual) {
        if (isDeuce) {
          return Constants.DEUCE;
        }
        return SCORE_LOOKUP[player1Score] + " all";
      } else {
        return SCORE_LOOKUP[player1Score] + ", " + SCORE_LOOKUP[player2Score];
      }
    };

    setScore(gameScore);
  }, [player1Score, player2Score, SCORE_LOOKUP]);

  return (
    <div>
      <h5>{Constants.SCORE}</h5>
      <label>{score}</label>
    </div>
  );
};

Score.propTypes = {
  player1Score: PropTypes.number.isRequired,
  player2Score: PropTypes.number.isRequired,
};

export default Score;
