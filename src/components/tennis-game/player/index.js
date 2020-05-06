import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Player = (props) => {
  const { isGameOver, name, onUpdateScore } = props;

  if (isGameOver) {
    return <h5>{name}</h5>;
  }

  return (
    <div>
      <h5>{name}</h5>
      <button onClick={() => onUpdateScore(props.name)}>
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
