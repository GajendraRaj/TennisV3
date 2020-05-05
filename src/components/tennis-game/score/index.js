import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Score = (props) => {
  const [score, setScore] = useState("0");
  const { scores } = props;
  useEffect(() => {
    let gameScore;
    if (scores === 1) {
      gameScore = `15, 0`;
    } else {
      gameScore = "0";
    }

    setScore(gameScore);
  }, [scores]);

  return (
    <div>
      <h5>{Constants.SCORE}</h5>
      <label>{score}</label>
    </div>
  );
};

Score.propTypes = {
  scores: PropTypes.number.isRequired,
};

export default Score;
