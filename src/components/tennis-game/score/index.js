import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Score = (props) => {
  const [score, setScore] = useState("0");
  const { player1Score } = props;

  useEffect(() => {
    let gameScore;
    if (player1Score === 1) {
      gameScore = `15, 0`;
    } else if (player1Score === 2) {
      gameScore = `30, 0`;
    } else if (player1Score === 3) {
      gameScore = `40, 0`;
    } else {
      gameScore = "0";
    }

    setScore(gameScore);
  }, [player1Score]);

  return (
    <div>
      <h5>{Constants.SCORE}</h5>
      <label>{score}</label>
    </div>
  );
};

Score.propTypes = {
  player1Score: PropTypes.number.isRequired,
};

export default Score;
