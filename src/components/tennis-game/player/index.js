import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Player = (props) => {
  return (
    <div>
      <h5>{props.name}</h5>
      <button>{Constants.PLAYER_BUTTON_TEXT}</button>
    </div>
  );
};

Player.prototype = {
  name: PropTypes.string.isRequired,
};

export default Player;
