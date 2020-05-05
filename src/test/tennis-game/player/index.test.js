import React from "react";
import { shallow } from "enzyme";
import Player from "../../../components/tennis-game/player";
import checkPropTypes from "check-prop-types";

describe("Player component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Player name={"Player 1"} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the first player name as Player 1", () => {
    expect(wrapper.find("h5").text()).toBe("Player 1");
  });

  it("should render button for scoring", () => {
    expect(wrapper.find("button").length).toBe(1);
  });

  it("should render the Second player name as Player 2", () => {
    const wrapper = shallow(<Player name={"Player 2"} />);
    expect(wrapper.find("h5").text()).toBe("Player 2");
  });

  it("Should throw error message if there is no name prop", () => {
    const errorMsg =
      "Failed prop type: The prop `name` is marked as required in `Player`, but its value is `undefined`.";

    const result = checkPropTypes(
      Player.propTypes,
      { name: undefined },
      "prop",
      Player.name
    );

    expect(result).toEqual(errorMsg);
  });

  it("Should throw error message if name prop type is not a string", () => {
    const errorMsg =
      "Failed prop type: Invalid prop `name` of type `number` supplied to `Player`, expected `string`.";

    const result = checkPropTypes(
      Player.propTypes,
      { name: 12 },
      "prop",
      Player.name
    );

    expect(result).toEqual(errorMsg);
  });
});
