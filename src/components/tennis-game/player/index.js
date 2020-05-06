import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Player = (props) => {
  if (props.isGameOver) {
    return <h5>{props.name}</h5>;
  }

  return (
    <div>
      <h5>{props.name}</h5>
      <button onClick={() => props.onUpdateScore(props.name)}>
        {Constants.PLAYER_BUTTON_TEXT}
      </button>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  onUpdateScore: PropTypes.func,
};

export default Player;
