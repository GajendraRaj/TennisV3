import React, { useState } from "react";
import Constants from "../../../constant";

const Score = () => {
  const [score, setScore] = useState(0);
  return (
    <div>
      <h5>{Constants.SCORE}</h5>
      <label>{score}</label>
    </div>
  );
};

export default Score;
